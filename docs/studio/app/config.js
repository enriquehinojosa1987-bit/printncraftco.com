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
    REVIEW_WINDOW_HOURS: 24,

    // Maps each studio product to its shop checkout page. After the design is
    // saved, "Proceed to Checkout" sends the customer here (order number is
    // appended as ?ref / &ref). Leave a value empty ('') for products not yet
    // available to order online — the studio shows a "coming soon" message.
    PRODUCTS: {
        '30oz':       'https://shop.printncraftco.com/product-details/product/66c38a8c16adf7e02efc2a3d/?variant=66c38a8c16adf764f6fc2a3f',
        '20ozSkinny': 'https://shop.printncraftco.com/product-details/product/66e0f4d80e9a422ad2b9ff2c',
        '20oz':       ''  // placeholder — being set up
    }
};
