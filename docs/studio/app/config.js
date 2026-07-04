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

    // Product catalog. Each product keys to its blueprint/shading assets
    // (assets/{asset}-blueprint.png), a shop `productId`, and one or more BRAND
    // variants. Each brand variant has a shop `variantId` and a price.
    //
    // After the design is saved, "Continue to Shop" opens the product-details
    // page with the variant preselected:
    //   {SHOP_URL}/product-details/product/{productId}/?variant={variantId}
    // in a NEW TAB (the studio tab stays open so the order number can still be
    // copied). NOTE: we intentionally do NOT deep-link to /checkout — GHL's
    // buy-now checkout is session-based (it only populates after the shopper
    // clicks Buy Now on the product page), so a bare /checkout link always shows
    // an empty cart from a fresh tab. The product page is the reliable entry.
    //
    // Products with a single brand hide the brand picker. Leave `variantId`
    // empty ('') for a variant not yet orderable online — it shows a "coming
    // soon". Omit `variant=` entirely for products that have no variants.
    CATALOG: {
        '30oz': {
            label: '30oz Tumbler',
            asset: '30oz',
            productId: '66c38a8c16adf7e02efc2a3d',
            description: 'Double-Wall · Vacuum Insulated · Cup Holder Compatible · Leak Resistant. Wrapped in 3M vehicle-wrap material — the industry standard, sun-safe with no fading for 3+ years.',
            brands: {
                'Hogg': { variantId: '66c3918316adf7836ffc3187', price: 64.95, note: 'High quality · Sliding lid · Clear straw' },
                'YETI': { variantId: '66c3918316adf78433fc3189', price: 94.95, note: 'Premium quality · MagSlider lid' }
            }
        },
        '20oz': {
            label: '20oz Tumbler',
            asset: '20oz',
            productId: '66c38a8c16adf7e02efc2a3d',
            description: 'Double-Wall · Vacuum Insulated · Cup Holder Compatible · Leak Resistant. Wrapped in 3M vehicle-wrap material — the industry standard, sun-safe with no fading for 3+ years.',
            brands: {
                'Hogg': { variantId: '66c38a8c16adf764f6fc2a3f', price: 59.95, note: 'High quality · Sliding lid · Clear straw' },
                'YETI': { variantId: '66c3918316adf7632dfc3185', price: 89.95, note: 'Premium quality · MagSlider lid' }
            }
        },
        '20ozSkinny': {
            label: '20oz Skinny Tumbler',
            asset: '20ozSkinny',
            productId: '66e0f4d80e9a422ad2b9ff2c',
            description: 'Double-Wall · Vacuum Insulated · Clear lid with straw · Vent hole for better drinking · Individually boxed · Leakproof · BPA-free. Dye-sublimation printed — durable and easy to care for.',
            brands: {
                'Hogg': { variantId: '', price: 27.00, note: '' }
            }
        }
    }
};
