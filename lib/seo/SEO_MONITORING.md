# SEO Monitoring Checklist (Monthly) — Sri Janaki Mahal Trust

Use this document once per month (and during major updates) to keep SEO stable while you scale content.

## 1) Google Search Console (GSC)

- **Sitemaps**: `sitemap.xml` submitted and processed successfully.
- **Pages/Indexing**:
  - Check “Pages” report for excluded pages (soft 404, blocked by robots, duplicate canonical).
  - Spot-check key URLs using URL inspection:
    - `/`
    - `/sri-janki-mahal-ayodhya/`
    - `/verified-booking-sri-janki-mahal/`
    - `/blog/`
- **Performance**:
  - Track impressions/clicks for query clusters:
    - brand variants: `sri janaki mahal`, `sri janki mahal`, `shri janki mahal`
    - intent: `verified booking`, `contact number`, `dharmshala near ram mandir`, `ac non ac rooms`
    - location: `ayodhya`, `karsewakpuram`, `near ram mandir`

## 2) Canonical checks (technical)

For a sample of ~10 URLs, confirm:\n
- canonical is on `https://www.srijanakimahaltrustofficial.com`\n
- canonical path ends with `/` (this repo uses `trailingSlash: true`)\n
- OpenGraph url matches canonical\n

If any mismatch occurs, fix `BUSINESS_INFO.website` or `lib/metadata.ts`.

## 3) Sitemap coverage

- Confirm new pages were added to `app/sitemap.ts`:\n
  - all landing pages\n
  - blog index\n
  - blog posts\n

## 4) Broken links

- Ensure header/footer links work from:\n
  - home page\n
  - SEO landing pages\n
  - blog posts\n

## 5) Local SEO (GBP) health

- Review counts and recent reviews trend (steady > bursts).\n
- Photos updated in last 7–14 days.\n
- Q&A has answers to top 10 questions.\n

Use `lib/seo/GBP_PLAYBOOK.md` weekly.

## 6) Keyword cluster tracking template

Track progress in a simple table (copy/paste into a sheet):\n

| Cluster | Target pages | Example queries | Notes |\n
|---|---|---|---|\n
| Brand variants | /sri-janki-mahal-ayodhya/ | sri janki mahal, sri janaki mahal | |\n
| Verified booking | /verified-booking-sri-janki-mahal/ | verified booking sri janki mahal | |\n
| Near Ram Mandir | /dharmshala-near-ram-mandir-ayodhya/ | dharmshala near ram mandir ayodhya | |\n
| Rooms | /ac-non-ac-rooms-ayodhya-ram-mandir/ | ac rooms ayodhya near ram mandir | |\n
| Meals | /meals-included-stay-ayodhya/ | meals included stay ayodhya | |\n
| Blog support | /blog/* | how to book, avoid scams | |\n

