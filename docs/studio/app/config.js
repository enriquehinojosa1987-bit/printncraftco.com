// ==========================================
// STUDIO CONFIGURATION
// Fill these in as each piece of infrastructure goes live.
// ==========================================
const STUDIO_CONFIG = {
    // Cloudflare Worker endpoint that stores orders (see workers/studio-orders/).
    // Until this is set, Approve & Buy falls back to downloading the files locally.
    ORDER_API: 'https://studio-orders.printncraftco.workers.dev',

    // Where customers go to pay once the GHL shop subdomain is live.
    SHOP_URL: 'https://shop.printncraftco.com',

    // Print export scale: canvas is 600px tall, multiplier 4 = 2400px.
    // When you give me real wrap dimensions per product we can hit exact 300 DPI.
    PRINT_MULTIPLIER: 4,

    // How long customers have to request changes before production starts.
    REVIEW_WINDOW_HOURS: 24
};
