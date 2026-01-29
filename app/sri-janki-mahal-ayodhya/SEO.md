# SEO docs: `app/sri-janki-mahal-ayodhya`

## Page purpose

This is a **high-intent landing page** meant to rank for spelling variants pilgrims commonly use:

- sri janki mahal
- sri janaki mahal
- shri janki mahal ayodhya
- janaki mahal trust ayodhya

The page is written to be **helpful** (not keyword spam) and to reduce fraud/confusion by guiding visitors to the official booking channels shown on the site.

## On-page SEO structure

- One H1 focused on query intent + brand alignment
- “Known by many names” section to map variants to the same entity
- Booking CTA buttons near the top (call + WhatsApp)
- Location block and internal links to:
  - `/about/`
  - `/#rooms`
  - `/#contact`

## Structured data (page-level)

The page injects a JSON-LD `@graph` containing:

- `WebPage`
- `BreadcrumbList`
- `FAQPage`

This complements the global schema graph from `app/layout.tsx`.

## Editing guidelines

- Keep language natural; do not stuff keywords.
- Add FAQs only when they reflect real user questions.
- If you change URLs or slugs, update:
  - `app/sitemap.ts` entry
  - `metadata.path` in the page

