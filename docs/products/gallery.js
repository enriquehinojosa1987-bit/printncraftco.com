/* Print & Craft Co. — products gallery.
   HOW TO ADD MEDIA: drop files into /docs/products/gallery/<category>/ and
   list them in the MANIFEST below (type: "image" or "video"). Order here is
   display order. For videos, an optional "poster" image shows before play. */

const GALLERY_MANIFEST = {
    apparel: [
        { type: "image", src: "/products/gallery/apparel/apparel-001.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-002.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-003.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/apparel-004.mp4", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/apparel-005.mp4", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-006.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-007.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/apparel-008.mp4", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/apparel-009.mp4", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-010.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-011.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/apparel-012.mp4", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-013.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/apparel-014.mp4", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-015.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-016.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-017.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-018.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-019.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-020.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-021.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-022.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-023.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-024.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-025.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-026.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-027.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-028.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-029.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-030.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-031.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-032.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-033.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-034.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-035.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-036.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-037.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-038.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-039.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-040.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-041.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-042.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-043.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-044.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-045.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-046.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-047.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-048.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-049.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-050.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-051.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-052.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-053.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-054.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-055.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-056.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-057.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-058.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-059.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-060.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-061.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-062.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-063.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-064.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-065.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-066.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-067.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-068.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-069.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-070.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-071.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-072.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-073.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-074.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-075.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-076.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-077.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-078.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-079.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-080.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-081.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-082.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-083.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-084.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-085.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-086.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-087.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-088.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-089.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-090.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-091.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-092.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-093.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-094.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-095.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-096.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-097.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-098.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-099.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-100.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-101.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-102.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-103.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-104.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-105.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-106.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-107.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-108.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-109.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-110.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-111.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-112.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-113.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-114.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-115.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-116.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-117.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-118.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-119.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-120.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-121.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-122.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-123.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-124.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-125.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-126.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/apparel-127.jpg", alt: "Custom apparel by Print & Craft Co." },
    ],
    drinkware: [
        { type: "image", src: "/products/gallery/drinkware/drinkware-001.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-002.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-003.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-004.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-005.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-006.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-007.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-008.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-009.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-010.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-011.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-012.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-013.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-014.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-015.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-016.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-017.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-018.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-019.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-020.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-021.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-022.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-023.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-024.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-025.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-026.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-027.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-028.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-029.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-030.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-031.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-032.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-033.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-034.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-035.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-036.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-037.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-038.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-039.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-040.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-041.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-042.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-043.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-044.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-045.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-046.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-047.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-048.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-049.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-050.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-051.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-052.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-053.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-054.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-055.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-056.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-057.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-058.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-059.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-060.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-061.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-062.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-063.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-064.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-065.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-066.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-067.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-068.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-069.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-070.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-071.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-072.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-073.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-074.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-075.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-076.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-077.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-078.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-079.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-080.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-081.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-082.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-083.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-084.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-085.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-086.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-087.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-088.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-089.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-090.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-091.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-092.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-093.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-094.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-095.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-096.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-097.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-098.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-099.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/drinkware-100.jpg", alt: "Custom drinkware by Print & Craft Co." },
    ],
    accessories: [
        { type: "image", src: "/products/gallery/accessories/accessories-001.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-002.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-003.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-004.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-005.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-006.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-007.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-008.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-009.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-010.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-011.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-012.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-013.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-014.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-015.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-016.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-017.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-018.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/accessories-019.mp4", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-020.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/accessories-021.mp4", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-022.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-023.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-024.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-025.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/accessories-026.mp4", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-027.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-028.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-029.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-030.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/accessories-031.mp4", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-032.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/accessories-033.mp4", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/accessories-034.jpg", alt: "Custom accessories by Print & Craft Co." },
    ],
    signs: [
        { type: "image", src: "/products/gallery/signs/signs-001.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-002.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-003.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-004.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-005.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-006.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-007.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-008.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-009.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-010.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-011.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-012.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-013.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-014.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-015.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-016.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-017.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-018.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-019.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-020.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-021.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-022.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-023.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-024.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-025.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-026.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-027.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-028.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-029.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-030.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-031.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-032.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-033.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-034.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-035.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-036.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-037.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-038.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-039.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-040.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-041.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-042.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-043.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-044.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-045.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-046.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-047.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-048.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-049.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-050.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-051.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-052.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-053.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-054.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-055.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-056.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-057.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-058.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-059.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-060.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-061.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-062.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-063.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-064.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-065.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-066.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-067.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-068.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-069.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-070.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-071.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-072.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-073.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-074.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-075.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-076.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-077.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-078.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-079.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-080.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-081.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-082.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-083.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-084.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-085.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-086.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-087.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-088.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-089.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-090.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-091.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-092.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-093.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-094.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-095.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-096.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-097.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-098.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-099.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-100.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-101.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-102.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-103.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-104.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-105.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-106.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-107.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-108.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-109.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-110.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-111.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-112.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-113.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-114.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-115.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-116.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-117.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-118.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-119.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-120.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-121.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-122.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-123.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-124.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-125.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-126.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-127.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-128.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-129.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-130.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-131.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-132.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-133.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-134.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-135.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-136.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-137.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-138.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-139.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-140.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-141.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-142.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-143.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-144.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-145.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-146.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-147.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-148.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-149.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-150.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-151.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-152.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-153.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-154.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-155.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-156.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-157.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-158.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-159.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-160.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-161.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-162.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-163.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-164.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-165.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-166.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-167.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-168.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-169.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-170.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-171.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-172.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-173.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-174.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-175.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-176.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-177.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-178.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-179.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-180.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-181.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-182.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-183.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-184.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-185.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-186.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-187.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-188.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-189.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-190.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-191.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-192.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-193.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-194.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-195.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-196.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-197.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-198.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-199.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-200.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-201.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-202.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-203.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-204.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-205.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-206.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-207.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-208.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-209.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-210.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-211.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-212.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-213.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-214.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-215.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-216.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-217.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-218.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-219.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-220.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-221.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-222.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-223.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-224.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-225.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-226.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-227.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-228.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-229.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-230.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-231.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-232.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-233.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-234.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-235.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-236.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-237.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-238.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-239.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-240.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-241.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-242.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-243.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-244.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-245.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-246.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-247.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-248.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-249.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-250.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-251.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-252.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-253.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-254.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-255.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-256.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-257.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-258.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-259.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-260.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-261.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-262.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-263.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-264.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-265.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-266.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-267.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-268.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-269.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-270.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-271.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-272.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-273.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-274.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-275.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-276.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-277.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-278.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-279.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-280.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-281.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-282.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-283.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-284.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-285.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-286.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-287.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-288.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-289.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-290.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-291.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-292.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-293.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-294.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-295.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-296.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-297.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-298.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-299.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-300.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-301.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-302.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-303.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-304.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-305.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-306.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-307.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-308.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-309.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-310.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-311.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-312.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-313.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-314.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-315.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-316.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-317.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-318.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-319.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-320.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-321.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-322.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-323.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-324.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-325.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-326.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-327.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-328.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-329.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-330.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-331.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-332.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-333.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-334.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-335.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-336.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-337.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-338.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-339.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-340.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-341.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-342.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-343.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-344.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-345.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-346.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-347.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-348.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-349.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-350.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-351.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/signs-352.mp4", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-353.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-354.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-355.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-356.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-357.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-358.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-359.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-360.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-361.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-362.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-363.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-364.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-365.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-366.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-367.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-368.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-369.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-370.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-371.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-372.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-373.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-374.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-375.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-376.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-377.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-378.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-379.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-380.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-381.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-382.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-383.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-384.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-385.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-386.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-387.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-388.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-389.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-390.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-391.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-392.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-393.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-394.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-395.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-396.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/signs-397.jpg", alt: "Custom signs by Print & Craft Co." },
    ],
    prints: [
        { type: "image", src: "/products/gallery/prints/prints-001.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-002.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-003.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-004.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-005.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-006.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-007.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-008.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-009.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-010.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-011.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-012.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-013.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-014.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-015.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-016.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-017.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-018.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-019.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-020.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-021.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-022.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-023.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-024.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-025.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-026.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-027.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-028.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-029.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-030.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-031.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-032.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-033.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-034.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-035.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-036.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-037.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-038.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-039.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-040.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-041.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-042.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-043.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-044.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-045.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/prints-046.jpg", alt: "Custom prints by Print & Craft Co." },
    ],
};

const GALLERY_LABELS = { apparel: "Apparel", drinkware: "Drinkware", accessories: "Accessories", prints: "Prints", signs: "Signs" };

(function () {
    const root = document.getElementById("gallery");
    if (!root) return;

    const cats = Object.keys(GALLERY_MANIFEST);
    let activeCat = "all";       // grid filter
    let lbCat = null;            // lightbox category
    let lbIndex = 0;

    /* ---------- grid ---------- */
    const tabs = root.querySelector(".gallery-tabs");
    const grid = root.querySelector(".gallery-grid");

    function tabButton(cat, label) {
        const b = document.createElement("button");
        b.className = "gallery-tab";
        b.textContent = label;
        b.dataset.cat = cat;
        b.addEventListener("click", () => { activeCat = cat; renderGrid(); });
        return b;
    }
    tabs.appendChild(tabButton("all", "All"));
    cats.forEach(c => tabs.appendChild(tabButton(c, GALLERY_LABELS[c])));

    function tile(cat, item, i) {
        const t = document.createElement("button");
        t.className = "gallery-tile";
        t.setAttribute("aria-label", (item.alt || GALLERY_LABELS[cat]) + " — view gallery");
        if (item.type === "video") {
            const v = document.createElement("video");
            v.src = item.src;
            v.muted = true; v.loop = true; v.playsInline = true;
            v.preload = "metadata";
            if (item.poster) v.poster = item.poster;
            t.appendChild(v);
            t.insertAdjacentHTML("beforeend", '<span class="play-badge">&#9654;</span>');
            t.addEventListener("mouseenter", () => v.play().catch(() => {}));
            t.addEventListener("mouseleave", () => v.pause());
        } else {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt || "";
            img.loading = "lazy";
            img.decoding = "async";
            t.appendChild(img);
        }
        t.insertAdjacentHTML("beforeend", '<span class="tile-cat">' + GALLERY_LABELS[cat] + "</span>");
        t.addEventListener("click", () => openLightbox(cat, i));
        return t;
    }

    const GRID_MAX = 8; // 2 rows of 4 — click any tile to browse the rest in the lightbox

    function renderGrid() {
        tabs.querySelectorAll(".gallery-tab").forEach(b =>
            b.classList.toggle("active", b.dataset.cat === activeCat));
        grid.innerHTML = "";
        // build (cat, item, index) list; "All" interleaves categories for variety
        let list = [];
        let total = 0;
        if (activeCat === "all") {
            total = cats.reduce((s, c) => s + GALLERY_MANIFEST[c].length, 0);
            for (let i = 0; list.length < GRID_MAX; i++) {
                let added = false;
                for (const c of cats) {
                    if (i < GALLERY_MANIFEST[c].length && list.length < GRID_MAX) {
                        list.push([c, GALLERY_MANIFEST[c][i], i]); added = true;
                    }
                }
                if (!added) break;
            }
        } else {
            total = GALLERY_MANIFEST[activeCat].length;
            list = GALLERY_MANIFEST[activeCat].slice(0, GRID_MAX)
                .map((item, i) => [activeCat, item, i]);
        }
        list.forEach(([cat, item, i], pos) => {
            const t = tile(cat, item, i);
            if (pos === list.length - 1 && total > GRID_MAX) {
                t.insertAdjacentHTML("beforeend",
                    '<span class="tile-more">+' + (total - GRID_MAX) + ' more</span>');
            }
            grid.appendChild(t);
        });
    }

    /* ---------- lightbox ---------- */
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
        '<div class="lightbox-top"><div class="lightbox-cats"></div>' +
        '<button class="lightbox-close" aria-label="Close">&times;</button></div>' +
        '<button class="lightbox-arrow prev" aria-label="Previous">&#8249;</button>' +
        '<div class="lightbox-stage"></div>' +
        '<button class="lightbox-arrow next" aria-label="Next">&#8250;</button>' +
        '<div class="lightbox-count"></div>';
    document.body.appendChild(lb);

    const lbCats = lb.querySelector(".lightbox-cats");
    const stage = lb.querySelector(".lightbox-stage");
    const counter = lb.querySelector(".lightbox-count");

    cats.forEach(c => {
        const b = document.createElement("button");
        b.className = "gallery-tab";
        b.textContent = GALLERY_LABELS[c];
        b.dataset.cat = c;
        b.addEventListener("click", () => { lbCat = c; lbIndex = 0; renderStage(); });
        lbCats.appendChild(b);
    });

    function renderStage() {
        lbCats.querySelectorAll(".gallery-tab").forEach(b =>
            b.classList.toggle("active", b.dataset.cat === lbCat));
        const items = GALLERY_MANIFEST[lbCat];
        const item = items[lbIndex];
        stage.innerHTML = "";
        if (item.type === "video") {
            const v = document.createElement("video");
            v.src = item.src;
            v.controls = true; v.autoplay = true; v.playsInline = true;
            if (item.poster) v.poster = item.poster;
            stage.appendChild(v);
        } else {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt || "";
            img.decoding = "async";
            stage.appendChild(img);
        }
        counter.textContent = GALLERY_LABELS[lbCat] + " — " + (lbIndex + 1) + " / " + items.length;
    }

    function openLightbox(cat, i) {
        lbCat = cat; lbIndex = i;
        renderStage();
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
        lb.classList.remove("open");
        stage.innerHTML = "";               // stops any playing video
        document.body.style.overflow = "";
    }
    function step(d) {
        const n = GALLERY_MANIFEST[lbCat].length;
        lbIndex = (lbIndex + d + n) % n;
        renderStage();
    }

    lb.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lb.querySelector(".prev").addEventListener("click", () => step(-1));
    lb.querySelector(".next").addEventListener("click", () => step(1));
    lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", e => {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
    });

    renderGrid();
})();
