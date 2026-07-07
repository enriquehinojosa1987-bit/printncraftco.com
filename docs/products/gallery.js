/* Print & Craft Co. — products gallery.
   HOW TO ADD MEDIA: drop files into /docs/products/gallery/<category>/ and
   list them in the MANIFEST below (type: "image" or "video"). Order here is
   display order. For videos, an optional "poster" image shows before play. */

const GALLERY_MANIFEST = {
    apparel: [
        { type: "image", src: "https://assets.cdn.filesafe.space/Gom39K4Ph1omNjbKNE3e/media/66da506e766f9827382fcd02.png", alt: "Custom printed t-shirt" },
        { type: "image", src: "https://assets.cdn.filesafe.space/Gom39K4Ph1omNjbKNE3e/media/69cd0482ddfdcb8a577520af.png", alt: "Custom shirts" },
    ],
    drinkware: [
        { type: "image", src: "https://assets.cdn.filesafe.space/Gom39K4Ph1omNjbKNE3e/media/66c38ad756cb0a6623c3eedf.jpeg", alt: "Custom 3M wrapped tumbler" },
        { type: "image", src: "https://assets.cdn.filesafe.space/Gom39K4Ph1omNjbKNE3e/media/66e0f4a6085c2a7bd93f3253.png", alt: "Sublimated skinny tumbler" },
    ],
    accessories: [
        { type: "image", src: "https://assets.cdn.filesafe.space/Gom39K4Ph1omNjbKNE3e/media/69cbbfb5f6b7af64f5d813bf.png", alt: "Custom canvas" },
        { type: "video", src: "/media/hero.mp4", alt: "Print & Craft Co. showcase" },
    ],
    signs: [
        { type: "image", src: "https://assets.cdn.filesafe.space/MVgEiWH9Alr45LoREemP/media/66e1c47591ef8c1563c4e236.jpeg", alt: "Custom vinyl banners" },
        { type: "image", src: "https://assets.cdn.filesafe.space/MVgEiWH9Alr45LoREemP/media/66e1c224bb4482a61bdd6f22.webp", alt: "Coroplast yard signs" },
    ],
    prints: [
        { type: "image", src: "https://assets.cdn.filesafe.space/Gom39K4Ph1omNjbKNE3e/media/66c37448c77c0b173b4c7dfe.png", alt: "Custom HTV prints" },
        { type: "image", src: "https://assets.cdn.filesafe.space/Gom39K4Ph1omNjbKNE3e/media/66e0f976163e2604e3d2da1f.jpeg", alt: "Sublimation print patterns" },
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

    function renderGrid() {
        tabs.querySelectorAll(".gallery-tab").forEach(b =>
            b.classList.toggle("active", b.dataset.cat === activeCat));
        grid.innerHTML = "";
        const show = activeCat === "all" ? cats : [activeCat];
        show.forEach(cat => GALLERY_MANIFEST[cat].forEach((item, i) =>
            grid.appendChild(tile(cat, item, i))));
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
