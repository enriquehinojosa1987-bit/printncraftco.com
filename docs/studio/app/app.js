// ==========================================
// PRINT & CRAFT CO. - STUDIO ENGINE V31
// ==========================================

const PIXABAY_API_KEY = '1548283-288b0725d1864b9f04157c043';

const canvas = new fabric.Canvas('studioCanvas', { backgroundColor: '#ffffff', preserveObjectStacking: true });

// UI Elements
const modeDesignBtn = document.getElementById('modeDesign');
const modePreviewBtn = document.getElementById('modePreview');
const blueprintOverlay = document.getElementById('blueprintOverlay');
const mockupShading = document.getElementById('mockupShading');
const previewWatermark = document.getElementById('previewWatermark');
const introEmail = document.getElementById('introEmail');
const saveEmailInput = document.getElementById('saveEmailInput');
const canvasWrapper = document.getElementById('canvasWrapper');

// Natural (unscaled) canvas size for the current product
let baseCanvasW = 0;
let baseCanvasH = 0;

// ==========================================
// 0. TOASTS
// ==========================================
function toast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.textContent = message;
    container.appendChild(el);
    requestAnimationFrame(() => el.classList.add('visible'));
    setTimeout(() => {
        el.classList.remove('visible');
        setTimeout(() => el.remove(), 300);
    }, 3200);
}

// ==========================================
// 1. DYNAMIC PRODUCT LOADER + FIT-TO-SCREEN
// ==========================================
function loadProductAssets(productName) {
    if (productName.startsWith('tpl:')) {
        const name = productName.slice(4);
        const tpl = (libraryManifest.templates || {})[name];
        if (!tpl) { toast('Template not found.', 'error'); return; }
        const base = `../library/templates/${encodeURIComponent(name)}/`;
        loadProduct(base + tpl.blueprint, base + tpl.shading);
    } else {
        loadProduct(`assets/${productName}-blueprint.png`, `assets/${productName}-shading.png`);
    }
}

function loadProduct(blueprintUrl, shadingUrl) {
    const img = new Image();
    img.src = blueprintUrl;

    img.onload = function() {
        const ratio = this.width / this.height;
        baseCanvasH = 600;
        baseCanvasW = baseCanvasH * ratio;

        canvas.setWidth(baseCanvasW);
        canvas.setHeight(baseCanvasH);

        blueprintOverlay.src = blueprintUrl;
        mockupShading.src = shadingUrl;

        fitCanvas();
        modePreviewBtn.click();
    }
    img.onerror = function() { toast('Template files are missing.', 'error'); }
}

// Scale the canvas display (CSS only) so it always fits the workspace.
// Fabric maps pointer coordinates through the element's bounding rect,
// so internal design coordinates stay at full resolution.
function fitCanvas() {
    if (!baseCanvasW) return;
    const ws = document.querySelector('.workspace');
    const availW = ws.clientWidth - 30;
    const availH = ws.clientHeight - 130;
    const scale = Math.min(availW / baseCanvasW, availH / baseCanvasH, 1);
    const dispW = Math.round(baseCanvasW * scale);
    const dispH = Math.round(baseCanvasH * scale);

    canvasWrapper.style.width = dispW + 'px';
    canvasWrapper.style.height = dispH + 'px';
    canvas.setDimensions({ width: dispW + 'px', height: dispH + 'px' }, { cssOnly: true });
    canvas.calcOffset();
}
window.addEventListener('resize', fitCanvas);

loadProductAssets('30oz');
document.getElementById('productSelector').addEventListener('change', (e) => loadProductAssets(e.target.value));

// ==========================================
// 2. WIZARD NAVIGATION (Clickable Stepper)
// ==========================================
function showStep(stepId) {
    ['step1', 'step2', 'step3'].forEach(id => {
        document.getElementById(id).classList.toggle('active', id === stepId);
    });
    document.querySelectorAll('.stepper-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.step === stepId);
    });
    if (stepId !== 'step3') { document.getElementById('editToolbar').style.display = 'none'; }
}

document.getElementById('btnNextStep2').addEventListener('click', () => showStep('step2'));
document.getElementById('btnPrevStep1').addEventListener('click', () => showStep('step1'));
document.getElementById('btnNextStep3').addEventListener('click', () => showStep('step3'));
document.getElementById('btnPrevStep2').addEventListener('click', () => showStep('step2'));
document.querySelectorAll('.stepper-item').forEach(btn => {
    btn.addEventListener('click', () => showStep(btn.dataset.step));
});

// ==========================================
// 3. UNDO / REDO HISTORY
// ==========================================
const HISTORY_LIMIT = 50;
let designDirty = false;
function markDirty() { designDirty = true; }
let undoStack = [];
let redoStack = [];
let isRestoringHistory = false;

const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');

function canvasState() {
    return JSON.stringify(canvas.toDatalessJSON(['archAmount']));
}

function pushHistory() {
    if (isRestoringHistory) return;
    const state = canvasState();
    if (undoStack.length && undoStack[undoStack.length - 1] === state) return;
    undoStack.push(state);
    if (undoStack.length > HISTORY_LIMIT) undoStack.shift();
    redoStack = [];
    updateHistoryButtons();
    markDirty();
}

let historyDebounce = null;
function pushHistoryDebounced() {
    clearTimeout(historyDebounce);
    historyDebounce = setTimeout(pushHistory, 300);
}

function restoreState(state) {
    isRestoringHistory = true;
    // fabric can't revive text.path from JSON; strip it and rebuild from archAmount
    const parsed = JSON.parse(state);
    (parsed.objects || []).forEach(o => { delete o.path; });
    canvas.loadFromJSON(parsed, () => {
        canvas.getObjects().forEach(o => {
            if (o.archAmount) applyArch(o, o.archAmount);
        });
        canvas.renderAll();
        isRestoringHistory = false;
        updateHistoryButtons();
    });
}

function undo() {
    if (undoStack.length <= 1) return;
    redoStack.push(undoStack.pop());
    restoreState(undoStack[undoStack.length - 1]);
}

function redo() {
    if (!redoStack.length) return;
    const state = redoStack.pop();
    undoStack.push(state);
    restoreState(state);
}

function updateHistoryButtons() {
    undoBtn.disabled = undoStack.length <= 1;
    redoBtn.disabled = !redoStack.length;
}

undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

canvas.on('object:added', pushHistory);
canvas.on('object:removed', pushHistory);
canvas.on('object:modified', pushHistory);

// Seed initial empty state
pushHistory();

// ==========================================
// 4. UNSAVED-WORK WARNING
// ==========================================
window.addEventListener('beforeunload', (e) => {
    if (designDirty && canvas.getObjects().length > 0) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// ==========================================
// 5. KEYBOARD SHORTCUTS
// ==========================================
document.addEventListener('keydown', (e) => {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    const obj = canvas.getActiveObject();
    if (obj && obj.isEditing) return;

    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        e.shiftKey ? redo() : undo();
    } else if (mod && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        redo();
    } else if (mod && e.key.toLowerCase() === 'd' && obj) {
        e.preventDefault();
        duplicateSelection();
    } else if ((e.key === 'Delete' || e.key === 'Backspace') && obj) {
        e.preventDefault();
        deleteSelection();
    } else if (e.key.startsWith('Arrow') && obj) {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 2;
        if (e.key === 'ArrowLeft') obj.left -= step;
        if (e.key === 'ArrowRight') obj.left += step;
        if (e.key === 'ArrowUp') obj.top -= step;
        if (e.key === 'ArrowDown') obj.top += step;
        obj.setCoords();
        canvas.requestRenderAll();
        pushHistoryDebounced();
    }
});

// ==========================================
// 6. SNAP-TO-CENTER GUIDES
// ==========================================
const snapGuideV = document.getElementById('snapGuideV');
const snapGuideH = document.getElementById('snapGuideH');
const SNAP_TOLERANCE = 8;

canvas.on('object:moving', (e) => {
    const obj = e.target;
    const center = obj.getCenterPoint();
    let snappedV = false, snappedH = false;

    if (Math.abs(center.x - canvas.width / 2) < SNAP_TOLERANCE) {
        obj.setPositionByOrigin(new fabric.Point(canvas.width / 2, center.y), 'center', 'center');
        snappedV = true;
    }
    const c2 = obj.getCenterPoint();
    if (Math.abs(c2.y - canvas.height / 2) < SNAP_TOLERANCE) {
        obj.setPositionByOrigin(new fabric.Point(c2.x, canvas.height / 2), 'center', 'center');
        snappedH = true;
    }
    snapGuideV.style.display = snappedV ? 'block' : 'none';
    snapGuideH.style.display = snappedH ? 'block' : 'none';
});
canvas.on('mouse:up', () => {
    snapGuideV.style.display = 'none';
    snapGuideH.style.display = 'none';
});

// ==========================================
// 7. PRINTNCRAFT LIBRARY (manifest-driven)
// ==========================================
let libraryManifest = { backgrounds: {}, graphics: {} };

fetch("../library/manifest.json")
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(manifest => {
        libraryManifest = manifest;
        setupLibrary('backgrounds', 'bgLibraryGroup', 'bgCategorySelect', 'bgLibraryGrid', true);
        setupLibrary('graphics', 'elLibraryGroup', 'elCategorySelect', 'elLibraryGrid', false);

        const productSelector = document.getElementById('productSelector');
        Object.keys(manifest.templates || {}).forEach(name => {
            const opt = document.createElement('option');
            opt.value = 'tpl:' + name;
            opt.textContent = name;
            productSelector.appendChild(opt);
        });
    })
    .catch(() => { /* no library yet - sections stay hidden */ });

function setupLibrary(kind, groupId, selectId, gridId, isBackground) {
    const categories = Object.keys(libraryManifest[kind] || {});
    if (!categories.length) return;

    document.getElementById(groupId).style.display = 'block';
    const select = document.getElementById(selectId);
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });

    select.addEventListener('change', () => {
        const grid = document.getElementById(gridId);
        grid.innerHTML = '';
        const files = libraryManifest[kind][select.value] || [];
        files.forEach(file => {
            const img = document.createElement('img');
            img.src = `../library/${kind}/${encodeURIComponent(select.value)}/${encodeURIComponent(file)}`;
            img.loading = 'lazy';
            img.onclick = () => {
                if (isBackground) applyExternalBackground(img.src);
                else applyExternalElement(img.src);
            };
            grid.appendChild(img);
        });
    });
}

// ==========================================
// 8. PIXABAY SEARCH
// ==========================================
let currentBgQuery = ''; let currentBgPage = 1;
let currentElQuery = ''; let currentElPage = 1;

async function searchPixabay(query, type, containerId, paginationId, pageDisplayId, isBackground, page = 1) {
    const container = document.getElementById(containerId);
    const pagination = document.getElementById(paginationId);
    const pageDisplay = document.getElementById(pageDisplayId);
    if (!query) { container.innerHTML = ''; pagination.style.display = 'none'; return; }

    container.innerHTML = '<div class="loading-text">Searching Pixabay...</div>';
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=${type}&per_page=4&page=${page}&orientation=vertical`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        container.innerHTML = '';
        if (data.hits.length === 0) { container.innerHTML = '<div class="loading-text">No results found.</div>'; pagination.style.display = 'none'; return; }
        pagination.style.display = 'flex';
        pageDisplay.innerText = `Page ${page}`;

        data.hits.forEach(hit => {
            const img = document.createElement('img');
            img.src = hit.webformatURL;
            img.onclick = () => { if (isBackground) applyExternalBackground(hit.largeImageURL); else applyExternalElement(hit.largeImageURL); };
            container.appendChild(img);
        });
    } catch (error) { container.innerHTML = '<div class="loading-text loading-error">Error connecting.</div>'; }
}

document.getElementById('bgSearchBtn').addEventListener('click', () => { currentBgQuery = document.getElementById('bgSearchInput').value; currentBgPage = 1; searchPixabay(currentBgQuery, 'photo', 'bgSearchResults', 'bgPagination', 'bgPageDisplay', true, currentBgPage); });
document.getElementById('bgSearchInput').addEventListener('keypress', function (e) { if (e.key === 'Enter') { document.getElementById('bgSearchBtn').click(); }});
document.getElementById('bgPrevBtn').addEventListener('click', () => { if(currentBgPage > 1) { currentBgPage--; searchPixabay(currentBgQuery, 'photo', 'bgSearchResults', 'bgPagination', 'bgPageDisplay', true, currentBgPage); } });
document.getElementById('bgNextBtn').addEventListener('click', () => { currentBgPage++; searchPixabay(currentBgQuery, 'photo', 'bgSearchResults', 'bgPagination', 'bgPageDisplay', true, currentBgPage); });

document.getElementById('elementSearchBtn').addEventListener('click', () => { currentElQuery = document.getElementById('elementSearchInput').value; currentElPage = 1; searchPixabay(currentElQuery, 'illustration', 'elementSearchResults', 'elPagination', 'elPageDisplay', false, currentElPage); });
document.getElementById('elementSearchInput').addEventListener('keypress', function (e) { if (e.key === 'Enter') { document.getElementById('elementSearchBtn').click(); }});
document.getElementById('elPrevBtn').addEventListener('click', () => { if(currentElPage > 1) { currentElPage--; searchPixabay(currentElQuery, 'illustration', 'elementSearchResults', 'elPagination', 'elPageDisplay', false, currentElPage); } });
document.getElementById('elNextBtn').addEventListener('click', () => { currentElPage++; searchPixabay(currentElQuery, 'illustration', 'elementSearchResults', 'elPagination', 'elPageDisplay', false, currentElPage); });

function applyExternalBackground(url) {
    fabric.Image.fromURL(url, function(img) {
        img.set({ originX: 'left', originY: 'top', scaleX: canvas.width / img.width, scaleY: canvas.height / img.height });
        canvas.setBackgroundImage(img, () => { canvas.renderAll(); pushHistory(); });
    }, { crossOrigin: 'anonymous' });
}

function applyExternalElement(url) {
    fabric.Image.fromURL(url, function(img) {
        if (img.width > canvas.width) { img.scaleToWidth((canvas.width - 40) / 2); } else { img.scaleToWidth(img.width / 2); }
        img.set({ left: canvas.width / 2, top: canvas.height / 2, originX: 'center', originY: 'center', transparentCorners: false, cornerColor: '#3b82f6', cornerStyle: 'circle', borderColor: '#3b82f6' });
        canvas.add(img); canvas.setActiveObject(img); canvas.bringToFront(img); canvas.renderAll();
    }, { crossOrigin: 'anonymous' });
}

// ==========================================
// 9. FLOATING TOOLBAR & EFFECTS
// ==========================================
const editToolbar = document.getElementById('editToolbar');
const textControls = document.getElementById('textControls');
const imageControls = document.getElementById('imageControls');
const sharedControls = document.getElementById('sharedControls');
const controlsDivider = document.getElementById('controlsDivider');

const textColorPicker = document.getElementById('textColorPicker');
const fontSizeInput = document.getElementById('fontSizeInput');
const archSlider = document.getElementById('archSlider');
const outlineToggle = document.getElementById('outlineToggle');
const outlineColorPicker = document.getElementById('outlineColorPicker');
const shadowToggle = document.getElementById('shadowToggle');
const opacitySlider = document.getElementById('opacitySlider');
const imageShapeSelector = document.getElementById('imageShapeSelector');

canvas.on('selection:created', showEditTools);
canvas.on('selection:updated', showEditTools);
canvas.on('selection:cleared', () => { editToolbar.style.display = 'none'; closeFlyouts(); });

function isTextObject(obj) {
    return obj && (obj.type === 'textbox' || obj.type === 'text' || obj.type === 'i-text');
}

function showEditTools() {
    const activeObj = canvas.getActiveObject();
    if (!activeObj) return;

    editToolbar.style.display = 'flex';
    sharedControls.style.display = 'flex';
    controlsDivider.style.display = 'block';

    shadowToggle.checked = !!activeObj.shadow;
    opacitySlider.value = Math.round((activeObj.opacity ?? 1) * 100);

    if (isTextObject(activeObj)) {
        textControls.style.display = 'flex';
        imageControls.style.display = 'none';

        textColorPicker.value = activeObj.fill || '#111111';
        fontSizeInput.value = Math.round(activeObj.fontSize * (activeObj.scaleX || 1));
        updateFontPickerButton(activeObj.fontFamily.replace(/['"]/g, ''));
        outlineToggle.checked = !!(activeObj.stroke && activeObj.strokeWidth);
        outlineColorPicker.value = activeObj.stroke || '#000000';
        archSlider.value = activeObj.archAmount || 0;
    } else {
        textControls.style.display = 'none';
        imageControls.style.display = 'flex';

        if(activeObj.clipPath) {
            if(activeObj.clipPath.type === 'ellipse') { imageShapeSelector.value = 'oval'; }
            else if(activeObj.clipPath.type === 'rect') { imageShapeSelector.value = 'rounded'; }
            else if(activeObj.clipPath.type === 'polygon') { imageShapeSelector.value = 'star'; }
        } else {
            imageShapeSelector.value = 'original';
        }
    }
}

textColorPicker.addEventListener('input', (e) => {
    const obj = canvas.getActiveObject();
    if (isTextObject(obj)) { obj.set('fill', e.target.value); canvas.renderAll(); pushHistoryDebounced(); }
});
// --- Font picker (live previews) ---
const FONT_GROUPS = {
    'Modern & Clean': ['Montserrat', 'Poppins', 'Lato', 'Open Sans', 'Roboto'],
    'Elegant & Classic': ['Playfair Display', 'Cinzel', 'Lora', 'Merriweather', 'Cormorant Garamond'],
    'Wedding & Script': ['Great Vibes', 'Pacifico', 'Dancing Script', 'Satisfy', 'Caveat'],
    'Bold & Impact': ['Bebas Neue', 'Oswald', 'Abril Fatface', 'Righteous', 'Amatic SC']
};
const fontPickerBtn = document.getElementById('fontPickerBtn');
const fontPickerList = document.getElementById('fontPickerList');

Object.entries(FONT_GROUPS).forEach(([group, fonts]) => {
    const heading = document.createElement('div');
    heading.className = 'font-group-heading';
    heading.textContent = group;
    fontPickerList.appendChild(heading);
    fonts.forEach(font => {
        const item = document.createElement('button');
        item.className = 'font-item';
        item.textContent = font;
        item.style.fontFamily = `'${font}'`;
        item.dataset.font = font;
        item.addEventListener('click', () => {
            const obj = canvas.getActiveObject();
            if (isTextObject(obj)) {
                obj.set('fontFamily', font);
                refreshArch(obj);
                canvas.renderAll();
                pushHistory();
            }
            updateFontPickerButton(font);
            closeFlyouts();
        });
        fontPickerList.appendChild(item);
    });
});

function updateFontPickerButton(font) {
    fontPickerBtn.childNodes[0].textContent = font + ' ';
    fontPickerBtn.style.fontFamily = `'${font}'`;
    fontPickerList.querySelectorAll('.font-item').forEach(el => el.classList.toggle('selected', el.dataset.font === font));
}

// --- Flyout open/close ---
// The toolbar is CSS-transformed and scrollable, which would both re-anchor
// and clip position:fixed children. So flyouts are moved to <body> and
// opened/closed/positioned entirely from JS (hover on desktop, tap on touch).
function positionFlyout(btn, fly) {
    const r = btn.getBoundingClientRect();
    const fw = fly.offsetWidth;
    const left = Math.max(8, Math.min(r.left + r.width / 2 - fw / 2, window.innerWidth - fw - 8));
    fly.style.left = left + 'px';
    fly.style.bottom = (window.innerHeight - r.top + 10) + 'px';
}
function closeFlyouts(except) {
    document.querySelectorAll('.flyout.show').forEach(f => { if (f !== except) f.classList.remove('show'); });
}
document.querySelectorAll('.flyout-group').forEach(group => {
    const btn = group.querySelector(':scope > button');
    const fly = group.querySelector('.flyout');
    if (!btn || !fly) return;
    document.body.appendChild(fly);

    let closeTimer;
    const open = () => { closeFlyouts(fly); fly.classList.add('show'); positionFlyout(btn, fly); };
    // Don't close while a control inside is focused (e.g. the native color
    // picker dialog keeps focus on its input the whole time it's open)
    const close = () => { if (!fly.contains(document.activeElement)) fly.classList.remove('show'); };
    const scheduleClose = () => { closeTimer = setTimeout(close, 250); };
    const cancelClose = () => clearTimeout(closeTimer);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        fly.classList.contains('show') ? close() : open();
    });
    group.addEventListener('mouseenter', () => { cancelClose(); open(); });
    group.addEventListener('mouseleave', scheduleClose);
    fly.addEventListener('mouseenter', cancelClose);
    fly.addEventListener('mouseleave', scheduleClose);
    fly.addEventListener('click', (e) => e.stopPropagation());
});
document.addEventListener('click', () => closeFlyouts());

// --- Arch text (renders text along a circular path) ---
function applyArch(obj, amount) {
    obj.archAmount = amount;
    if (!amount) {
        obj.set('path', null);
        obj.setCoords();
        canvas.requestRenderAll();
        return;
    }
    // Arched text follows a single line: unwrap the textbox and force a
    // re-layout before measuring, or we get the stale wrapped width
    obj.set({ width: 100000 });
    obj.initDimensions();
    const w = obj.calcTextWidth() + 4;
    obj.set({ width: w });
    obj.initDimensions();
    const theta = Math.abs(amount) * Math.PI / 180;
    const r = w / theta;
    const sx = r * Math.sin(theta / 2);
    const cy = r * Math.cos(theta / 2);
    // amount > 0: arc over the top of the circle; amount < 0: under the bottom
    const d = amount > 0
        ? `M ${-sx} ${-cy} A ${r} ${r} 0 0 1 ${sx} ${-cy}`
        : `M ${-sx} ${cy} A ${r} ${r} 0 0 0 ${sx} ${cy}`;
    const path = new fabric.Path(d, { fill: '', stroke: '' });
    obj.set({ path: path, pathAlign: 'center' });
    obj.setCoords();
    canvas.requestRenderAll();
}

archSlider.addEventListener('input', (e) => {
    const obj = canvas.getActiveObject();
    if (isTextObject(obj)) { applyArch(obj, parseInt(e.target.value, 10)); pushHistoryDebounced(); }
});
document.getElementById('archResetBtn').addEventListener('click', () => {
    const obj = canvas.getActiveObject();
    archSlider.value = 0;
    if (isTextObject(obj)) { applyArch(obj, 0); pushHistory(); }
});
// Re-fit the arch whenever the text's natural width changes
// (typing, font swap, font size change, or resizing via handles)
function refreshArch(obj) {
    if (obj && obj.archAmount) applyArch(obj, obj.archAmount);
}
canvas.on('text:changed', (e) => refreshArch(e.target));
canvas.on('object:modified', (e) => refreshArch(e.target));
fontSizeInput.addEventListener('input', (e) => {
    const obj = canvas.getActiveObject();
    const size = parseInt(e.target.value, 10);
    if (isTextObject(obj) && size >= 8 && size <= 300) {
        // Bake any drag-scaling into the font size so the number shown is the truth
        obj.set({ fontSize: size, scaleX: 1, scaleY: 1 });
        refreshArch(obj);
        obj.setCoords();
        canvas.renderAll();
        pushHistoryDebounced();
    }
});

function updateOutline() {
    const obj = canvas.getActiveObject();
    if (isTextObject(obj)) {
        if(outlineToggle.checked) {
            obj.set({ stroke: outlineColorPicker.value, strokeWidth: 3, paintFirst: 'stroke' });
        } else {
            obj.set({ stroke: null, strokeWidth: 0 });
        }
        canvas.renderAll();
        pushHistoryDebounced();
    }
}
outlineToggle.addEventListener('change', updateOutline);
outlineColorPicker.addEventListener('input', () => { outlineToggle.checked = true; updateOutline(); });

shadowToggle.addEventListener('change', (e) => {
    const obj = canvas.getActiveObject();
    if (obj) {
        if(e.target.checked) {
            obj.set({ shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.5)', blur: 5, offsetX: 3, offsetY: 3 }) });
        } else { obj.set({ shadow: null }); }
        canvas.renderAll();
        pushHistory();
    }
});

opacitySlider.addEventListener('input', (e) => {
    const obj = canvas.getActiveObject();
    if (obj) { obj.set('opacity', parseInt(e.target.value, 10) / 100); canvas.renderAll(); pushHistoryDebounced(); }
});

document.getElementById('flipHBtn').addEventListener('click', () => {
    const obj = canvas.getActiveObject();
    if (obj) { obj.set('flipX', !obj.flipX); canvas.renderAll(); pushHistory(); }
});
document.getElementById('flipVBtn').addEventListener('click', () => {
    const obj = canvas.getActiveObject();
    if (obj) { obj.set('flipY', !obj.flipY); canvas.renderAll(); pushHistory(); }
});
document.getElementById('centerBtn').addEventListener('click', () => {
    const obj = canvas.getActiveObject();
    if (obj) { canvas.centerObject(obj); obj.setCoords(); canvas.renderAll(); pushHistory(); }
});
document.getElementById('duplicateBtn').addEventListener('click', duplicateSelection);

function duplicateSelection() {
    const obj = canvas.getActiveObject();
    if (!obj) return;
    obj.clone((clone) => {
        clone.archAmount = obj.archAmount;
        clone.set({ left: obj.left + 20, top: obj.top + 20, transparentCorners: false, cornerColor: '#3b82f6', cornerStyle: 'circle', borderColor: '#3b82f6' });
        canvas.add(clone);
        canvas.setActiveObject(clone);
        canvas.renderAll();
    });
}

imageShapeSelector.addEventListener('change', (e) => {
    const obj = canvas.getActiveObject();
    if (obj) {
        const val = e.target.value;
        const w = obj.width;
        const h = obj.height;

        if (val === 'oval') {
            obj.set('clipPath', new fabric.Ellipse({ rx: w/2, ry: h/2, originX: 'center', originY: 'center' }));
        }
        else if (val === 'rounded') {
            const radius = Math.min(w, h) * 0.15;
            obj.set('clipPath', new fabric.Rect({ width: w, height: h, rx: radius, ry: radius, originX: 'center', originY: 'center' }));
        }
        else if (val === 'star') {
            const minDim = Math.min(w, h);
            const outer = minDim / 2;
            const inner = minDim / 4;
            const pts = [];
            for (let i = 0; i < 10; i++) {
                let r = i % 2 === 0 ? outer : inner;
                let a = (Math.PI * 2 * i) / 10 - Math.PI / 2;
                pts.push({ x: Math.cos(a) * r, y: Math.sin(a) * r });
            }
            obj.set('clipPath', new fabric.Polygon(pts, { originX: 'center', originY: 'center' }));
        }
        else {
            obj.set('clipPath', null);
        }
        canvas.renderAll();
        pushHistory();
    }
});

// ==========================================
// 10. LAYER MANAGEMENT & DELETE
// ==========================================
document.getElementById('layerUpBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.bringForward(obj); canvas.renderAll(); pushHistory(); } });
document.getElementById('layerDownBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.sendBackwards(obj); canvas.renderAll(); pushHistory(); } });
document.getElementById('layerFrontBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.bringToFront(obj); canvas.renderAll(); pushHistory(); } });
document.getElementById('layerBackBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.sendToBack(obj); canvas.renderAll(); pushHistory(); } });

function deleteSelection() {
    const objects = canvas.getActiveObjects();
    if (objects.length) { canvas.discardActiveObject(); objects.forEach(obj => canvas.remove(obj)); editToolbar.style.display = 'none'; }
}
document.getElementById('deleteBtn').addEventListener('click', deleteSelection);

// ==========================================
// 11. UPLOAD LOCAL CUSTOM BACKGROUND
// ==========================================
document.getElementById('bgUploader').addEventListener('change', function(e) {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(f) {
        const imgObj = new Image(); imgObj.src = f.target.result;
        imgObj.onload = function() {
            const fabricImg = new fabric.Image(imgObj);
            fabricImg.set({ originX: 'left', originY: 'top', scaleX: canvas.width / fabricImg.width, scaleY: canvas.height / fabricImg.height });
            canvas.setBackgroundImage(fabricImg, () => { canvas.renderAll(); pushHistory(); });
        };
    };
    reader.readAsDataURL(file);
});
document.getElementById('removeBgBtn').addEventListener('click', () => {
    canvas.setBackgroundImage(null, () => { canvas.renderAll(); pushHistory(); });
});

// ==========================================
// 12. LOCAL ADD ELEMENTS
// ==========================================
document.getElementById('addTextBtn').addEventListener('click', () => {
    const newText = new fabric.Textbox('Double Click to Edit', {
        left: canvas.width / 2, top: canvas.height / 2, originX: 'center', originY: 'center',
        fontFamily: 'Montserrat', fontSize: 45, fill: '#111111', transparentCorners: false, cornerColor: '#3b82f6', cornerStyle: 'circle', borderColor: '#3b82f6', padding: 10, textAlign: 'center'
    });
    canvas.add(newText); canvas.setActiveObject(newText);
});

document.getElementById('imageUploader').addEventListener('change', function(e) {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(f) {
        fabric.Image.fromURL(f.target.result, function(img) {
            if (img.width > canvas.width) { img.scaleToWidth((canvas.width - 40) / 2); } else { img.scaleToWidth(img.width / 2); }
            img.set({ left: canvas.width / 2, top: canvas.height / 2, originX: 'center', originY: 'center', transparentCorners: false, cornerColor: '#3b82f6', cornerStyle: 'circle', borderColor: '#3b82f6' });
            canvas.add(img); canvas.setActiveObject(img); canvas.bringToFront(img); canvas.renderAll();
        });
    };
    reader.readAsDataURL(file);
});

// ==========================================
// 13. MODALS & VIEW TOGGLES
// ==========================================
document.getElementById('startDesignBtn').addEventListener('click', () => {
    if (introEmail.value && introEmail.value.includes('@')) { document.getElementById('introModal').style.display = 'none'; } else { toast('Please enter a valid email to start designing!', 'error'); }
});
document.getElementById('skipEmailBtn').addEventListener('click', () => { document.getElementById('introModal').style.display = 'none'; });

document.getElementById('btnFullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {
            toast('Fullscreen is not available in this browser.', 'error');
        });
    } else {
        if (document.exitFullscreen) { document.exitFullscreen(); }
    }
});

document.getElementById('btnTopSave').addEventListener('click', () => {
    document.getElementById('saveModal').style.display = 'flex';
    if (!introEmail.value || !introEmail.value.includes('@')) { saveEmailInput.style.display = 'block'; }
});
document.getElementById('continueEditingBtn').addEventListener('click', () => { document.getElementById('saveModal').style.display = 'none'; });
document.getElementById('confirmSaveBtn').addEventListener('click', () => {
    const finalEmail = introEmail.value || saveEmailInput.value;
    if(finalEmail && finalEmail.includes('@')) {
        toast('Design saved! Check ' + finalEmail + ' for your link.', 'success');
        document.getElementById('saveModal').style.display = 'none';
    } else { toast('Please provide an email to save.', 'error'); }
});
document.getElementById('savePlaceOrderBtn').addEventListener('click', () => {
    document.getElementById('saveModal').style.display = 'none';
    openOrderModal();
});

// ==========================================
// 13b. ORDER FLOW (Approve & Buy)
// ==========================================
let currentOrderId = new URLSearchParams(location.search).get('order') || null;
let lastProofDataUrl = null;
let lastOrderProduct = null;
let lastOrderEmail = null;

function genOrderId() {
    return 'PNC-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();
}

function openOrderModal() {
    if (!canvas.getObjects().length && !canvas.backgroundImage) {
        toast('Your canvas is empty — add a design first!', 'error');
        return;
    }
    const sel = document.getElementById('productSelector');
    document.getElementById('orderProductLabel').textContent = sel.options[sel.selectedIndex].text;
    const emailInput = document.getElementById('orderEmailInput');
    if (introEmail.value && introEmail.value.includes('@')) emailInput.value = introEmail.value;
    document.getElementById('orderModal').style.display = 'flex';
}

document.getElementById('saveAndBuyBtn').addEventListener('click', openOrderModal);
document.getElementById('cancelOrderBtn').addEventListener('click', () => {
    document.getElementById('orderModal').style.display = 'none';
});

document.getElementById('confirmOrderBtn').addEventListener('click', async () => {
    const email = document.getElementById('orderEmailInput').value.trim();
    if (!email || !email.includes('@')) { toast('Please enter a valid email for your order.', 'error'); return; }

    const btn = document.getElementById('confirmOrderBtn');
    btn.disabled = true;
    btn.textContent = 'Saving your design...';

    try {
        const sel = document.getElementById('productSelector');
        const orderId = currentOrderId || genOrderId();
        const designJson = JSON.stringify(canvas.toDatalessJSON(['archAmount']));
        const printPng = getPrintReadyFile();
        lastProofDataUrl = await toLowResJpeg(await getRealisticPreview());

        if (STUDIO_CONFIG.ORDER_API) {
            const res = await fetch(STUDIO_CONFIG.ORDER_API + '/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId, email,
                    product: sel.value,
                    productLabel: sel.options[sel.selectedIndex].text,
                    designJson,
                    printPng: printPng.split(',')[1],
                    previewJpg: lastProofDataUrl.split(',')[1]
                })
            });
            if (!res.ok) throw new Error('Order service returned ' + res.status);
            const data = await res.json();
            currentOrderId = data.orderId;
        } else {
            // Order backend not configured yet: hand the customer their files
            // so no design is ever lost, and flag it clearly for us.
            currentOrderId = orderId;
            const link = document.createElement('a');
            link.download = orderId + '-proof.jpg';
            link.href = lastProofDataUrl;
            link.click();
            toast('Order backend not configured — proof downloaded locally.', 'error');
        }

        designDirty = false;
        lastOrderProduct = sel.value;
        lastOrderEmail = email;
        document.getElementById('orderModal').style.display = 'none';
        document.getElementById('orderNumberText').textContent = currentOrderId;
        configureCheckout(email);
        document.getElementById('orderSuccessModal').style.display = 'flex';
    } catch (err) {
        toast('Could not save your order: ' + err.message, 'error');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Yes, Place My Order';
    }
});

// Point the success screen at the right shop checkout for the ordered product.
function checkoutUrlFor(product) {
    return (STUDIO_CONFIG.PRODUCTS || {})[product] || '';
}
function configureCheckout(email) {
    const btn = document.getElementById('checkoutBtn');
    const copy = document.getElementById('orderSuccessCopy');
    const url = checkoutUrlFor(lastOrderProduct);
    if (url) {
        btn.style.display = '';
        copy.textContent = `We've saved your design for ${email}. Continue to checkout to pay — your order number is attached so we match it to your design. You can request changes within ${STUDIO_CONFIG.REVIEW_WINDOW_HOURS} hours.`;
    } else {
        btn.style.display = 'none';
        copy.textContent = `We've saved your design for ${email}. Online checkout for this product is coming soon — we'll email you to finish your order. (Order ${currentOrderId})`;
    }
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
    const url = checkoutUrlFor(lastOrderProduct);
    if (!url) return;
    const sep = url.includes('?') ? '&' : '?';
    const dest = `${url}${sep}ref=${encodeURIComponent(currentOrderId)}&email=${encodeURIComponent(lastOrderEmail || '')}`;
    // Break out of the studio iframe so the whole page goes to checkout
    (window.top || window).location.href = dest;
});

document.getElementById('downloadProofBtn').addEventListener('click', () => {
    if (!lastProofDataUrl) return;
    const link = document.createElement('a');
    link.download = (currentOrderId || 'PrintNCraft-design') + '-proof.jpg';
    link.href = lastProofDataUrl;
    link.click();
});
document.getElementById('closeOrderSuccessBtn').addEventListener('click', () => {
    document.getElementById('orderSuccessModal').style.display = 'none';
});

// Reopen an existing order (customer change requests / our backend edits):
// /studio/?order=PNC-XXXX loads the saved design into the canvas.
if (currentOrderId && STUDIO_CONFIG.ORDER_API) {
    document.getElementById('introModal').style.display = 'none';
    Promise.all([
        fetch(`${STUDIO_CONFIG.ORDER_API}/orders/${currentOrderId}/design.json`).then(r => { if (!r.ok) throw new Error('not found'); return r.json(); }),
        fetch(`${STUDIO_CONFIG.ORDER_API}/orders/${currentOrderId}/meta.json`).then(r => r.ok ? r.json() : null)
    ]).then(([design, meta]) => {
        if (meta) {
            if (meta.email) introEmail.value = meta.email;
            if (meta.product) {
                const sel = document.getElementById('productSelector');
                if ([...sel.options].some(o => o.value === meta.product)) {
                    sel.value = meta.product;
                    loadProductAssets(meta.product);
                }
            }
        }
        (design.objects || []).forEach(o => { delete o.path; });
        isRestoringHistory = true;
        canvas.loadFromJSON(design, () => {
            canvas.getObjects().forEach(o => { if (o.archAmount) applyArch(o, o.archAmount); });
            canvas.renderAll();
            isRestoringHistory = false;
            pushHistory();
            showStep('step3');
            toast(`Loaded order ${currentOrderId} — make your changes and re-approve.`, 'success');
        });
    }).catch(() => {
        toast(`Order ${currentOrderId} could not be loaded.`, 'error');
        currentOrderId = null;
    });
}

// ==========================================
// 14. IMAGE EXPORT GENERATORS (Native & Composite)
// ==========================================

// Used for backend production (Raw, Flat, High-Res design)
function getPrintReadyFile() {
    canvas.discardActiveObject(); canvas.renderAll();
    return canvas.toDataURL({ format: 'png', quality: 1, multiplier: STUDIO_CONFIG.PRINT_MULTIPLIER || 2 });
}

function toLowResJpeg(dataUrl, maxWidth = 900) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const scale = Math.min(1, maxWidth / img.width);
            const c = document.createElement('canvas');
            c.width = Math.round(img.width * scale);
            c.height = Math.round(img.height * scale);
            c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
            resolve(c.toDataURL('image/jpeg', 0.8));
        };
        img.src = dataUrl;
    });
}

// Used for customers (Combines Canvas + Shadow + Watermark mathematically)
async function getRealisticPreview() {
    modePreviewBtn.click(); // Force shading on
    canvas.discardActiveObject(); canvas.renderAll();

    return new Promise((resolve) => {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const ctx = tempCanvas.getContext('2d');

        const designImg = new Image();
        designImg.src = canvas.toDataURL({ format: 'png', quality: 1 });
        designImg.onload = () => {
            ctx.drawImage(designImg, 0, 0);

            const shadingImg = new Image();
            shadingImg.crossOrigin = "anonymous";
            shadingImg.src = mockupShading.src;
            shadingImg.onload = () => {
                ctx.drawImage(shadingImg, 0, 0, tempCanvas.width, tempCanvas.height);

                const watermarkImg = new Image();
                watermarkImg.crossOrigin = "anonymous";
                watermarkImg.src = previewWatermark.src;
                watermarkImg.onload = () => {
                    const wmWidth = 180;
                    const ratio = watermarkImg.height / watermarkImg.width;
                    const wmHeight = wmWidth * ratio;

                    const x = tempCanvas.width - wmWidth - 15;
                    const y = tempCanvas.height - wmHeight - 15;

                    ctx.globalAlpha = 0.8;
                    ctx.drawImage(watermarkImg, x, y, wmWidth, wmHeight);
                    ctx.globalAlpha = 1.0;

                    resolve(tempCanvas.toDataURL('image/png'));
                };
                watermarkImg.onerror = () => resolve(tempCanvas.toDataURL('image/png'));
            };
            shadingImg.onerror = () => resolve(tempCanvas.toDataURL('image/png'));
        };
    });
}

// ==========================================
// 15. INSTAGRAM DELAYED REWARD LOGIC
// ==========================================
document.getElementById('btnShareModal').addEventListener('click', () => { document.getElementById('shareModal').style.display = 'flex'; });
document.getElementById('closeShareBtn').addEventListener('click', () => { document.getElementById('shareModal').style.display = 'none'; });
document.getElementById('closeSuccessBtn').addEventListener('click', () => {
    document.getElementById('shareModal').style.display = 'none';
    document.getElementById('shareStep2').style.display = 'none';
    document.getElementById('shareStep1').style.display = 'block';
});

document.getElementById('copyCaptionBtn').addEventListener('click', (e) => {
    const caption = document.getElementById('shareCaption');
    navigator.clipboard.writeText(caption.value);
    e.target.innerText = "Copied!";
    setTimeout(() => { e.target.innerText = "Copy Text"; }, 2000);
});

document.getElementById('copyCodeBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('discountCodeText').innerText);
    toast('Discount code copied to clipboard!', 'success');
});

document.getElementById('triggerShareBtn').addEventListener('click', async () => {
    const btn = document.getElementById('triggerShareBtn');
    btn.innerText = "Generating Preview...";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";

    // Generate the complex overlay image
    const dataUrl = await getRealisticPreview();

    btn.innerText = "Verifying Share...";

    setTimeout(() => {
        document.getElementById('shareStep1').style.display = 'none';
        document.getElementById('shareStep2').style.display = 'block';

        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg> Download & Share Design`;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    }, 10000);

    if (navigator.share) {
        try {
            const blob = await (await fetch(dataUrl)).blob();
            const file = new File([blob], 'PrintAndCraft-Design.png', { type: blob.type });
            await navigator.share({ title: 'My Tumbler Design', files: [file] });
        } catch (err) { downloadImage(dataUrl); }
    } else {
        downloadImage(dataUrl);
    }
});

function downloadImage(dataUrl) {
    const link = document.createElement('a'); link.download = 'PrintAndCraft-Design.png'; link.href = dataUrl; link.click();
}

// Show/Hide Watermark with Preview Modes
modeDesignBtn.addEventListener('click', () => {
    modeDesignBtn.classList.add('active'); modePreviewBtn.classList.remove('active');
    blueprintOverlay.style.display = 'block';
    mockupShading.style.display = 'none';
    previewWatermark.style.display = 'none';
});
modePreviewBtn.addEventListener('click', () => {
    modePreviewBtn.classList.add('active'); modeDesignBtn.classList.remove('active');
    canvas.discardActiveObject(); canvas.renderAll();
    blueprintOverlay.style.display = 'none';
    mockupShading.style.display = 'block';
    previewWatermark.style.display = 'block';
});
