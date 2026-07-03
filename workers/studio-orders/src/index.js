// Studio order API: receives finished designs from the Creator Studio,
// stores them in R2 under the order number, and (optionally) notifies GHL.
//
// Endpoints:
//   POST /orders                    create or update an order
//   GET  /orders/:id/design.json    editable design state (reopened by the studio)
//   GET  /orders/:id/print.png      high-res production file
//   GET  /orders/:id/preview.jpg    low-res watermarked proof
//   GET  /orders/:id/meta.json      email, product, timestamps

const ID_RE = /^PNC-[a-z0-9-]{6,40}$/i;

function cors(env, extra = {}) {
    return {
        'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        ...extra
    };
}

function b64ToBytes(b64) {
    const bin = atob(b64.replace(/^data:[^,]+,/, ''));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
}

export default {
    async fetch(req, env) {
        const url = new URL(req.url);

        if (req.method === 'OPTIONS') {
            return new Response(null, { headers: cors(env) });
        }

        // ---- Create / update an order ----
        if (req.method === 'POST' && url.pathname === '/orders') {
            let body;
            try { body = await req.json(); } catch {
                return Response.json({ error: 'Invalid JSON' }, { status: 400, headers: cors(env) });
            }
            const { orderId, email, product, productLabel, designJson, printPng, previewJpg } = body;
            if (!ID_RE.test(orderId || '') || !email || !designJson || !printPng) {
                return Response.json({ error: 'Missing or invalid fields' }, { status: 400, headers: cors(env) });
            }

            const id = orderId.toUpperCase();
            const existing = await env.ORDERS.get(`${id}/meta.json`);
            const prevMeta = existing ? await existing.json() : null;

            const meta = {
                orderId: id,
                email,
                product: product || '',
                productLabel: productLabel || '',
                createdAt: prevMeta ? prevMeta.createdAt : new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                revision: prevMeta ? (prevMeta.revision || 1) + 1 : 1
            };

            await Promise.all([
                env.ORDERS.put(`${id}/design.json`, designJson, { httpMetadata: { contentType: 'application/json' } }),
                env.ORDERS.put(`${id}/print.png`, b64ToBytes(printPng), { httpMetadata: { contentType: 'image/png' } }),
                previewJpg
                    ? env.ORDERS.put(`${id}/preview.jpg`, b64ToBytes(previewJpg), { httpMetadata: { contentType: 'image/jpeg' } })
                    : Promise.resolve(),
                env.ORDERS.put(`${id}/meta.json`, JSON.stringify(meta), { httpMetadata: { contentType: 'application/json' } })
            ]);

            // Notify GHL so a workflow can create the contact + send emails.
            // Best effort: an unreachable webhook must not lose the order (it's in R2).
            if (env.GHL_WEBHOOK_URL) {
                const base = url.origin;
                try {
                    await fetch(env.GHL_WEBHOOK_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            orderId: id,
                            email,
                            product: meta.productLabel || meta.product,
                            revision: meta.revision,
                            designUrl: `${base}/orders/${id}/design.json`,
                            printUrl: `${base}/orders/${id}/print.png`,
                            previewUrl: `${base}/orders/${id}/preview.jpg`,
                            editUrl: `https://printncraftco.com/studio/?order=${id}`
                        })
                    });
                } catch (e) { /* order is safe in R2 either way */ }
            }

            return Response.json({ ok: true, orderId: id, revision: meta.revision }, { headers: cors(env) });
        }

        // ---- Fetch order files ----
        const m = url.pathname.match(/^\/orders\/([^/]+)\/(design\.json|print\.png|preview\.jpg|meta\.json)$/);
        if (req.method === 'GET' && m) {
            const [, rawId, file] = m;
            if (!ID_RE.test(rawId)) return new Response('Not found', { status: 404, headers: cors(env) });
            const obj = await env.ORDERS.get(`${rawId.toUpperCase()}/${file}`);
            if (!obj) return new Response('Not found', { status: 404, headers: cors(env) });
            return new Response(obj.body, {
                headers: cors(env, { 'Content-Type': obj.httpMetadata?.contentType || 'application/octet-stream' })
            });
        }

        return new Response('Not found', { status: 404, headers: cors(env) });
    }
};
