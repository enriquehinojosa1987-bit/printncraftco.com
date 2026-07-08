/* Print & Craft Co. — products gallery.
   HOW TO ADD MEDIA: drop files into /docs/products/gallery/<category>/ and
   list them in the MANIFEST below (type: "image" or "video"). Order here is
   display order. For videos, an optional "poster" image shows before play. */

const GALLERY_MANIFEST = {
    apparel: [
        { type: "image", src: "/products/gallery/apparel/13882498-10208801775394616-3831803707001-fcb5d9.jpg", thumb: "/products/gallery/apparel/thumbs/13882498-10208801775394616-3831803707001-fcb5d9.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/file-oct-04-8-37-00-am-a15a9b.jpg", thumb: "/products/gallery/apparel/thumbs/file-oct-04-8-37-00-am-a15a9b.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/flexi-untitled-1-2016-08-26-17-46-51-ccc4c6.jpg", thumb: "/products/gallery/apparel/thumbs/flexi-untitled-1-2016-08-26-17-46-51-ccc4c6.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/img-0055-80ff7e.mp4", thumb: "/products/gallery/apparel/thumbs/img-0055-80ff7e.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/img-0056-2b3011.mp4", thumb: "/products/gallery/apparel/thumbs/img-0056-2b3011.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0057-516be9.jpg", thumb: "/products/gallery/apparel/thumbs/img-0057-516be9.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0084-06db64.jpg", thumb: "/products/gallery/apparel/thumbs/img-0084-06db64.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/img-0241-e9ea37.mp4", thumb: "/products/gallery/apparel/thumbs/img-0241-e9ea37.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/img-0465-cb7f35.mp4", thumb: "/products/gallery/apparel/thumbs/img-0465-cb7f35.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0505-5d337a.jpg", thumb: "/products/gallery/apparel/thumbs/img-0505-5d337a.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0510-580684.jpg", thumb: "/products/gallery/apparel/thumbs/img-0510-580684.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/img-0515-f3ff87.mp4", thumb: "/products/gallery/apparel/thumbs/img-0515-f3ff87.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0561-bd81b6.jpg", thumb: "/products/gallery/apparel/thumbs/img-0561-bd81b6.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "video", src: "/products/gallery/apparel/img-0562-a2885f.mp4", thumb: "/products/gallery/apparel/thumbs/img-0562-a2885f.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0563-82569e.jpg", thumb: "/products/gallery/apparel/thumbs/img-0563-82569e.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0564-284883.jpg", thumb: "/products/gallery/apparel/thumbs/img-0564-284883.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0684-3c86df.jpg", thumb: "/products/gallery/apparel/thumbs/img-0684-3c86df.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0685-cefbe1.jpg", thumb: "/products/gallery/apparel/thumbs/img-0685-cefbe1.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0686-6ddb88.jpg", thumb: "/products/gallery/apparel/thumbs/img-0686-6ddb88.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0774-e607a8.jpg", thumb: "/products/gallery/apparel/thumbs/img-0774-e607a8.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0931-3996fc.jpg", thumb: "/products/gallery/apparel/thumbs/img-0931-3996fc.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0932-e341e1.jpg", thumb: "/products/gallery/apparel/thumbs/img-0932-e341e1.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0933-d1dd07.jpg", thumb: "/products/gallery/apparel/thumbs/img-0933-d1dd07.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0934-486414.jpg", thumb: "/products/gallery/apparel/thumbs/img-0934-486414.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0935-e1920c.jpg", thumb: "/products/gallery/apparel/thumbs/img-0935-e1920c.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0936-f799d0.jpg", thumb: "/products/gallery/apparel/thumbs/img-0936-f799d0.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0937-c531e7.jpg", thumb: "/products/gallery/apparel/thumbs/img-0937-c531e7.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0954-036b87.jpg", thumb: "/products/gallery/apparel/thumbs/img-0954-036b87.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0965-3c8a7e.jpg", thumb: "/products/gallery/apparel/thumbs/img-0965-3c8a7e.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-0966-d25bbd.jpg", thumb: "/products/gallery/apparel/thumbs/img-0966-d25bbd.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1001-7a23f9.jpg", thumb: "/products/gallery/apparel/thumbs/img-1001-7a23f9.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1002-bea978.jpg", thumb: "/products/gallery/apparel/thumbs/img-1002-bea978.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1021-eef7ac.jpg", thumb: "/products/gallery/apparel/thumbs/img-1021-eef7ac.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1022-814157.jpg", thumb: "/products/gallery/apparel/thumbs/img-1022-814157.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1023-2-4ba3f1.jpg", thumb: "/products/gallery/apparel/thumbs/img-1023-2-4ba3f1.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1023-4ba3f1.jpg", thumb: "/products/gallery/apparel/thumbs/img-1023-4ba3f1.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1038-540e4a.jpg", thumb: "/products/gallery/apparel/thumbs/img-1038-540e4a.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1039-6e2213.jpg", thumb: "/products/gallery/apparel/thumbs/img-1039-6e2213.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1040-a5367c.jpg", thumb: "/products/gallery/apparel/thumbs/img-1040-a5367c.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1041-50d42e.jpg", thumb: "/products/gallery/apparel/thumbs/img-1041-50d42e.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1042-a72ff0.jpg", thumb: "/products/gallery/apparel/thumbs/img-1042-a72ff0.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1043-ecb1ae.jpg", thumb: "/products/gallery/apparel/thumbs/img-1043-ecb1ae.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1044-1491aa.jpg", thumb: "/products/gallery/apparel/thumbs/img-1044-1491aa.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1045-217426.jpg", thumb: "/products/gallery/apparel/thumbs/img-1045-217426.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1054-b15d35.jpg", thumb: "/products/gallery/apparel/thumbs/img-1054-b15d35.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1056-458474.jpg", thumb: "/products/gallery/apparel/thumbs/img-1056-458474.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1150-267d88.jpg", thumb: "/products/gallery/apparel/thumbs/img-1150-267d88.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1151-c04fde.jpg", thumb: "/products/gallery/apparel/thumbs/img-1151-c04fde.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1152-e74c20.jpg", thumb: "/products/gallery/apparel/thumbs/img-1152-e74c20.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1153-2ba761.jpg", thumb: "/products/gallery/apparel/thumbs/img-1153-2ba761.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1154-c32eff.jpg", thumb: "/products/gallery/apparel/thumbs/img-1154-c32eff.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1187-ab5c03.jpg", thumb: "/products/gallery/apparel/thumbs/img-1187-ab5c03.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1216-a71346.jpg", thumb: "/products/gallery/apparel/thumbs/img-1216-a71346.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1222-f6a2bb.jpg", thumb: "/products/gallery/apparel/thumbs/img-1222-f6a2bb.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1223-5d65ba.jpg", thumb: "/products/gallery/apparel/thumbs/img-1223-5d65ba.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1224-c17f42.jpg", thumb: "/products/gallery/apparel/thumbs/img-1224-c17f42.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1288-87a2c6.jpg", thumb: "/products/gallery/apparel/thumbs/img-1288-87a2c6.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1318-45860d.jpg", thumb: "/products/gallery/apparel/thumbs/img-1318-45860d.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1319-fa62c5.jpg", thumb: "/products/gallery/apparel/thumbs/img-1319-fa62c5.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1320-2d2e1f.jpg", thumb: "/products/gallery/apparel/thumbs/img-1320-2d2e1f.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1321-f9d587.jpg", thumb: "/products/gallery/apparel/thumbs/img-1321-f9d587.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1322-4f1ef2.jpg", thumb: "/products/gallery/apparel/thumbs/img-1322-4f1ef2.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1323-036f4a.jpg", thumb: "/products/gallery/apparel/thumbs/img-1323-036f4a.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1329-f3505c.jpg", thumb: "/products/gallery/apparel/thumbs/img-1329-f3505c.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1330-ddb477.jpg", thumb: "/products/gallery/apparel/thumbs/img-1330-ddb477.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1331-747349.jpg", thumb: "/products/gallery/apparel/thumbs/img-1331-747349.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1332-1a935d.jpg", thumb: "/products/gallery/apparel/thumbs/img-1332-1a935d.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1333-947c83.jpg", thumb: "/products/gallery/apparel/thumbs/img-1333-947c83.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1334-2d1504.jpg", thumb: "/products/gallery/apparel/thumbs/img-1334-2d1504.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1335-de5ecf.jpg", thumb: "/products/gallery/apparel/thumbs/img-1335-de5ecf.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1336-c77cf3.jpg", thumb: "/products/gallery/apparel/thumbs/img-1336-c77cf3.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1337-318ac1.jpg", thumb: "/products/gallery/apparel/thumbs/img-1337-318ac1.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1338-f1767a.jpg", thumb: "/products/gallery/apparel/thumbs/img-1338-f1767a.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1349-f1da26.jpg", thumb: "/products/gallery/apparel/thumbs/img-1349-f1da26.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1350-4e694c.jpg", thumb: "/products/gallery/apparel/thumbs/img-1350-4e694c.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1351-e544c7.jpg", thumb: "/products/gallery/apparel/thumbs/img-1351-e544c7.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1376-639396.jpg", thumb: "/products/gallery/apparel/thumbs/img-1376-639396.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1377-af61df.jpg", thumb: "/products/gallery/apparel/thumbs/img-1377-af61df.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1378-50b95d.jpg", thumb: "/products/gallery/apparel/thumbs/img-1378-50b95d.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1379-76e1ee.jpg", thumb: "/products/gallery/apparel/thumbs/img-1379-76e1ee.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1380-68d6df.jpg", thumb: "/products/gallery/apparel/thumbs/img-1380-68d6df.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1381-9377c6.jpg", thumb: "/products/gallery/apparel/thumbs/img-1381-9377c6.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1382-3a2528.jpg", thumb: "/products/gallery/apparel/thumbs/img-1382-3a2528.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1443-5c1cee.jpg", thumb: "/products/gallery/apparel/thumbs/img-1443-5c1cee.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1444-8a8c61.jpg", thumb: "/products/gallery/apparel/thumbs/img-1444-8a8c61.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1445-800ebb.jpg", thumb: "/products/gallery/apparel/thumbs/img-1445-800ebb.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1446-d80f7d.jpg", thumb: "/products/gallery/apparel/thumbs/img-1446-d80f7d.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1455-38c219.jpg", thumb: "/products/gallery/apparel/thumbs/img-1455-38c219.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1456-30ff61.jpg", thumb: "/products/gallery/apparel/thumbs/img-1456-30ff61.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1485-15c045.jpg", thumb: "/products/gallery/apparel/thumbs/img-1485-15c045.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1486-e697aa.jpg", thumb: "/products/gallery/apparel/thumbs/img-1486-e697aa.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1561-7ef091.jpg", thumb: "/products/gallery/apparel/thumbs/img-1561-7ef091.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1592-8075a3.jpg", thumb: "/products/gallery/apparel/thumbs/img-1592-8075a3.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1593-fe4dff.jpg", thumb: "/products/gallery/apparel/thumbs/img-1593-fe4dff.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1594-04003e.jpg", thumb: "/products/gallery/apparel/thumbs/img-1594-04003e.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1595-4e8e09.jpg", thumb: "/products/gallery/apparel/thumbs/img-1595-4e8e09.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1624-f567f4.jpg", thumb: "/products/gallery/apparel/thumbs/img-1624-f567f4.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1626-0d26b3.jpg", thumb: "/products/gallery/apparel/thumbs/img-1626-0d26b3.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-1699-6411b1.jpg", thumb: "/products/gallery/apparel/thumbs/img-1699-6411b1.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2335-0ee53b.jpg", thumb: "/products/gallery/apparel/thumbs/img-2335-0ee53b.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2659-0f1a09.jpg", thumb: "/products/gallery/apparel/thumbs/img-2659-0f1a09.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2660-d24ae5.jpg", thumb: "/products/gallery/apparel/thumbs/img-2660-d24ae5.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2747-0cfe7f.jpg", thumb: "/products/gallery/apparel/thumbs/img-2747-0cfe7f.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2748-1b67ee.jpg", thumb: "/products/gallery/apparel/thumbs/img-2748-1b67ee.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2761-9af8c3.jpg", thumb: "/products/gallery/apparel/thumbs/img-2761-9af8c3.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2762-edbc8f.jpg", thumb: "/products/gallery/apparel/thumbs/img-2762-edbc8f.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2763-aef410.jpg", thumb: "/products/gallery/apparel/thumbs/img-2763-aef410.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2765-c2fd00.jpg", thumb: "/products/gallery/apparel/thumbs/img-2765-c2fd00.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-2921-0eebc3.jpg", thumb: "/products/gallery/apparel/thumbs/img-2921-0eebc3.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-4432-a488b6.jpg", thumb: "/products/gallery/apparel/thumbs/img-4432-a488b6.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-4433-c7fb1a.jpg", thumb: "/products/gallery/apparel/thumbs/img-4433-c7fb1a.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/img-6655-a33688.jpg", thumb: "/products/gallery/apparel/thumbs/img-6655-a33688.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/jesus-is-my-superhero-shirt-b2e113.jpg", thumb: "/products/gallery/apparel/thumbs/jesus-is-my-superhero-shirt-b2e113.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/kids-t-shirt-mock-up-psd-22-2-rgb-8-2017-1d2c49.jpg", thumb: "/products/gallery/apparel/thumbs/kids-t-shirt-mock-up-psd-22-2-rgb-8-2017-1d2c49.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/kids-t-shirt-mock-up-psd-22-2-rgb-8-2017-c17d65.jpg", thumb: "/products/gallery/apparel/thumbs/kids-t-shirt-mock-up-psd-22-2-rgb-8-2017-c17d65.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/kids-t-shirt-mock-up-psd-28-6-change-col-3d9349.jpg", thumb: "/products/gallery/apparel/thumbs/kids-t-shirt-mock-up-psd-28-6-change-col-3d9349.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/kids-t-shirt-mock-up-psd-28-6-rgb-8-2017-9c248a.jpg", thumb: "/products/gallery/apparel/thumbs/kids-t-shirt-mock-up-psd-28-6-rgb-8-2017-9c248a.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/mockup06-psd-36-7-rgb-8-2017-03-08-09-53-7b6c3f.jpg", thumb: "/products/gallery/apparel/thumbs/mockup06-psd-36-7-rgb-8-2017-03-08-09-53-7b6c3f.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/mockup06-psd-36-7-rgb-8-2017-03-08-10-15-26bc4b.jpg", thumb: "/products/gallery/apparel/thumbs/mockup06-psd-36-7-rgb-8-2017-03-08-10-15-26bc4b.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/resized952018040995183222-f8ad09.jpg", thumb: "/products/gallery/apparel/thumbs/resized952018040995183222-f8ad09.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/screenshot-20171111-1222041-82e7cf.jpg", thumb: "/products/gallery/apparel/thumbs/screenshot-20171111-1222041-82e7cf.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/smokin-lonestar-sample-1-7bae11.jpg", thumb: "/products/gallery/apparel/thumbs/smokin-lonestar-sample-1-7bae11.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/smokin-lonestar-sample-2-b06e12.jpg", thumb: "/products/gallery/apparel/thumbs/smokin-lonestar-sample-2-b06e12.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/smokin-lonestar-sample-3-aeb38e.jpg", thumb: "/products/gallery/apparel/thumbs/smokin-lonestar-sample-3-aeb38e.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/smokin-lonestar-white-677b91.jpg", thumb: "/products/gallery/apparel/thumbs/smokin-lonestar-white-677b91.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/smokin-lonestar-36251f.jpg", thumb: "/products/gallery/apparel/thumbs/smokin-lonestar-36251f.jpg", alt: "Custom apparel by Print & Craft Co." },
        { type: "image", src: "/products/gallery/apparel/static-shirt-sample-21738c.jpg", thumb: "/products/gallery/apparel/thumbs/static-shirt-sample-21738c.jpg", alt: "Custom apparel by Print & Craft Co." },
    ],
    drinkware: [
        { type: "image", src: "/products/gallery/drinkware/4949999998-808c41.jpg", thumb: "/products/gallery/drinkware/thumbs/4949999998-808c41.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/america-blank-b6f002.jpg", thumb: "/products/gallery/drinkware/thumbs/america-blank-b6f002.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/annetestarbucks33-093684.jpg", thumb: "/products/gallery/drinkware/thumbs/annetestarbucks33-093684.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/army-veteran-moreno-30-oz-airbonre2-2ab432.jpg", thumb: "/products/gallery/drinkware/thumbs/army-veteran-moreno-30-oz-airbonre2-2ab432.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/beauty-and-the-beast-m-mendoza-30-oz-0c713c.jpg", thumb: "/products/gallery/drinkware/thumbs/beauty-and-the-beast-m-mendoza-30-oz-0c713c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/blackangel-fe41fe.jpg", thumb: "/products/gallery/drinkware/thumbs/blackangel-fe41fe.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/brunomars-57b22e.jpg", thumb: "/products/gallery/drinkware/thumbs/brunomars-57b22e.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/capture16431-db47be.jpg", thumb: "/products/gallery/drinkware/thumbs/capture16431-db47be.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/capture2-db513e.jpg", thumb: "/products/gallery/drinkware/thumbs/capture2-db513e.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/capture79879411111-bf5676.jpg", thumb: "/products/gallery/drinkware/thumbs/capture79879411111-bf5676.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/capture988888-7b758f.jpg", thumb: "/products/gallery/drinkware/thumbs/capture988888-7b758f.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-07-24-15-40-48-c7be9f.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-07-24-15-40-48-c7be9f.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-08-03-15-10-55-copy-2-5f31a0.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-08-03-15-10-55-copy-2-5f31a0.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-08-03-16-07-38-00e393.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-08-03-16-07-38-00e393.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-08-03-16-12-28-9eae9a.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-08-03-16-12-28-9eae9a.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-08-03-16-58-24-a14929.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-08-03-16-58-24-a14929.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-08-03-19-17-42-ba7fb1.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-08-03-19-17-42-ba7fb1.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-08-03-19-18-18-335d29.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-08-03-19-18-18-335d29.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-08-07-16-00-10-7d542c.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-08-07-16-00-10-7d542c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-12-27-14-48-01-9256f6.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-12-27-14-48-01-9256f6.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/desktop-2017-12-27-20-50-52-f8dea1.jpg", thumb: "/products/gallery/drinkware/thumbs/desktop-2017-12-27-20-50-52-f8dea1.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-0997a-b8c5de.jpg", thumb: "/products/gallery/drinkware/thumbs/img-0997a-b8c5de.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-0998-7da762.jpg", thumb: "/products/gallery/drinkware/thumbs/img-0998-7da762.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-2193-8e83a0.jpg", thumb: "/products/gallery/drinkware/thumbs/img-2193-8e83a0.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-2560-838a56.jpg", thumb: "/products/gallery/drinkware/thumbs/img-2560-838a56.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3403-8f3771.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3403-8f3771.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3714-cfd4ca.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3714-cfd4ca.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3715-543e71.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3715-543e71.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3767-acbf7f.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3767-acbf7f.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3768-1598c5.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3768-1598c5.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3769-939791.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3769-939791.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3857-dee312.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3857-dee312.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3947-0f22ed.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3947-0f22ed.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-3967-8cd541.jpg", thumb: "/products/gallery/drinkware/thumbs/img-3967-8cd541.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-7605-c406e4.jpg", thumb: "/products/gallery/drinkware/thumbs/img-7605-c406e4.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-7606-cc68a2.jpg", thumb: "/products/gallery/drinkware/thumbs/img-7606-cc68a2.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/img-8868-bddd21.jpg", thumb: "/products/gallery/drinkware/thumbs/img-8868-bddd21.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-06-9-56-03-am-3fc690.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-06-9-56-03-am-3fc690.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-07-10-17-18-am-306285.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-07-10-17-18-am-306285.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-12-5-04-05-pm-a48d46.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-12-5-04-05-pm-a48d46.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-12-5-08-51-pm-1324c8.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-12-5-08-51-pm-1324c8.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-12-6-54-40-pm-9e1c87.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-12-6-54-40-pm-9e1c87.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-12-7-43-32-pm-160305.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-12-7-43-32-pm-160305.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-12-8-19-51-pm-6529ee.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-12-8-19-51-pm-6529ee.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-16-5-25-26-pm-1058da.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-16-5-25-26-pm-1058da.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-16-5-25-53-pm-2a6724.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-16-5-25-53-pm-2a6724.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-4-29-15-pm-0b2a15.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-4-29-15-pm-0b2a15.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-4-29-32-pm-ed6622.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-4-29-32-pm-ed6622.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-04-41-pm-b484ca.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-04-41-pm-b484ca.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-04-57-pm-077471.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-04-57-pm-077471.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-06-29-pm-f93513.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-06-29-pm-f93513.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-06-42-pm-071b12.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-06-42-pm-071b12.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-07-54-pm-a8d90b.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-07-54-pm-a8d90b.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-10-16-pm-4caa91.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-10-16-pm-4caa91.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-11-50-pm-fa684e.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-11-50-pm-fa684e.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-13-11-pm-e3e8f7.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-13-11-pm-e3e8f7.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-18-56-pm-f3bea5.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-18-56-pm-f3bea5.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-17-6-20-35-pm-a09956.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-17-6-20-35-pm-a09956.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-19-7-18-58-pm-6bfe30.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-19-7-18-58-pm-6bfe30.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-21-5-23-12-pm-1-dc02cd.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-21-5-23-12-pm-1-dc02cd.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-21-5-23-12-pm-dc02cd.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-21-5-23-12-pm-dc02cd.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-22-10-50-39-am-9bbd6e.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-22-10-50-39-am-9bbd6e.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-22-5-26-52-pm-07a30c.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-22-5-26-52-pm-07a30c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-10-18-11-am-39839b.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-10-18-11-am-39839b.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-10-25-00-am-1-67d769.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-10-25-00-am-1-67d769.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-10-25-00-am-2-67d769.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-10-25-00-am-2-67d769.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-10-25-00-am-67d769.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-10-25-00-am-67d769.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-10-31-39-am-1-7bb04c.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-10-31-39-am-1-7bb04c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-10-31-39-am-2-7bb04c.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-10-31-39-am-2-7bb04c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-10-31-39-am-7bb04c.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-10-31-39-am-7bb04c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-6-04-31-pm-11be9e.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-6-04-31-pm-11be9e.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-7-07-37-pm-404790.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-7-07-37-pm-404790.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-9-14-21-pm-c7aded.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-9-14-21-pm-c7aded.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-23-9-59-38-am-f65608.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-23-9-59-38-am-f65608.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-31-12-13-00-pm-31bf27.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-31-12-13-00-pm-31bf27.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-dec-31-12-18-24-pm-3d87dc.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-dec-31-12-18-24-pm-3d87dc.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-11-7-17-08-pm-21c48c.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-11-7-17-08-pm-21c48c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-12-10-03-23-am-a1b80d.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-12-10-03-23-am-a1b80d.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-12-4-07-29-pm-27bcc1.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-12-4-07-29-pm-27bcc1.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-12-4-08-46-pm-859090.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-12-4-08-46-pm-859090.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-14-11-39-32-am-6eb90a.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-14-11-39-32-am-6eb90a.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-14-11-40-23-am-a418e2.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-14-11-40-23-am-a418e2.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-14-11-41-38-am-bfa6f3.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-14-11-41-38-am-bfa6f3.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-20-6-11-16-pm-1faa95.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-20-6-11-16-pm-1faa95.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-43-28-pm-75c005.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-43-28-pm-75c005.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-45-43-pm-8f21e4.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-45-43-pm-8f21e4.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-46-26-pm-1dc4f2.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-46-26-pm-1dc4f2.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-50-25-pm-1de06d.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-50-25-pm-1de06d.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-50-57-pm-8ea3e4.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-50-57-pm-8ea3e4.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-52-28-pm-fc78be.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-52-28-pm-fc78be.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-53-53-pm-0abd5c.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-53-53-pm-0abd5c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-23-3-55-23-pm-1b44c8.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-23-3-55-23-pm-1b44c8.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-24-2-08-19-pm-8e87ed.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-24-2-08-19-pm-8e87ed.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-24-2-08-48-pm-22743c.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-24-2-08-48-pm-22743c.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-24-2-09-45-pm-1d7fb8.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-24-2-09-45-pm-1d7fb8.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-25-12-06-40-pm-379081.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-25-12-06-40-pm-379081.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jan-25-12-39-48-pm-fabe1f.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jan-25-12-39-48-pm-fabe1f.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jun-10-1-50-10-pm-070068.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jun-10-1-50-10-pm-070068.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jun-10-1-53-51-pm-a09981.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jun-10-1-53-51-pm-a09981.jpg", alt: "Custom drinkware by Print & Craft Co." },
        { type: "image", src: "/products/gallery/drinkware/photo-jun-10-11-11-26-am-ceced2.jpg", thumb: "/products/gallery/drinkware/thumbs/photo-jun-10-11-11-26-am-ceced2.jpg", alt: "Custom drinkware by Print & Craft Co." },
    ],
    accessories: [
        { type: "image", src: "/products/gallery/accessories/13682608-1159967644061607-1341502206-o-8d3371.jpg", thumb: "/products/gallery/accessories/thumbs/13682608-1159967644061607-1341502206-o-8d3371.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-0335-aa652d.jpg", thumb: "/products/gallery/accessories/thumbs/img-0335-aa652d.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-1204-662661.jpg", thumb: "/products/gallery/accessories/thumbs/img-1204-662661.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-1217-78a63a.jpg", thumb: "/products/gallery/accessories/thumbs/img-1217-78a63a.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-1300-afe342.jpg", thumb: "/products/gallery/accessories/thumbs/img-1300-afe342.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-1301-7279eb.jpg", thumb: "/products/gallery/accessories/thumbs/img-1301-7279eb.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-2666-95ff13.jpg", thumb: "/products/gallery/accessories/thumbs/img-2666-95ff13.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-2670-2-cc181a.jpg", thumb: "/products/gallery/accessories/thumbs/img-2670-2-cc181a.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-2670-c60927.jpg", thumb: "/products/gallery/accessories/thumbs/img-2670-c60927.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-2746-896761.jpg", thumb: "/products/gallery/accessories/thumbs/img-2746-896761.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-2781-87a451.jpg", thumb: "/products/gallery/accessories/thumbs/img-2781-87a451.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-2790-68f201.jpg", thumb: "/products/gallery/accessories/thumbs/img-2790-68f201.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-3395a-de0da7.jpg", thumb: "/products/gallery/accessories/thumbs/img-3395a-de0da7.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-3430-95cdea.jpg", thumb: "/products/gallery/accessories/thumbs/img-3430-95cdea.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-3905-759145.jpg", thumb: "/products/gallery/accessories/thumbs/img-3905-759145.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-3910-6462c1.jpg", thumb: "/products/gallery/accessories/thumbs/img-3910-6462c1.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-3911-3416c0.jpg", thumb: "/products/gallery/accessories/thumbs/img-3911-3416c0.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-4537-808dee.jpg", thumb: "/products/gallery/accessories/thumbs/img-4537-808dee.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/img-4537-862ff5.mp4", thumb: "/products/gallery/accessories/thumbs/img-4537-862ff5.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-4538-72d511.jpg", thumb: "/products/gallery/accessories/thumbs/img-4538-72d511.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/img-4538-d21197.mp4", thumb: "/products/gallery/accessories/thumbs/img-4538-d21197.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-4563-022cbb.jpg", thumb: "/products/gallery/accessories/thumbs/img-4563-022cbb.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-4564-e96978.jpg", thumb: "/products/gallery/accessories/thumbs/img-4564-e96978.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-4565-197db7.jpg", thumb: "/products/gallery/accessories/thumbs/img-4565-197db7.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-4566-c37e7f.jpg", thumb: "/products/gallery/accessories/thumbs/img-4566-c37e7f.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/img-4566-b1a6e4.mp4", thumb: "/products/gallery/accessories/thumbs/img-4566-b1a6e4.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-4821-770ec0.jpg", thumb: "/products/gallery/accessories/thumbs/img-4821-770ec0.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-5173-637250.jpg", thumb: "/products/gallery/accessories/thumbs/img-5173-637250.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-5613-dfa36b.jpg", thumb: "/products/gallery/accessories/thumbs/img-5613-dfa36b.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-5616-a1689b.jpg", thumb: "/products/gallery/accessories/thumbs/img-5616-a1689b.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/img-5961-bff51c.mp4", thumb: "/products/gallery/accessories/thumbs/img-5961-bff51c.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-7683-ffe391.jpg", thumb: "/products/gallery/accessories/thumbs/img-7683-ffe391.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "video", src: "/products/gallery/accessories/img-7684-a85e52.mp4", thumb: "/products/gallery/accessories/thumbs/img-7684-a85e52.jpg", alt: "Custom accessories by Print & Craft Co." },
        { type: "image", src: "/products/gallery/accessories/img-8052-d29731.jpg", thumb: "/products/gallery/accessories/thumbs/img-8052-d29731.jpg", alt: "Custom accessories by Print & Craft Co." },
    ],
    signs: [
        { type: "image", src: "/products/gallery/signs/20131018-182507-3b2c2b.jpg", thumb: "/products/gallery/signs/thumbs/20131018-182507-3b2c2b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/20131019-121957-569106.jpg", thumb: "/products/gallery/signs/thumbs/20131019-121957-569106.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/20131108-102928-8e9b0c.jpg", thumb: "/products/gallery/signs/thumbs/20131108-102928-8e9b0c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/20131108-102940-fc173c.jpg", thumb: "/products/gallery/signs/thumbs/20131108-102940-fc173c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/20131108-103005-1a097d.jpg", thumb: "/products/gallery/signs/thumbs/20131108-103005-1a097d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0001-2ad6de.jpg", thumb: "/products/gallery/signs/thumbs/img-0001-2ad6de.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0002-2e2241.jpg", thumb: "/products/gallery/signs/thumbs/img-0002-2e2241.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0024-602467.jpg", thumb: "/products/gallery/signs/thumbs/img-0024-602467.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0054-91b1bb.jpg", thumb: "/products/gallery/signs/thumbs/img-0054-91b1bb.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0055-a0b07c.jpg", thumb: "/products/gallery/signs/thumbs/img-0055-a0b07c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0079-849599.jpg", thumb: "/products/gallery/signs/thumbs/img-0079-849599.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0080-1e303a.jpg", thumb: "/products/gallery/signs/thumbs/img-0080-1e303a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0081-89e76e.jpg", thumb: "/products/gallery/signs/thumbs/img-0081-89e76e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0082-a06406.jpg", thumb: "/products/gallery/signs/thumbs/img-0082-a06406.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0083-2dcdb1.jpg", thumb: "/products/gallery/signs/thumbs/img-0083-2dcdb1.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0123-36d443.jpg", thumb: "/products/gallery/signs/thumbs/img-0123-36d443.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0124-cdedf4.jpg", thumb: "/products/gallery/signs/thumbs/img-0124-cdedf4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0155-d80863.jpg", thumb: "/products/gallery/signs/thumbs/img-0155-d80863.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0156-e6b361.jpg", thumb: "/products/gallery/signs/thumbs/img-0156-e6b361.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0157-a21a19.jpg", thumb: "/products/gallery/signs/thumbs/img-0157-a21a19.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0158-ea95b5.jpg", thumb: "/products/gallery/signs/thumbs/img-0158-ea95b5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0236-81ab9d.jpg", thumb: "/products/gallery/signs/thumbs/img-0236-81ab9d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0305-1fe275.jpg", thumb: "/products/gallery/signs/thumbs/img-0305-1fe275.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0306-6e9ce3.jpg", thumb: "/products/gallery/signs/thumbs/img-0306-6e9ce3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0307-e94266.jpg", thumb: "/products/gallery/signs/thumbs/img-0307-e94266.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0308-c41447.jpg", thumb: "/products/gallery/signs/thumbs/img-0308-c41447.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0309-9ff443.jpg", thumb: "/products/gallery/signs/thumbs/img-0309-9ff443.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0317-3a0df1.jpg", thumb: "/products/gallery/signs/thumbs/img-0317-3a0df1.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0325-8da453.jpg", thumb: "/products/gallery/signs/thumbs/img-0325-8da453.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0354-4d5888.jpg", thumb: "/products/gallery/signs/thumbs/img-0354-4d5888.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0355-964f98.jpg", thumb: "/products/gallery/signs/thumbs/img-0355-964f98.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0357-da4bd7.jpg", thumb: "/products/gallery/signs/thumbs/img-0357-da4bd7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0358-695fb9.jpg", thumb: "/products/gallery/signs/thumbs/img-0358-695fb9.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0359-a48d20.jpg", thumb: "/products/gallery/signs/thumbs/img-0359-a48d20.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0360-a6ef16.jpg", thumb: "/products/gallery/signs/thumbs/img-0360-a6ef16.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0361-de95eb.jpg", thumb: "/products/gallery/signs/thumbs/img-0361-de95eb.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0362-4871d7.jpg", thumb: "/products/gallery/signs/thumbs/img-0362-4871d7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0368-76e102.jpg", thumb: "/products/gallery/signs/thumbs/img-0368-76e102.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0372-65eb8c.jpg", thumb: "/products/gallery/signs/thumbs/img-0372-65eb8c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0376-910920.jpg", thumb: "/products/gallery/signs/thumbs/img-0376-910920.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0377-fbb49e.jpg", thumb: "/products/gallery/signs/thumbs/img-0377-fbb49e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0378-6dc9f0.jpg", thumb: "/products/gallery/signs/thumbs/img-0378-6dc9f0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0379-c60143.jpg", thumb: "/products/gallery/signs/thumbs/img-0379-c60143.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0380-fcb17d.jpg", thumb: "/products/gallery/signs/thumbs/img-0380-fcb17d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0381-7d83e4.jpg", thumb: "/products/gallery/signs/thumbs/img-0381-7d83e4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-0382-070efe.mp4", thumb: "/products/gallery/signs/thumbs/img-0382-070efe.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0395-b1cd25.jpg", thumb: "/products/gallery/signs/thumbs/img-0395-b1cd25.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0396-840246.jpg", thumb: "/products/gallery/signs/thumbs/img-0396-840246.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0397-889162.jpg", thumb: "/products/gallery/signs/thumbs/img-0397-889162.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0398-c84862.jpg", thumb: "/products/gallery/signs/thumbs/img-0398-c84862.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0407-ad4e18.jpg", thumb: "/products/gallery/signs/thumbs/img-0407-ad4e18.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0408-c94b08.jpg", thumb: "/products/gallery/signs/thumbs/img-0408-c94b08.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0409-888a55.jpg", thumb: "/products/gallery/signs/thumbs/img-0409-888a55.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0410-604702.jpg", thumb: "/products/gallery/signs/thumbs/img-0410-604702.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0411-df7208.jpg", thumb: "/products/gallery/signs/thumbs/img-0411-df7208.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0412-copy-f81e09.jpg", thumb: "/products/gallery/signs/thumbs/img-0412-copy-f81e09.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0412-633eda.jpg", thumb: "/products/gallery/signs/thumbs/img-0412-633eda.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0413-copy-912315.jpg", thumb: "/products/gallery/signs/thumbs/img-0413-copy-912315.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0413-a8b64b.jpg", thumb: "/products/gallery/signs/thumbs/img-0413-a8b64b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0417-f968fb.jpg", thumb: "/products/gallery/signs/thumbs/img-0417-f968fb.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0418-1db4e2.jpg", thumb: "/products/gallery/signs/thumbs/img-0418-1db4e2.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0418a-cb7e23.jpg", thumb: "/products/gallery/signs/thumbs/img-0418a-cb7e23.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0419-6ade02.jpg", thumb: "/products/gallery/signs/thumbs/img-0419-6ade02.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0420-c9ce47.jpg", thumb: "/products/gallery/signs/thumbs/img-0420-c9ce47.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0424-ad996c.jpg", thumb: "/products/gallery/signs/thumbs/img-0424-ad996c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0459-3881c4.jpg", thumb: "/products/gallery/signs/thumbs/img-0459-3881c4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0463-f27957.jpg", thumb: "/products/gallery/signs/thumbs/img-0463-f27957.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0464-98a163.jpg", thumb: "/products/gallery/signs/thumbs/img-0464-98a163.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0481-9fb101.jpg", thumb: "/products/gallery/signs/thumbs/img-0481-9fb101.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0499a-3a24b4.jpg", thumb: "/products/gallery/signs/thumbs/img-0499a-3a24b4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0516-78b709.jpg", thumb: "/products/gallery/signs/thumbs/img-0516-78b709.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0526-190a8a.jpg", thumb: "/products/gallery/signs/thumbs/img-0526-190a8a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0534-74db24.jpg", thumb: "/products/gallery/signs/thumbs/img-0534-74db24.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0547-375bb6.jpg", thumb: "/products/gallery/signs/thumbs/img-0547-375bb6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0553-bbd129.jpg", thumb: "/products/gallery/signs/thumbs/img-0553-bbd129.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0554-7d825b.jpg", thumb: "/products/gallery/signs/thumbs/img-0554-7d825b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0559-1b26d0.jpg", thumb: "/products/gallery/signs/thumbs/img-0559-1b26d0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0560-810fd8.jpg", thumb: "/products/gallery/signs/thumbs/img-0560-810fd8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0561-389529.jpg", thumb: "/products/gallery/signs/thumbs/img-0561-389529.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0562-2272f9.jpg", thumb: "/products/gallery/signs/thumbs/img-0562-2272f9.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0563-0dc056.jpg", thumb: "/products/gallery/signs/thumbs/img-0563-0dc056.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0564-38fe30.jpg", thumb: "/products/gallery/signs/thumbs/img-0564-38fe30.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0565-6bb2f4.jpg", thumb: "/products/gallery/signs/thumbs/img-0565-6bb2f4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0625-94efe7.jpg", thumb: "/products/gallery/signs/thumbs/img-0625-94efe7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0626-1c6398.jpg", thumb: "/products/gallery/signs/thumbs/img-0626-1c6398.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0631-7be574.jpg", thumb: "/products/gallery/signs/thumbs/img-0631-7be574.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0637-f9ccaa.jpg", thumb: "/products/gallery/signs/thumbs/img-0637-f9ccaa.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0640-b3e0d2.jpg", thumb: "/products/gallery/signs/thumbs/img-0640-b3e0d2.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0645-e43914.jpg", thumb: "/products/gallery/signs/thumbs/img-0645-e43914.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0657-33480c.jpg", thumb: "/products/gallery/signs/thumbs/img-0657-33480c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0658-33480c.jpg", thumb: "/products/gallery/signs/thumbs/img-0658-33480c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0672-1b297b.jpg", thumb: "/products/gallery/signs/thumbs/img-0672-1b297b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0693-6bede3.jpg", thumb: "/products/gallery/signs/thumbs/img-0693-6bede3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0697-d52aa2.jpg", thumb: "/products/gallery/signs/thumbs/img-0697-d52aa2.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0701-2-c737a5.jpg", thumb: "/products/gallery/signs/thumbs/img-0701-2-c737a5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0701-350601.jpg", thumb: "/products/gallery/signs/thumbs/img-0701-350601.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0702-79c9f1.jpg", thumb: "/products/gallery/signs/thumbs/img-0702-79c9f1.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0704-0e2328.jpg", thumb: "/products/gallery/signs/thumbs/img-0704-0e2328.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0706-adbf07.jpg", thumb: "/products/gallery/signs/thumbs/img-0706-adbf07.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0707-2-c3c6ad.jpg", thumb: "/products/gallery/signs/thumbs/img-0707-2-c3c6ad.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0707-faadae.jpg", thumb: "/products/gallery/signs/thumbs/img-0707-faadae.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0712-215c5e.jpg", thumb: "/products/gallery/signs/thumbs/img-0712-215c5e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0713-5b4f46.jpg", thumb: "/products/gallery/signs/thumbs/img-0713-5b4f46.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0714-6dacb8.jpg", thumb: "/products/gallery/signs/thumbs/img-0714-6dacb8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0715-f360b5.jpg", thumb: "/products/gallery/signs/thumbs/img-0715-f360b5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0716-5ac8b3.jpg", thumb: "/products/gallery/signs/thumbs/img-0716-5ac8b3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0717-2c360d.jpg", thumb: "/products/gallery/signs/thumbs/img-0717-2c360d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0750-d637a0.jpg", thumb: "/products/gallery/signs/thumbs/img-0750-d637a0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0764-d516b5.jpg", thumb: "/products/gallery/signs/thumbs/img-0764-d516b5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0770-7472a8.jpg", thumb: "/products/gallery/signs/thumbs/img-0770-7472a8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0794-2a655a.jpg", thumb: "/products/gallery/signs/thumbs/img-0794-2a655a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0795-276ca9.jpg", thumb: "/products/gallery/signs/thumbs/img-0795-276ca9.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0801-bf57e0.jpg", thumb: "/products/gallery/signs/thumbs/img-0801-bf57e0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0806-8f0c3a.jpg", thumb: "/products/gallery/signs/thumbs/img-0806-8f0c3a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0810-30e238.jpg", thumb: "/products/gallery/signs/thumbs/img-0810-30e238.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0826-0fff70.jpg", thumb: "/products/gallery/signs/thumbs/img-0826-0fff70.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0843-02b702.jpg", thumb: "/products/gallery/signs/thumbs/img-0843-02b702.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0844-ef68ef.jpg", thumb: "/products/gallery/signs/thumbs/img-0844-ef68ef.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0909-cd5a67.jpg", thumb: "/products/gallery/signs/thumbs/img-0909-cd5a67.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0916-41d2af.jpg", thumb: "/products/gallery/signs/thumbs/img-0916-41d2af.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0917-d27243.jpg", thumb: "/products/gallery/signs/thumbs/img-0917-d27243.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0918-21d323.jpg", thumb: "/products/gallery/signs/thumbs/img-0918-21d323.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0919-a91242.jpg", thumb: "/products/gallery/signs/thumbs/img-0919-a91242.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0976-8a0960.jpg", thumb: "/products/gallery/signs/thumbs/img-0976-8a0960.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0977-a9ff0e.jpg", thumb: "/products/gallery/signs/thumbs/img-0977-a9ff0e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0978-09f2f9.jpg", thumb: "/products/gallery/signs/thumbs/img-0978-09f2f9.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0979-d1469d.jpg", thumb: "/products/gallery/signs/thumbs/img-0979-d1469d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0980-24d5d7.jpg", thumb: "/products/gallery/signs/thumbs/img-0980-24d5d7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0980-6e24c4.jpg", thumb: "/products/gallery/signs/thumbs/img-0980-6e24c4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0983-copy-2197f4.jpg", thumb: "/products/gallery/signs/thumbs/img-0983-copy-2197f4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0983-b6ef09.jpg", thumb: "/products/gallery/signs/thumbs/img-0983-b6ef09.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0984-a68c1f.jpg", thumb: "/products/gallery/signs/thumbs/img-0984-a68c1f.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0985-1de8b5.jpg", thumb: "/products/gallery/signs/thumbs/img-0985-1de8b5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0992-39e208.jpg", thumb: "/products/gallery/signs/thumbs/img-0992-39e208.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-0993-b9008a.jpg", thumb: "/products/gallery/signs/thumbs/img-0993-b9008a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1006-ba0d7a.jpg", thumb: "/products/gallery/signs/thumbs/img-1006-ba0d7a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1007-84d4f5.jpg", thumb: "/products/gallery/signs/thumbs/img-1007-84d4f5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1008-8830df.jpg", thumb: "/products/gallery/signs/thumbs/img-1008-8830df.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1009-91d00c.jpg", thumb: "/products/gallery/signs/thumbs/img-1009-91d00c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1010-bc064d.jpg", thumb: "/products/gallery/signs/thumbs/img-1010-bc064d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1011-fbe02c.jpg", thumb: "/products/gallery/signs/thumbs/img-1011-fbe02c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1015-2-9d1030.jpg", thumb: "/products/gallery/signs/thumbs/img-1015-2-9d1030.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1016-2-d0412e.jpg", thumb: "/products/gallery/signs/thumbs/img-1016-2-d0412e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1017-2-070df0.jpg", thumb: "/products/gallery/signs/thumbs/img-1017-2-070df0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1019-2-c5e590.jpg", thumb: "/products/gallery/signs/thumbs/img-1019-2-c5e590.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1019-238e89.jpg", thumb: "/products/gallery/signs/thumbs/img-1019-238e89.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1020-2-8f114e.jpg", thumb: "/products/gallery/signs/thumbs/img-1020-2-8f114e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1020-9ec9f0.jpg", thumb: "/products/gallery/signs/thumbs/img-1020-9ec9f0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1021-2-619731.jpg", thumb: "/products/gallery/signs/thumbs/img-1021-2-619731.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1021-edb37b.jpg", thumb: "/products/gallery/signs/thumbs/img-1021-edb37b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1022-2-99cb3d.jpg", thumb: "/products/gallery/signs/thumbs/img-1022-2-99cb3d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1022-8b4439.jpg", thumb: "/products/gallery/signs/thumbs/img-1022-8b4439.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1023-2-d3d455.jpg", thumb: "/products/gallery/signs/thumbs/img-1023-2-d3d455.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1024-e85aed.jpg", thumb: "/products/gallery/signs/thumbs/img-1024-e85aed.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1025-2-638dfb.jpg", thumb: "/products/gallery/signs/thumbs/img-1025-2-638dfb.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1026-copy-5ba6e6.jpg", thumb: "/products/gallery/signs/thumbs/img-1026-copy-5ba6e6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1026-de2bac.jpg", thumb: "/products/gallery/signs/thumbs/img-1026-de2bac.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1027-2-f5fd22.jpg", thumb: "/products/gallery/signs/thumbs/img-1027-2-f5fd22.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1030-6d5fb3.jpg", thumb: "/products/gallery/signs/thumbs/img-1030-6d5fb3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1031-2-7e8e63.jpg", thumb: "/products/gallery/signs/thumbs/img-1031-2-7e8e63.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1031-039d19.jpg", thumb: "/products/gallery/signs/thumbs/img-1031-039d19.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1032-b69de1.jpg", thumb: "/products/gallery/signs/thumbs/img-1032-b69de1.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1033-855fae.jpg", thumb: "/products/gallery/signs/thumbs/img-1033-855fae.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1034-2-eb5d70.jpg", thumb: "/products/gallery/signs/thumbs/img-1034-2-eb5d70.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1034-eb5d70.jpg", thumb: "/products/gallery/signs/thumbs/img-1034-eb5d70.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1047-aedd6a.jpg", thumb: "/products/gallery/signs/thumbs/img-1047-aedd6a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1048-66ba8a.jpg", thumb: "/products/gallery/signs/thumbs/img-1048-66ba8a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1049-0671b5.jpg", thumb: "/products/gallery/signs/thumbs/img-1049-0671b5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1050-3ff35f.jpg", thumb: "/products/gallery/signs/thumbs/img-1050-3ff35f.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1055-2-52abf7.jpg", thumb: "/products/gallery/signs/thumbs/img-1055-2-52abf7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1055-52abf7.jpg", thumb: "/products/gallery/signs/thumbs/img-1055-52abf7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1067-9d8fdc.jpg", thumb: "/products/gallery/signs/thumbs/img-1067-9d8fdc.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1073-2-323d29.jpg", thumb: "/products/gallery/signs/thumbs/img-1073-2-323d29.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1074-2-1d2424.jpg", thumb: "/products/gallery/signs/thumbs/img-1074-2-1d2424.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1075-2-efcec3.jpg", thumb: "/products/gallery/signs/thumbs/img-1075-2-efcec3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1076-2-f1e363.jpg", thumb: "/products/gallery/signs/thumbs/img-1076-2-f1e363.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1077-2-69ec0a.jpg", thumb: "/products/gallery/signs/thumbs/img-1077-2-69ec0a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1077-119488.jpg", thumb: "/products/gallery/signs/thumbs/img-1077-119488.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1078-2-0f77bb.jpg", thumb: "/products/gallery/signs/thumbs/img-1078-2-0f77bb.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1081-1d6491.jpg", thumb: "/products/gallery/signs/thumbs/img-1081-1d6491.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1083-2-d376d8.jpg", thumb: "/products/gallery/signs/thumbs/img-1083-2-d376d8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1083-d376d8.jpg", thumb: "/products/gallery/signs/thumbs/img-1083-d376d8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1084-a818d3.jpg", thumb: "/products/gallery/signs/thumbs/img-1084-a818d3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1093-2-385d46.jpg", thumb: "/products/gallery/signs/thumbs/img-1093-2-385d46.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1094-2-2c544b.jpg", thumb: "/products/gallery/signs/thumbs/img-1094-2-2c544b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1095-2-1ece3b.jpg", thumb: "/products/gallery/signs/thumbs/img-1095-2-1ece3b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1097-8ed1a4.jpg", thumb: "/products/gallery/signs/thumbs/img-1097-8ed1a4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1098-2-fefa20.jpg", thumb: "/products/gallery/signs/thumbs/img-1098-2-fefa20.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1098-a66d29.jpg", thumb: "/products/gallery/signs/thumbs/img-1098-a66d29.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1099-2-4de996.jpg", thumb: "/products/gallery/signs/thumbs/img-1099-2-4de996.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1099-7558c6.jpg", thumb: "/products/gallery/signs/thumbs/img-1099-7558c6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1100-2-e703ae.jpg", thumb: "/products/gallery/signs/thumbs/img-1100-2-e703ae.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1103-2-69c9a6.jpg", thumb: "/products/gallery/signs/thumbs/img-1103-2-69c9a6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1103-69c9a6.jpg", thumb: "/products/gallery/signs/thumbs/img-1103-69c9a6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1104-2-5131cf.jpg", thumb: "/products/gallery/signs/thumbs/img-1104-2-5131cf.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1104-5131cf.jpg", thumb: "/products/gallery/signs/thumbs/img-1104-5131cf.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1110-9cd5d9.jpg", thumb: "/products/gallery/signs/thumbs/img-1110-9cd5d9.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1111-986b4e.jpg", thumb: "/products/gallery/signs/thumbs/img-1111-986b4e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1112-2-cc3c37.jpg", thumb: "/products/gallery/signs/thumbs/img-1112-2-cc3c37.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1112-58598d.jpg", thumb: "/products/gallery/signs/thumbs/img-1112-58598d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1113-213c68.jpg", thumb: "/products/gallery/signs/thumbs/img-1113-213c68.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1125-2-bbf79c.jpg", thumb: "/products/gallery/signs/thumbs/img-1125-2-bbf79c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1125-664d3a.jpg", thumb: "/products/gallery/signs/thumbs/img-1125-664d3a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1149-fff574.jpg", thumb: "/products/gallery/signs/thumbs/img-1149-fff574.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1154-2-7da4a2.jpg", thumb: "/products/gallery/signs/thumbs/img-1154-2-7da4a2.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1155-7a8efb.jpg", thumb: "/products/gallery/signs/thumbs/img-1155-7a8efb.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1156-f2d728.jpg", thumb: "/products/gallery/signs/thumbs/img-1156-f2d728.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1158-0b0544.jpg", thumb: "/products/gallery/signs/thumbs/img-1158-0b0544.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1159-670058.jpg", thumb: "/products/gallery/signs/thumbs/img-1159-670058.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1189-2-10ae82.jpg", thumb: "/products/gallery/signs/thumbs/img-1189-2-10ae82.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1189-10ae82.jpg", thumb: "/products/gallery/signs/thumbs/img-1189-10ae82.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1191-2-710661.jpg", thumb: "/products/gallery/signs/thumbs/img-1191-2-710661.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1191-710661.jpg", thumb: "/products/gallery/signs/thumbs/img-1191-710661.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1221-f204af.jpg", thumb: "/products/gallery/signs/thumbs/img-1221-f204af.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1230-df1dbc.jpg", thumb: "/products/gallery/signs/thumbs/img-1230-df1dbc.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1231-a43209.jpg", thumb: "/products/gallery/signs/thumbs/img-1231-a43209.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1232-7d1591.jpg", thumb: "/products/gallery/signs/thumbs/img-1232-7d1591.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1233-8cae26.jpg", thumb: "/products/gallery/signs/thumbs/img-1233-8cae26.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1291-008b82.jpg", thumb: "/products/gallery/signs/thumbs/img-1291-008b82.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1366-1febf8.jpg", thumb: "/products/gallery/signs/thumbs/img-1366-1febf8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1428-993a6f.jpg", thumb: "/products/gallery/signs/thumbs/img-1428-993a6f.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1429-3182f6.jpg", thumb: "/products/gallery/signs/thumbs/img-1429-3182f6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1430-2ef290.jpg", thumb: "/products/gallery/signs/thumbs/img-1430-2ef290.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1431-cd51fd.jpg", thumb: "/products/gallery/signs/thumbs/img-1431-cd51fd.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1432-c9d8e1.jpg", thumb: "/products/gallery/signs/thumbs/img-1432-c9d8e1.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1435-865016.jpg", thumb: "/products/gallery/signs/thumbs/img-1435-865016.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1443-55cb68.jpg", thumb: "/products/gallery/signs/thumbs/img-1443-55cb68.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1444-162ca9.jpg", thumb: "/products/gallery/signs/thumbs/img-1444-162ca9.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1445-071652.jpg", thumb: "/products/gallery/signs/thumbs/img-1445-071652.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1448-aabda5.jpg", thumb: "/products/gallery/signs/thumbs/img-1448-aabda5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1449-b115be.jpg", thumb: "/products/gallery/signs/thumbs/img-1449-b115be.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1452-b6a203.jpg", thumb: "/products/gallery/signs/thumbs/img-1452-b6a203.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1453-a8f0a0.jpg", thumb: "/products/gallery/signs/thumbs/img-1453-a8f0a0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1475-2-d6d87b.jpg", thumb: "/products/gallery/signs/thumbs/img-1475-2-d6d87b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1481-2-134bb7.jpg", thumb: "/products/gallery/signs/thumbs/img-1481-2-134bb7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1481-12af14.jpg", thumb: "/products/gallery/signs/thumbs/img-1481-12af14.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1482-2-029ff0.jpg", thumb: "/products/gallery/signs/thumbs/img-1482-2-029ff0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1482-2a1f3a.jpg", thumb: "/products/gallery/signs/thumbs/img-1482-2a1f3a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1483-2bf3be.jpg", thumb: "/products/gallery/signs/thumbs/img-1483-2bf3be.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1484-20746d.jpg", thumb: "/products/gallery/signs/thumbs/img-1484-20746d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1489-8755e5.jpg", thumb: "/products/gallery/signs/thumbs/img-1489-8755e5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1524-59ab19.jpg", thumb: "/products/gallery/signs/thumbs/img-1524-59ab19.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1560-e62d0f.jpg", thumb: "/products/gallery/signs/thumbs/img-1560-e62d0f.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1561-cc7375.jpg", thumb: "/products/gallery/signs/thumbs/img-1561-cc7375.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1586-655cc6.jpg", thumb: "/products/gallery/signs/thumbs/img-1586-655cc6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1587-344cb5.jpg", thumb: "/products/gallery/signs/thumbs/img-1587-344cb5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1590-03053a.jpg", thumb: "/products/gallery/signs/thumbs/img-1590-03053a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1594-a6f486.jpg", thumb: "/products/gallery/signs/thumbs/img-1594-a6f486.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1724-a3dd69.jpg", thumb: "/products/gallery/signs/thumbs/img-1724-a3dd69.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1725-2-bed6e0.jpg", thumb: "/products/gallery/signs/thumbs/img-1725-2-bed6e0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1725-3-bed6e0.jpg", thumb: "/products/gallery/signs/thumbs/img-1725-3-bed6e0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1725-0ec7c6.jpg", thumb: "/products/gallery/signs/thumbs/img-1725-0ec7c6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1726-b2f6c7.jpg", thumb: "/products/gallery/signs/thumbs/img-1726-b2f6c7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1727-2-08ab1e.jpg", thumb: "/products/gallery/signs/thumbs/img-1727-2-08ab1e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1727-bacee8.jpg", thumb: "/products/gallery/signs/thumbs/img-1727-bacee8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1728-780d83.jpg", thumb: "/products/gallery/signs/thumbs/img-1728-780d83.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1729-094641.jpg", thumb: "/products/gallery/signs/thumbs/img-1729-094641.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1731-dc53ea.jpg", thumb: "/products/gallery/signs/thumbs/img-1731-dc53ea.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1745-03c79c.jpg", thumb: "/products/gallery/signs/thumbs/img-1745-03c79c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1747-eab3e0.jpg", thumb: "/products/gallery/signs/thumbs/img-1747-eab3e0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1748-3a4120.jpg", thumb: "/products/gallery/signs/thumbs/img-1748-3a4120.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1749-6f8720.jpg", thumb: "/products/gallery/signs/thumbs/img-1749-6f8720.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1763-2-6c25f6.jpg", thumb: "/products/gallery/signs/thumbs/img-1763-2-6c25f6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1763-6c25f6.jpg", thumb: "/products/gallery/signs/thumbs/img-1763-6c25f6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1770-3aab79.jpg", thumb: "/products/gallery/signs/thumbs/img-1770-3aab79.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1771-7f70a4.jpg", thumb: "/products/gallery/signs/thumbs/img-1771-7f70a4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1773-2-e9b88e.jpg", thumb: "/products/gallery/signs/thumbs/img-1773-2-e9b88e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1773-e9b88e.jpg", thumb: "/products/gallery/signs/thumbs/img-1773-e9b88e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1779-ef8876.jpg", thumb: "/products/gallery/signs/thumbs/img-1779-ef8876.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1782-52c6d6.jpg", thumb: "/products/gallery/signs/thumbs/img-1782-52c6d6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1792-d678a8.jpg", thumb: "/products/gallery/signs/thumbs/img-1792-d678a8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1793-18bb68.jpg", thumb: "/products/gallery/signs/thumbs/img-1793-18bb68.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1795-1484fa.jpg", thumb: "/products/gallery/signs/thumbs/img-1795-1484fa.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1797-2-d83e2a.jpg", thumb: "/products/gallery/signs/thumbs/img-1797-2-d83e2a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1797-334a64.jpg", thumb: "/products/gallery/signs/thumbs/img-1797-334a64.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1798-382b25.jpg", thumb: "/products/gallery/signs/thumbs/img-1798-382b25.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1820-2-307330.jpg", thumb: "/products/gallery/signs/thumbs/img-1820-2-307330.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1820-307330.jpg", thumb: "/products/gallery/signs/thumbs/img-1820-307330.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1821-51a35b.jpg", thumb: "/products/gallery/signs/thumbs/img-1821-51a35b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1822-739d8b.jpg", thumb: "/products/gallery/signs/thumbs/img-1822-739d8b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1825-584353.jpg", thumb: "/products/gallery/signs/thumbs/img-1825-584353.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1826-71649e.jpg", thumb: "/products/gallery/signs/thumbs/img-1826-71649e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1831-dee203.jpg", thumb: "/products/gallery/signs/thumbs/img-1831-dee203.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1832-f78be3.jpg", thumb: "/products/gallery/signs/thumbs/img-1832-f78be3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1880-e31ae7.jpg", thumb: "/products/gallery/signs/thumbs/img-1880-e31ae7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1893-4728b0.jpg", thumb: "/products/gallery/signs/thumbs/img-1893-4728b0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1894-73cd3d.jpg", thumb: "/products/gallery/signs/thumbs/img-1894-73cd3d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1916-416161.jpg", thumb: "/products/gallery/signs/thumbs/img-1916-416161.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1921-90e331.jpg", thumb: "/products/gallery/signs/thumbs/img-1921-90e331.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1922-328964.jpg", thumb: "/products/gallery/signs/thumbs/img-1922-328964.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1923-2-156778.jpg", thumb: "/products/gallery/signs/thumbs/img-1923-2-156778.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1923-d0a47d.jpg", thumb: "/products/gallery/signs/thumbs/img-1923-d0a47d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1924-6f688a.jpg", thumb: "/products/gallery/signs/thumbs/img-1924-6f688a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1925-3e01df.jpg", thumb: "/products/gallery/signs/thumbs/img-1925-3e01df.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1927-182c37.jpg", thumb: "/products/gallery/signs/thumbs/img-1927-182c37.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1928-c1b6e8.jpg", thumb: "/products/gallery/signs/thumbs/img-1928-c1b6e8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1929-1399ad.jpg", thumb: "/products/gallery/signs/thumbs/img-1929-1399ad.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1930-2-36207b.jpg", thumb: "/products/gallery/signs/thumbs/img-1930-2-36207b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1930-36207b.jpg", thumb: "/products/gallery/signs/thumbs/img-1930-36207b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1945-616670.jpg", thumb: "/products/gallery/signs/thumbs/img-1945-616670.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1963-2ee38d.jpg", thumb: "/products/gallery/signs/thumbs/img-1963-2ee38d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1964-278468.jpg", thumb: "/products/gallery/signs/thumbs/img-1964-278468.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1968-93d667.jpg", thumb: "/products/gallery/signs/thumbs/img-1968-93d667.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1970-6979f5.jpg", thumb: "/products/gallery/signs/thumbs/img-1970-6979f5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-1981-a52d2b.jpg", thumb: "/products/gallery/signs/thumbs/img-1981-a52d2b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2005-d36de5.jpg", thumb: "/products/gallery/signs/thumbs/img-2005-d36de5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2014-fae438.jpg", thumb: "/products/gallery/signs/thumbs/img-2014-fae438.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2015-2e9078.jpg", thumb: "/products/gallery/signs/thumbs/img-2015-2e9078.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2027-a74524.jpg", thumb: "/products/gallery/signs/thumbs/img-2027-a74524.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2028-662a23.jpg", thumb: "/products/gallery/signs/thumbs/img-2028-662a23.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2036-492552.jpg", thumb: "/products/gallery/signs/thumbs/img-2036-492552.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2060-2-1dc577.jpg", thumb: "/products/gallery/signs/thumbs/img-2060-2-1dc577.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2060-1dc577.jpg", thumb: "/products/gallery/signs/thumbs/img-2060-1dc577.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2061-ae6756.jpg", thumb: "/products/gallery/signs/thumbs/img-2061-ae6756.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-2138-dbeb2d.mp4", thumb: "/products/gallery/signs/thumbs/img-2138-dbeb2d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-2139-9ec8b7.mp4", thumb: "/products/gallery/signs/thumbs/img-2139-9ec8b7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2151-82b39b.jpg", thumb: "/products/gallery/signs/thumbs/img-2151-82b39b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2152-81d599.jpg", thumb: "/products/gallery/signs/thumbs/img-2152-81d599.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2153-715f95.jpg", thumb: "/products/gallery/signs/thumbs/img-2153-715f95.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2196a-a84be3.jpg", thumb: "/products/gallery/signs/thumbs/img-2196a-a84be3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2390-98a517.jpg", thumb: "/products/gallery/signs/thumbs/img-2390-98a517.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2409-5babf6.jpg", thumb: "/products/gallery/signs/thumbs/img-2409-5babf6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2413a-031c3c.jpg", thumb: "/products/gallery/signs/thumbs/img-2413a-031c3c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2507-d903b0.jpg", thumb: "/products/gallery/signs/thumbs/img-2507-d903b0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-2507-966612.mp4", thumb: "/products/gallery/signs/thumbs/img-2507-966612.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-2552-3e9c0b.mp4", thumb: "/products/gallery/signs/thumbs/img-2552-3e9c0b.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2622-0fd7a7.jpg", thumb: "/products/gallery/signs/thumbs/img-2622-0fd7a7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2654a-58e27d.jpg", thumb: "/products/gallery/signs/thumbs/img-2654a-58e27d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2684a-d18b9c.jpg", thumb: "/products/gallery/signs/thumbs/img-2684a-d18b9c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2713a-2e266f.jpg", thumb: "/products/gallery/signs/thumbs/img-2713a-2e266f.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2751-5a5586.jpg", thumb: "/products/gallery/signs/thumbs/img-2751-5a5586.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-2772-7a2b97.mp4", thumb: "/products/gallery/signs/thumbs/img-2772-7a2b97.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2822-1077d2.jpg", thumb: "/products/gallery/signs/thumbs/img-2822-1077d2.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2928-2e7506.jpg", thumb: "/products/gallery/signs/thumbs/img-2928-2e7506.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2930-3146b2.jpg", thumb: "/products/gallery/signs/thumbs/img-2930-3146b2.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2933-8bdb5d.jpg", thumb: "/products/gallery/signs/thumbs/img-2933-8bdb5d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2956a-a54354.jpg", thumb: "/products/gallery/signs/thumbs/img-2956a-a54354.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-2957-71e863.jpg", thumb: "/products/gallery/signs/thumbs/img-2957-71e863.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3003-a61d4d.jpg", thumb: "/products/gallery/signs/thumbs/img-3003-a61d4d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3124-3b9754.jpg", thumb: "/products/gallery/signs/thumbs/img-3124-3b9754.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3125-fcc324.jpg", thumb: "/products/gallery/signs/thumbs/img-3125-fcc324.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-3131-ad8355.mp4", thumb: "/products/gallery/signs/thumbs/img-3131-ad8355.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3256-3ddfd3.jpg", thumb: "/products/gallery/signs/thumbs/img-3256-3ddfd3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3268-00568a.jpg", thumb: "/products/gallery/signs/thumbs/img-3268-00568a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3269-51f877.jpg", thumb: "/products/gallery/signs/thumbs/img-3269-51f877.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3272-915bb3.jpg", thumb: "/products/gallery/signs/thumbs/img-3272-915bb3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3294a-dab125.jpg", thumb: "/products/gallery/signs/thumbs/img-3294a-dab125.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-3295-bb326a.mp4", thumb: "/products/gallery/signs/thumbs/img-3295-bb326a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3296a-a61613.jpg", thumb: "/products/gallery/signs/thumbs/img-3296a-a61613.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3308-6200b9.jpg", thumb: "/products/gallery/signs/thumbs/img-3308-6200b9.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3399a-2fc6d1.jpg", thumb: "/products/gallery/signs/thumbs/img-3399a-2fc6d1.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "video", src: "/products/gallery/signs/img-3445-733ac4.mp4", thumb: "/products/gallery/signs/thumbs/img-3445-733ac4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3446-381223.jpg", thumb: "/products/gallery/signs/thumbs/img-3446-381223.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3447a-9b453e.jpg", thumb: "/products/gallery/signs/thumbs/img-3447a-9b453e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3449a-ed8733.jpg", thumb: "/products/gallery/signs/thumbs/img-3449a-ed8733.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3460-1-b1fe4a.jpg", thumb: "/products/gallery/signs/thumbs/img-3460-1-b1fe4a.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3476-2-50ffe5.jpg", thumb: "/products/gallery/signs/thumbs/img-3476-2-50ffe5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3476-50ffe5.jpg", thumb: "/products/gallery/signs/thumbs/img-3476-50ffe5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3478-8b23e5.jpg", thumb: "/products/gallery/signs/thumbs/img-3478-8b23e5.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3479-f0a919.jpg", thumb: "/products/gallery/signs/thumbs/img-3479-f0a919.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3498-2-9205a6.jpg", thumb: "/products/gallery/signs/thumbs/img-3498-2-9205a6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3498-9205a6.jpg", thumb: "/products/gallery/signs/thumbs/img-3498-9205a6.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3499-b5f8fe.jpg", thumb: "/products/gallery/signs/thumbs/img-3499-b5f8fe.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3500-aa863e.jpg", thumb: "/products/gallery/signs/thumbs/img-3500-aa863e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3509-4c0fe4.jpg", thumb: "/products/gallery/signs/thumbs/img-3509-4c0fe4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3660-a191cc.jpg", thumb: "/products/gallery/signs/thumbs/img-3660-a191cc.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-3700-be6aab.jpg", thumb: "/products/gallery/signs/thumbs/img-3700-be6aab.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4026-7e60e8.jpg", thumb: "/products/gallery/signs/thumbs/img-4026-7e60e8.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4037-596dd3.jpg", thumb: "/products/gallery/signs/thumbs/img-4037-596dd3.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4371-2e86aa.jpg", thumb: "/products/gallery/signs/thumbs/img-4371-2e86aa.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4372-bbd08d.jpg", thumb: "/products/gallery/signs/thumbs/img-4372-bbd08d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4373-7bfd54.jpg", thumb: "/products/gallery/signs/thumbs/img-4373-7bfd54.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4455-bc6e36.jpg", thumb: "/products/gallery/signs/thumbs/img-4455-bc6e36.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4458-059789.jpg", thumb: "/products/gallery/signs/thumbs/img-4458-059789.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4749-ac7d0e.jpg", thumb: "/products/gallery/signs/thumbs/img-4749-ac7d0e.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4750-b6418d.jpg", thumb: "/products/gallery/signs/thumbs/img-4750-b6418d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4751-f3084c.jpg", thumb: "/products/gallery/signs/thumbs/img-4751-f3084c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4757-bc8cf0.jpg", thumb: "/products/gallery/signs/thumbs/img-4757-bc8cf0.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4832-c42373.jpg", thumb: "/products/gallery/signs/thumbs/img-4832-c42373.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4833-2631d4.jpg", thumb: "/products/gallery/signs/thumbs/img-4833-2631d4.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4834-d9740d.jpg", thumb: "/products/gallery/signs/thumbs/img-4834-d9740d.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4913-0e6f39.jpg", thumb: "/products/gallery/signs/thumbs/img-4913-0e6f39.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4914-9c5e7c.jpg", thumb: "/products/gallery/signs/thumbs/img-4914-9c5e7c.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4915-35ec75.jpg", thumb: "/products/gallery/signs/thumbs/img-4915-35ec75.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4941-657a52.jpg", thumb: "/products/gallery/signs/thumbs/img-4941-657a52.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-4947-845545.jpg", thumb: "/products/gallery/signs/thumbs/img-4947-845545.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-5185-65ceb7.jpg", thumb: "/products/gallery/signs/thumbs/img-5185-65ceb7.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-5365-770887.jpg", thumb: "/products/gallery/signs/thumbs/img-5365-770887.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-6932-70e017.jpg", thumb: "/products/gallery/signs/thumbs/img-6932-70e017.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-6933-71d680.jpg", thumb: "/products/gallery/signs/thumbs/img-6933-71d680.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-7080-edbfb1.jpg", thumb: "/products/gallery/signs/thumbs/img-7080-edbfb1.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-7081-ede388.jpg", thumb: "/products/gallery/signs/thumbs/img-7081-ede388.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/img-8331-c41184.jpg", thumb: "/products/gallery/signs/thumbs/img-8331-c41184.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/photo-13-de3092.jpg", thumb: "/products/gallery/signs/thumbs/photo-13-de3092.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/photo-15-40eb98.jpg", thumb: "/products/gallery/signs/thumbs/photo-15-40eb98.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/photo-aug-24-6-20-11-pm-20e382.jpg", thumb: "/products/gallery/signs/thumbs/photo-aug-24-6-20-11-pm-20e382.jpg", alt: "Custom signs by Print & Craft Co." },
        { type: "image", src: "/products/gallery/signs/untitled-1-6-25-cmyk-gpu-preview-2017-04-63cf8f.jpg", thumb: "/products/gallery/signs/thumbs/untitled-1-6-25-cmyk-gpu-preview-2017-04-63cf8f.jpg", alt: "Custom signs by Print & Craft Co." },
    ],
    prints: [
        { type: "image", src: "/products/gallery/prints/03-psd-88-7-back-rgb-8-2017-02-18-00-50--5267c8.jpg", thumb: "/products/gallery/prints/thumbs/03-psd-88-7-back-rgb-8-2017-02-18-00-50--5267c8.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/04-psd-40-3-rgb-8-2017-05-06-16-01-00-6eb83a.jpg", thumb: "/products/gallery/prints/thumbs/04-psd-40-3-rgb-8-2017-05-06-16-01-00-6eb83a.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/07-psd-107-rgb-8-2017-02-17-23-37-36-50599d.jpg", thumb: "/products/gallery/prints/thumbs/07-psd-107-rgb-8-2017-02-17-23-37-36-50599d.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/artisan-club-truck-sample33333-0827a7.jpg", thumb: "/products/gallery/prints/thumbs/artisan-club-truck-sample33333-0827a7.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/bdyy5588-a87c6c.jpg", thumb: "/products/gallery/prints/thumbs/bdyy5588-a87c6c.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/borrachos-yeti-cooler-ai-33-33-cmyk-prev-6a8c81.jpg", thumb: "/products/gallery/prints/thumbs/borrachos-yeti-cooler-ai-33-33-cmyk-prev-6a8c81.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/bvqd9220-d2ac66.jpg", thumb: "/products/gallery/prints/thumbs/bvqd9220-d2ac66.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/bwyd2642-f2538b.jpg", thumb: "/products/gallery/prints/thumbs/bwyd2642-f2538b.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/dmut7920-8fda12.jpg", thumb: "/products/gallery/prints/thumbs/dmut7920-8fda12.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/file-sep-12-1-27-45-pm-96db8a.jpg", thumb: "/products/gallery/prints/thumbs/file-sep-12-1-27-45-pm-96db8a.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/govn3749-bc0300.jpg", thumb: "/products/gallery/prints/thumbs/govn3749-bc0300.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/hefw9929-387228.jpg", thumb: "/products/gallery/prints/thumbs/hefw9929-387228.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-0097-86b1a7.jpg", thumb: "/products/gallery/prints/thumbs/img-0097-86b1a7.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-0296-40ddab.jpg", thumb: "/products/gallery/prints/thumbs/img-0296-40ddab.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-0666-31ac0b.jpg", thumb: "/products/gallery/prints/thumbs/img-0666-31ac0b.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-0738-31dfa4.jpg", thumb: "/products/gallery/prints/thumbs/img-0738-31dfa4.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-1008-f8ba2b.jpg", thumb: "/products/gallery/prints/thumbs/img-1008-f8ba2b.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-1018-ca868d.jpg", thumb: "/products/gallery/prints/thumbs/img-1018-ca868d.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-1036-a4db05.jpg", thumb: "/products/gallery/prints/thumbs/img-1036-a4db05.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-1157-8b44ed.jpg", thumb: "/products/gallery/prints/thumbs/img-1157-8b44ed.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-1754-f0f467.jpg", thumb: "/products/gallery/prints/thumbs/img-1754-f0f467.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-1770-3aab79.jpg", thumb: "/products/gallery/prints/thumbs/img-1770-3aab79.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-2403-613737.jpg", thumb: "/products/gallery/prints/thumbs/img-2403-613737.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-2544-452e72.jpg", thumb: "/products/gallery/prints/thumbs/img-2544-452e72.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-4435-714925.jpg", thumb: "/products/gallery/prints/thumbs/img-4435-714925.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/img-6755-01271b.jpg", thumb: "/products/gallery/prints/thumbs/img-6755-01271b.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-1-side-p-7037f8.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-1-side-p-7037f8.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-1-side-p-99162b.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-1-side-p-99162b.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-1-side-p-820160.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-1-side-p-820160.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-1-side-p-276cf8.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-1-side-p-276cf8.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-1-side-p-8fda12.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-1-side-p-8fda12.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-1-side-p-1d4290.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-1-side-p-1d4290.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-recovere-5ab5d2.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-recovere-5ab5d2.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-121--775017.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-121--775017.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-121--0c64dc.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-121--0c64dc.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-121--8f7fd5.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-121--8f7fd5.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-66-6-a87c6c.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-66-6-a87c6c.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-66-6-c9db9f.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-66-6-c9db9f.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-67-r-8a9f23.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-67-r-8a9f23.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-67-7-dfa693.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-67-7-dfa693.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-72-y-545e4a.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-72-y-545e4a.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-73-2-3939d7.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-73-2-3939d7.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-73-2-d2ac66.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-73-2-d2ac66.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-73-2-9b91dd.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-73-2-9b91dd.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-73-2-bc0300.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-73-2-bc0300.jpg", alt: "Custom prints by Print & Craft Co." },
        { type: "image", src: "/products/gallery/prints/realistic-business-card-mock-up-psd-73-2-b1ee59.jpg", thumb: "/products/gallery/prints/thumbs/realistic-business-card-mock-up-psd-73-2-b1ee59.jpg", alt: "Custom prints by Print & Craft Co." },
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
        const img = document.createElement("img");
        img.src = item.thumb || item.src;   // small thumb in the grid; full size lives in the lightbox
        img.alt = item.alt || "";
        img.loading = "lazy";
        img.decoding = "async";
        t.appendChild(img);
        if (item.type === "video") {
            t.insertAdjacentHTML("beforeend", '<span class="play-badge">&#9654;</span>');
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
        '<div class="lightbox-count"></div>' +
        '<div class="lightbox-thumbs"></div>';
    document.body.appendChild(lb);

    const lbCats = lb.querySelector(".lightbox-cats");
    const stage = lb.querySelector(".lightbox-stage");
    const counter = lb.querySelector(".lightbox-count");
    const strip = lb.querySelector(".lightbox-thumbs");
    let stripCat = null; // category the strip is currently built for

    cats.forEach(c => {
        const b = document.createElement("button");
        b.className = "gallery-tab";
        b.textContent = GALLERY_LABELS[c];
        b.dataset.cat = c;
        b.addEventListener("click", () => { lbCat = c; lbIndex = 0; renderStage(); });
        lbCats.appendChild(b);
    });

    function buildStrip() {
        strip.innerHTML = "";
        GALLERY_MANIFEST[lbCat].forEach((item, i) => {
            const b = document.createElement("button");
            b.className = "strip-thumb";
            b.setAttribute("aria-label", "Item " + (i + 1));
            const img = document.createElement("img");
            img.src = item.thumb || item.src;
            img.alt = "";
            img.loading = "lazy";
            img.decoding = "async";
            b.appendChild(img);
            if (item.type === "video") {
                b.insertAdjacentHTML("beforeend", '<span class="strip-play">&#9654;</span>');
            }
            b.addEventListener("click", () => { lbIndex = i; renderStage(); });
            strip.appendChild(b);
        });
        stripCat = lbCat;
    }

    function renderStage() {
        lbCats.querySelectorAll(".gallery-tab").forEach(b =>
            b.classList.toggle("active", b.dataset.cat === lbCat));
        if (stripCat !== lbCat) buildStrip();
        const items = GALLERY_MANIFEST[lbCat];
        const item = items[lbIndex];
        stage.innerHTML = "";
        if (item.type === "video") {
            const v = document.createElement("video");
            v.src = item.src;
            v.controls = true; v.autoplay = true; v.playsInline = true;
            if (item.thumb) v.poster = item.thumb;
            stage.appendChild(v);
        } else {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt || "";
            img.decoding = "async";
            stage.appendChild(img);
        }
        counter.textContent = GALLERY_LABELS[lbCat] + " — " + (lbIndex + 1) + " / " + items.length;
        strip.querySelectorAll(".strip-thumb").forEach((b, i) => {
            b.classList.toggle("active", i === lbIndex);
            if (i === lbIndex) b.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
        });
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
