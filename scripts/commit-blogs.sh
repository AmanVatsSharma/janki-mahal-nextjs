#!/usr/bin/env bash
# @file commit-blogs.sh
# @module blog-git
# @description Creates one git commit per changed blog markdown file.
# @author BharatERP
# @created 2026-02-15

set -euo pipefail

dry_run="false"
if [[ "${1:-}" == "--dry-run" ]]; then
  dry_run="true"
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: current directory is not inside a git repository."
  exit 1
fi

if [[ ! -d "content/blog" ]]; then
  echo "Error: content/blog directory not found. Run this from the nextjs root."
  exit 1
fi

# Safety: avoid mixing this automation with already staged files.
if ! git diff --cached --quiet; then
  echo "Error: staged changes detected."
  echo "Please commit or unstage them first, then rerun this script."
  exit 1
fi

shopt -s nullglob globstar
mapfile -t blog_files < <(printf '%s\n' content/blog/**/*.md | LC_ALL=C sort)

if [[ ${#blog_files[@]} -eq 0 ]]; then
  echo "No blog markdown files found under content/blog."
  exit 0
fi

committed=0
skipped=0

for file_path in "${blog_files[@]}"; do
  # Commit only files that currently have git changes (new/modified/deleted).
  if [[ -z "$(git status --porcelain -- "${file_path}")" ]]; then
    skipped=$((skipped + 1))
    continue
  fi

  slug="${file_path#content/blog/}"
  slug="${slug%.md}"
  commit_message="added blog - ${slug}"

  if [[ "${dry_run}" == "true" ]]; then
    echo "[DRY RUN] ${commit_message} (${file_path})"
    committed=$((committed + 1))
    continue
  fi

  git add -- "${file_path}"
  git commit -m "${commit_message}"

  committed=$((committed + 1))
done

echo "Completed blog commits."
if [[ "${dry_run}" == "true" ]]; then
  echo "Would commit files: ${committed}"
else
  echo "Committed files: ${committed}"
fi
echo "Skipped unchanged files: ${skipped}"
