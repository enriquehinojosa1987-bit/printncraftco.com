# Studio Orders Worker

Receives finished designs from the Creator Studio and stores them in
Cloudflare R2 under the order number. Replaces the old "save into the site
file manager" approach (impossible on GitHub Pages — static hosting can't
receive uploads).

Each order stores:
- `design.json` — editable design state (the studio can reopen it)
- `print.png` — high-resolution production file
- `preview.jpg` — low-res watermarked proof the customer downloaded
- `meta.json` — email, product, created/updated timestamps, revision count

## One-time deploy (~10 minutes)

1. Create a free Cloudflare account at dash.cloudflare.com if you don't have one.
2. In a terminal:
   ```
   cd workers/studio-orders
   npx wrangler login          # opens browser, authorize
   npx wrangler r2 bucket create printncraft-orders
   npx wrangler deploy
   ```
3. Copy the printed URL (like `https://studio-orders.<your-subdomain>.workers.dev`)
   into `docs/studio/config.js` as `ORDER_API`, commit, push.

## Wiring GHL (optional but recommended)

In GHL create a workflow with an **Inbound Webhook** trigger, copy its URL
into `wrangler.toml` under `GHL_WEBHOOK_URL`, and run `npx wrangler deploy`
again. Every order then posts `orderId`, `email`, `product`, file links, and
an `editUrl` to GHL — use the workflow to create the contact and send the
order confirmation email with the review-window wording.

## Handling change requests

Open `https://printncraftco.com/studio/?order=PNC-XXXXXX` — the studio loads
that order's design, you make the changes, and Approve & Buy re-saves it as
a new revision under the same order number (the production `print.png` is
replaced, `meta.json` increments `revision`).
