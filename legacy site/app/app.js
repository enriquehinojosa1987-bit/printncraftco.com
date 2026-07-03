// ==========================================
// PRINT & CRAFT CO. - STUDIO ENGINE V30
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

// ==========================================
// 1. DYNAMIC PRODUCT LOADER
// ==========================================
function loadProductAssets(productName) {
    const img = new Image();
    img.src = `assets/${productName}-blueprint.png`;
    
    img.onload = function() {
        const ratio = this.width / this.height;
        const targetHeight = 600; 
        const targetWidth = targetHeight * ratio;

        canvas.setWidth(targetWidth);
        canvas.setHeight(targetHeight);

        const wrapper = document.getElementById('canvasWrapper');
        wrapper.style.width = targetWidth + 'px';
        wrapper.style.height = targetHeight + 'px';
        
        blueprintOverlay.src = `assets/${productName}-blueprint.png`;
        mockupShading.src = `assets/${productName}-shading.png`;
        
        modePreviewBtn.click();
    }
    img.onerror = function() { console.warn(`Files for ${productName} missing in assets folder.`); }
}

loadProductAssets('30oz');
document.getElementById('productSelector').addEventListener('change', (e) => loadProductAssets(e.target.value));

// ==========================================
// 2. WIZARD NAVIGATION
// ==========================================
function showStep(stepId) {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    document.getElementById(stepId).classList.add('active');
    if(stepId !== 'step3') { document.getElementById('editToolbar').style.display = 'none'; }
}

document.getElementById('btnNextStep2').addEventListener('click', () => showStep('step2'));
document.getElementById('btnPrevStep1').addEventListener('click', () => showStep('step1'));
document.getElementById('btnNextStep3').addEventListener('click', () => showStep('step3'));
document.getElementById('btnPrevStep2').addEventListener('click', () => showStep('step2'));

// ==========================================
// 3. PIXABAY & LOCAL LIBRARY (With Enter Key Support)
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
    } catch (error) { container.innerHTML = '<div class="loading-text" style="color:red;">Error connecting.</div>'; }
}

document.getElementById('bgSearchBtn').addEventListener('click', () => { currentBgQuery = document.getElementById('bgSearchInput').value; currentBgPage = 1; searchPixabay(currentBgQuery, 'photo', 'bgSearchResults', 'bgPagination', 'bgPageDisplay', true, currentBgPage); });
document.getElementById('bgSearchInput').addEventListener('keypress', function (e) { if (e.key === 'Enter') { document.getElementById('bgSearchBtn').click(); }});
document.getElementById('bgPrevBtn').addEventListener('click', () => { if(currentBgPage > 1) { currentBgPage--; searchPixabay(currentBgQuery, 'photo', 'bgSearchResults', 'bgPagination', 'bgPageDisplay', true, currentBgPage); } });
document.getElementById('bgNextBtn').addEventListener('click', () => { currentBgPage++; searchPixabay(currentBgQuery, 'photo', 'bgSearchResults', 'bgPagination', 'bgPageDisplay', true, currentBgPage); });

document.getElementById('elementSearchBtn').addEventListener('click', () => { currentElQuery = document.getElementById('elementSearchInput').value; currentElPage = 1; searchPixabay(currentElQuery, 'illustration', 'elementSearchResults', 'elPagination', 'elPageDisplay', false, currentElPage); });
document.getElementById('elementSearchInput').addEventListener('keypress', function (e) { if (e.key === 'Enter') { document.getElementById('elementSearchBtn').click(); }});
document.getElementById('elPrevBtn').addEventListener('click', () => { if(currentElPage > 1) { currentElPage--; searchPixabay(currentElQuery, 'illustration', 'elementSearchResults', 'elPagination', 'elPageDisplay', false, currentElPage); } });
document.getElementById('elNextBtn').addEventListener('click', () => { currentElPage++; searchPixabay(currentElQuery, 'illustration', 'elementSearchResults', 'elPagination', 'elPageDisplay', false, currentElPage); });

document.getElementById('localBgSelector').addEventListener('change', (e) => { if(e.target.value) applyExternalBackground(e.target.value); });
document.getElementById('localElementSelector').addEventListener('change', (e) => { if(e.target.value) applyExternalElement(e.target.value); e.target.value = ""; });

function applyExternalBackground(url) {
    fabric.Image.fromURL(url, function(img) {
        img.set({ originX: 'left', originY: 'top', scaleX: canvas.width / img.width, scaleY: canvas.height / img.height });
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    }, { crossOrigin: 'anonymous' });
}

function applyExternalElement(url) {
    fabric.Image.fromURL(url, function(img) {
        if (img.width > canvas.width) { img.scaleToWidth((canvas.width - 40) / 2); } else { img.scaleToWidth(img.width / 2); }
        img.set({ left: canvas.width / 2, top: canvas.height / 2, originX: 'center', originY: 'center' });
        canvas.add(img); canvas.setActiveObject(img); canvas.bringToFront(img); canvas.renderAll();
    }, { crossOrigin: 'anonymous' });
}

// ==========================================
// 4. FLOATING TOOLBAR & EFFECTS
// ==========================================
const editToolbar = document.getElementById('editToolbar');
const textControls = document.getElementById('textControls');
const imageControls = document.getElementById('imageControls');
const sharedControls = document.getElementById('sharedControls');
const controlsDivider = document.getElementById('controlsDivider');

const textColorPicker = document.getElementById('textColorPicker');
const fontSelector = document.getElementById('fontSelector');
const outlineToggle = document.getElementById('outlineToggle');
const outlineColorPicker = document.getElementById('outlineColorPicker');
const shadowToggle = document.getElementById('shadowToggle');
const imageShapeSelector = document.getElementById('imageShapeSelector');

canvas.on('selection:created', showEditTools);
canvas.on('selection:updated', showEditTools);
canvas.on('selection:cleared', () => { editToolbar.style.display = 'none'; });

function showEditTools(e) {
    const activeObj = canvas.getActiveObject();
    if (!activeObj) return;

    editToolbar.style.display = 'flex';
    sharedControls.style.display = 'flex';
    controlsDivider.style.display = 'block';
    
    shadowToggle.checked = !!activeObj.shadow;
    
    if (activeObj.type === 'textbox' || activeObj.type === 'text' || activeObj.type === 'i-text') {
        textControls.style.display = 'flex';
        imageControls.style.display = 'none';
        
        textColorPicker.value = activeObj.fill || '#111111';
        const objFont = activeObj.fontFamily.replace(/['"]/g, '');
        fontSelector.value = `'${objFont}', sans-serif`; 
        outlineToggle.checked = !!activeObj.strokeWidth;
        outlineColorPicker.value = activeObj.stroke || '#000000';
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
    if (obj && (obj.type === 'textbox' || obj.type === 'text')) { obj.set('fill', e.target.value); canvas.renderAll(); }
});
fontSelector.addEventListener('change', (e) => {
    const obj = canvas.getActiveObject();
    const pureFontName = e.target.value.split(',')[0].replace(/['"]/g, '');
    if (obj && (obj.type === 'textbox' || obj.type === 'text')) { obj.set('fontFamily', pureFontName); canvas.renderAll(); }
});

function updateOutline() {
    const obj = canvas.getActiveObject();
    if (obj && (obj.type === 'textbox' || obj.type === 'text')) {
        if(outlineToggle.checked) {
            obj.set({ stroke: outlineColorPicker.value, strokeWidth: 3, paintFirst: 'stroke' });
        } else {
            obj.set({ stroke: null, strokeWidth: 0 });
        }
        canvas.renderAll();
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
    }
});

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
    }
});

// ==========================================
// 5. LAYER MANAGEMENT & DELETE
// ==========================================
document.getElementById('layerUpBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.bringForward(obj); canvas.renderAll(); } });
document.getElementById('layerDownBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.sendBackwards(obj); canvas.renderAll(); } });
document.getElementById('layerFrontBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.bringToFront(obj); canvas.renderAll(); } });
document.getElementById('layerBackBtn').addEventListener('click', () => { const obj = canvas.getActiveObject(); if (obj) { canvas.sendToBack(obj); canvas.renderAll(); } });
document.getElementById('deleteBtn').addEventListener('click', () => {
    const objects = canvas.getActiveObjects();
    if (objects.length) { canvas.discardActiveObject(); objects.forEach(obj => canvas.remove(obj)); editToolbar.style.display = 'none'; }
});

// ==========================================
// 6. UPLOAD LOCAL CUSTOM BACKGROUND 
// ==========================================
document.getElementById('bgUploader').addEventListener('change', function(e) {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(f) {
        const imgObj = new Image(); imgObj.src = f.target.result;
        imgObj.onload = function() {
            const fabricImg = new fabric.Image(imgObj);
            fabricImg.set({ originX: 'left', originY: 'top', scaleX: canvas.width / fabricImg.width, scaleY: canvas.height / fabricImg.height });
            canvas.setBackgroundImage(fabricImg, canvas.renderAll.bind(canvas));
        };
    };
    reader.readAsDataURL(file);
});
document.getElementById('removeBgBtn').addEventListener('click', () => { canvas.setBackgroundImage(null, canvas.renderAll.bind(canvas)); });

// ==========================================
// 7. LOCAL ADD ELEMENTS
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
// 8. MODALS & VIEW TOGGLES
// ==========================================
document.getElementById('startDesignBtn').addEventListener('click', () => {
    if (introEmail.value && introEmail.value.includes('@')) { document.getElementById('introModal').style.display = 'none'; } else { alert("Please enter a valid email to start designing!"); }
});
document.getElementById('skipEmailBtn').addEventListener('click', () => { document.getElementById('introModal').style.display = 'none'; });

document.getElementById('btnFullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) { 
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen mode: ${err.message}. Ensure your iframe has allowfullscreen="true".`);
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
        alert('Design saved! Check ' + finalEmail + ' for your link.');
        document.getElementById('saveModal').style.display = 'none';
    } else { alert("Please provide an email to save."); }
});
document.getElementById('savePlaceOrderBtn').addEventListener('click', () => { alert("Proceeding to checkout..."); });

// ==========================================
// 9. IMAGE EXPORT GENERATORS (Native & Composite)
// ==========================================

// Used for backend production (Raw, Flat, High-Res design)
function getPrintReadyFile() {
    canvas.discardActiveObject(); canvas.renderAll();
    return canvas.toDataURL({ format: 'png', quality: 1, multiplier: 2 }); 
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
                    
                    // FIXED: Draw watermark on the BOTTOM RIGHT
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
// 10. INSTAGRAM DELAYED REWARD LOGIC
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
    caption.select(); document.execCommand('copy');
    e.target.innerText = "Copied!";
    setTimeout(() => { e.target.innerText = "Copy Text"; }, 2000);
});

document.getElementById('copyCodeBtn').addEventListener('click', () => {
    const tempInput = document.createElement("input");
    tempInput.value = "DesignStudioMade2026";
    document.body.appendChild(tempInput);
    tempInput.select(); document.execCommand("copy"); document.body.removeChild(tempInput);
    alert("Discount code copied to clipboard!");
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