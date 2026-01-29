# Google Business Profile (GBP) Playbook — Sri Janaki Mahal Trust (Ayodhya)

This playbook is a **repeatable weekly routine** to strengthen local SEO and increase rankings for queries like:

- “Sri Janaki Mahal Trust Ayodhya”
- “Sri/Shri Janki Mahal Ayodhya”
- “stay near Ram Mandir”
- “dharmshala near Ram Mandir Ayodhya”

## Non-negotiables (consistency)

- **NAP consistency**: Name, Address, Phone must match the website exactly.
- **Use one official phone number** everywhere.
- **Avoid fake promises**: don’t claim star ratings in schema unless verifiable.

## Weekly routine (30–60 minutes)

### 1) Photos (weekly)
- Upload 5–15 photos:
  - entrance + signage
  - courtyard
  - 2–3 room photos (AC/Non-AC)
  - meals/food area (if allowed)
  - staff/helpdesk
- Naming tip (offline): keep filenames descriptive (helps later): `sri-janaki-mahal-trust-ayodhya-room-ac.jpg`

### 2) GBP Posts (1–2 per week)
Post types:
- “Availability this week”
- “Festival guidance / peak dates”
- “Meals included info”
- “Verified booking warning (avoid fraud)”

Post template:
- Title: `Verified booking for Ayodhya stay`
- Body: `Book only via official call/WhatsApp on our website. Share dates + guest count for confirmation.`
- CTA: `Call now` / `Message`

### 3) Q&A (weekly)
Seed common questions (and answer them):
- “Is this near Ram Mandir?”
- “Do you have AC and Non-AC rooms?”
- “Are meals included?”
- “What ID is needed at check-in?”
- “How to avoid fake bookings?”

### 4) Reviews (ongoing)
Goal: steady stream, not bursts.

**After check-out**, send a WhatsApp message:

> Namaste 🙏 Thank you for staying with Sri Janaki Mahal Trust, Ayodhya.\n\
> If you had a good experience, please share a Google review (it helps other pilgrims find verified booking).\n\
> Review link: [PASTE_YOUR_GBP_REVIEW_LINK]\n\
> Jai Shri Ram 🙏

Add a simple QR at reception linking to the review URL.

## Monthly routine
- Update business description for clarity (not keyword spam).
- Check categories (primary + secondary) reflect services.
- Confirm map pin and address accuracy.

## Notes for developers
- Store the GBP share/review URL in `lib/constants.ts` under `BUSINESS_INFO.social.googleBusinessProfile`.
- Schema will automatically include it in `sameAs` when present.

