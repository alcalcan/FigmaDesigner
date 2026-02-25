// --- PPT Generation Logic ---
window.addEventListener('message', async (event) => {
    const msg = event.data.pluginMessage;
    if (msg && msg.type === 'export-ppt-error') {
        alert(msg.message || "Failed to build PPT.");
        resetActivePptExportButton();
        return;
    }

    if (msg && msg.type === 'export-ppt-data') {
        const payload = msg.payload;
        console.log("[UI] Received PPT Data:", payload);

        try {
            // Initialize PptxGenJS
            // eslint-disable-next-line no-undef
            const pptx = new PptxGenJS();
            const pxToInch = (px) => px / 96;
            const pxToPt = (px) => (px * 72) / 96;
            const weightToStyleName = (weight) => {
                if (typeof weight !== 'number') return '';
                if (weight >= 800) return 'Extra Bold';
                if (weight >= 700) return 'Bold';
                if (weight >= 600) return 'Semi Bold';
                if (weight >= 500) return 'Medium';
                if (weight <= 300) return 'Light';
                return 'Regular';
            };
            const normalizeFontToken = (value) => String(value || '').trim().replace(/\s+/g, ' ');
            const normalizeFontKey = (value) =>
                normalizeFontToken(value).toLowerCase().replace(/[-_\s]+/g, '');
            const isEuropaNuovaFamily = (value) =>
                normalizeFontKey(value).includes('europanuova');
            const resolvePptFontFace = (el) => {
                const candidates = [];
                const explicitFace = normalizeFontToken(el.fontFace);
                const family = normalizeFontToken(el.fontFamily || el.fontFace);
                const style = normalizeFontToken(el.fontStyle);
                const weightStyle = weightToStyleName(el.fontWeight);
                const styleProbe = `${style} ${weightStyle} ${explicitFace} ${family}`.toLowerCase();
                const pushCandidate = (value) => {
                    const normalized = normalizeFontToken(value);
                    if (!normalized) return;
                    if (!candidates.includes(normalized)) {
                        candidates.push(normalized);
                    }
                };

                // Map legacy/alias family names to installed EuropaNuova PostScript faces.
                if (isEuropaNuovaFamily(explicitFace) || isEuropaNuovaFamily(family)) {
                    const wantsItalic = /(italic|oblique)/.test(styleProbe);
                    const wantsExtraBold =
                        /(extra\s*bold|extrabold|heavy|black)/.test(styleProbe) ||
                        (typeof el.fontWeight === 'number' && el.fontWeight >= 800);
                    const wantsBold =
                        wantsExtraBold ||
                        /(bold|semi\s*bold|semibold|demi\s*bold)/.test(styleProbe) ||
                        (typeof el.fontWeight === 'number' && el.fontWeight >= 600);

                    if (wantsExtraBold && wantsItalic) pushCandidate('EuropaNuova-ExtraBoldItalic');
                    if (wantsExtraBold) pushCandidate('EuropaNuova-ExtraBold');
                    if (wantsBold && wantsItalic) pushCandidate('EuropaNuova-BoldItalic');
                    if (wantsBold) pushCandidate('EuropaNuova-Bold');
                    if (!wantsBold && wantsItalic) pushCandidate('EuropaNuova-Italic');
                    if (!wantsBold) pushCandidate('EuropaNuova-Regular');
                    pushCandidate('EuropaNuova-ExtraBold');
                    pushCandidate('EuropaNuova-Bold');
                }

                pushCandidate(explicitFace);
                if (family && style) pushCandidate(`${family} ${style}`);
                if (family && weightStyle) pushCandidate(`${family} ${weightStyle}`);
                pushCandidate(family);

                for (const candidate of candidates) {
                    if (candidate) return candidate;
                }
                return undefined;
            };
            const resolveBool = (value, fallback) => (
                typeof value === 'boolean' ? value : fallback
            );

            // Match PPT canvas size to Figma slide dimensions to avoid scale drift/clipping.
            const allSlides = (payload || []).flatMap((presentation) =>
                Array.isArray(presentation.slides) ? presentation.slides : []
            );
            const slidesWithSize = allSlides.filter((slideData) =>
                typeof slideData.width === 'number' &&
                slideData.width > 0 &&
                typeof slideData.height === 'number' &&
                slideData.height > 0
            );

            if (slidesWithSize.length > 0) {
                const maxWidthPx = Math.max(...slidesWithSize.map((slideData) => slideData.width));
                const maxHeightPx = Math.max(...slidesWithSize.map((slideData) => slideData.height));
                const layoutName = 'FIGMA_CAPTURE';
                pptx.defineLayout({
                    name: layoutName,
                    width: pxToInch(maxWidthPx),
                    height: pxToInch(maxHeightPx)
                });
                pptx.layout = layoutName;
            }

            for (const presentation of payload) {
                const presName = presentation.presentationName;

                // Optional: Section for each presentation if multiple
                // pptx.addSection({ title: presName });

                for (const slideData of presentation.slides) {
                    const slide = pptx.addSlide();
                    slide.name = slideData.name;

                    // Background
                    if (slideData.background) {
                        slide.background = { color: slideData.background };
                    }

                    for (const el of slideData.elements) {
                        const x = pxToInch(el.x);
                        const y = pxToInch(el.y);
                        const w = pxToInch(el.w);
                        const h = pxToInch(el.h);

                        if (el.type === 'text') {
                            const textX = pxToInch(typeof el.textBoxX === 'number' ? el.textBoxX : el.x);
                            const textY = pxToInch(typeof el.textBoxY === 'number' ? el.textBoxY : el.y);
                            const textW = pxToInch(typeof el.textBoxW === 'number' ? el.textBoxW : el.w);
                            const textH = pxToInch(typeof el.textBoxH === 'number' ? el.textBoxH : el.h);
                            if (el.textExportMode === 'raster' && el.fill) {
                                const data = el.fill.startsWith('data:') ? el.fill : ("image/png;base64," + el.fill);
                                slide.addImage({
                                    data: data,
                                    x: textX, y: textY, w: textW, h: textH
                                });
                                continue;
                            }

                            const pptFontSize = typeof el.fontSize === 'number' ? pxToPt(el.fontSize) : undefined;
                            const resolvedFontFace = resolvePptFontFace(el);
                            const faceStyleProbe = `${el.fontStyle || ''} ${el.fontFace || ''} ${el.fontFamily || ''}`.toLowerCase();
                            const inferredBold = typeof el.fontWeight === 'number'
                                ? el.fontWeight >= 600
                                : /(extra\s*bold|extrabold|semi\s*bold|semibold|demi\s*bold|bold)/i.test(faceStyleProbe);
                            const inferredItalic = /(italic|oblique)/i.test(faceStyleProbe);
                            const isExplicitEuropaPostScript =
                                typeof resolvedFontFace === 'string' &&
                                /^EuropaNuova-/.test(resolvedFontFace);
                            const textOptions = {
                                x: textX, y: textY, w: textW, h: textH,
                                fontSize: pptFontSize,
                                fontFace: resolvedFontFace,
                                bold: isExplicitEuropaPostScript ? false : resolveBool(el.bold, inferredBold),
                                italic: isExplicitEuropaPostScript ? false : resolveBool(el.italic, inferredItalic),
                                color: el.color,
                                align: el.align,
                                valign: el.valign || 'top',
                                margin: 0,
                                // opacity: el.opacity // library support varies
                            };

                            if (typeof el.letterSpacingPx === 'number') {
                                textOptions.charSpace = pxToPt(el.letterSpacingPx);
                            }
                            if (typeof el.lineHeightPx === 'number') {
                                textOptions.lineSpacingPt = pxToPt(el.lineHeightPx);
                            } else if (typeof el.lineHeightPercent === 'number' && el.lineHeightPercent > 0) {
                                textOptions.lineSpacingMultiple = el.lineHeightPercent / 100;
                            }
                            if (typeof el.paragraphSpacing === 'number' && el.paragraphSpacing > 0) {
                                textOptions.paraSpaceAfterPt = pxToPt(el.paragraphSpacing);
                            }

                            slide.addText(el.text || '', textOptions);
                        } else if (el.type === 'image') {
                            if (el.fill) {
                                const data = el.fill.startsWith('data:') ? el.fill : ("image/png;base64," + el.fill);
                                slide.addImage({
                                    data: data,
                                    x: x, y: y, w: w, h: h
                                });
                            }
                        } else if (el.type === 'shape') {
                            const hasCornerRadius = typeof el.cornerRadius === 'number' && el.cornerRadius > 0.01;
                            const isEllipse = el.shapeType === 'ellipse';
                            const roundRectType =
                                (pptx.ShapeType && (pptx.ShapeType.roundRect || pptx.ShapeType.round1Rect)) ||
                                pptx.ShapeType.rect;
                            const ellipseType =
                                (pptx.ShapeType && (pptx.ShapeType.ellipse || pptx.ShapeType.ellip)) ||
                                pptx.ShapeType.rect;
                            const shapeType = isEllipse
                                ? ellipseType
                                : (hasCornerRadius ? roundRectType : pptx.ShapeType.rect);
                            const shapeOptions = {
                                x: x, y: y, w: w, h: h
                            };

                            if (el.fill) {
                                const fill = { color: el.fill };
                                if (typeof el.fillOpacity === 'number' && el.fillOpacity < 1) {
                                    fill.transparency = Math.max(0, Math.min(100, (1 - el.fillOpacity) * 100));
                                }
                                shapeOptions.fill = fill;
                            } else {
                                shapeOptions.fill = { color: 'FFFFFF', transparency: 100 };
                            }

                            if (el.strokeColor) {
                                const line = {
                                    color: el.strokeColor,
                                    pt: pxToPt(typeof el.strokeWeight === 'number' && el.strokeWeight > 0 ? el.strokeWeight : 1)
                                };
                                if (typeof el.strokeOpacity === 'number' && el.strokeOpacity < 1) {
                                    line.transparency = Math.max(0, Math.min(100, (1 - el.strokeOpacity) * 100));
                                }
                                if (el.strokeStyle === 'dash') {
                                    line.dash = 'dash';
                                }
                                shapeOptions.line = line;
                            }

                            if (hasCornerRadius) {
                                const radiusInches = pxToInch(el.cornerRadius);
                                shapeOptions.radius = radiusInches;
                                shapeOptions.rectRadius = radiusInches;
                            }

                            slide.addShape(shapeType, shapeOptions);
                        }
                    }
                }
            }

            // Show custom export flow (System Dialog -> fallback to Modal)
            showPptExport(payload, pptx, msg.docName);

        } catch (err) {
            console.error("PPT Generation Failed:", err);
            alert("Failed to generate PPT: " + err.message);
            resetActivePptExportButton();
        }
        // Finally block removed here because modal handles button reset on close
    }
});

// --- DEBUG UTILS ---
const originalConsoleLog = console.log;
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

function sendLogToBridge(level, args) {
    try {
        // Convert args to string
        const message = args.map(arg => {
            if (typeof arg === 'object') {
                try { return JSON.stringify(arg); } catch (e) { return String(arg); }
            }
            return String(arg);
        }).join(' ');

        fetch('http://127.0.0.1:4000/log', {
            method: 'POST',
            body: `[UI ${level.toUpperCase()}] ${message}`
        }).catch(() => { }); // Ignore errors if bridge is down
    } catch (e) { }
}

console.log = function (...args) {
    originalConsoleLog.apply(console, args);
    sendLogToBridge('log', args);
};
console.warn = function (...args) {
    originalConsoleWarn.apply(console, args);
    sendLogToBridge('warn', args);
};
console.error = function (...args) {
    originalConsoleError.apply(console, args);
    sendLogToBridge('error', args);
};

window.onerror = function (message, source, lineno, colno, error) {
    console.error("Uncaught Error:", message, "at", source, ":", lineno);
};

const uiSessionId = Math.random().toString(36).substring(7);
console.log(`[UI] UI Initialized | Session: ${uiSessionId} | Time:
                        ${performance.now().toFixed(2)}ms`);

const createBtn = document.getElementById('create-btn');
const connectBtn = document.getElementById('connect-btn');
const syncBtn = document.getElementById('sync-btn');
const capturePngBtn = document.getElementById('capture-png-btn');
const captureClipboardBtn = document.getElementById('capture-clipboard-btn');
const buildPptBtn = document.getElementById('build-ppt-btn');
const pptEditableTextCheckbox = document.getElementById('ppt-editable-text-checkbox');

// State for clipboard operation
let activeTab = 'tab-sync';
let isClipboardCapture = false;
let lastCapturedProject = "Default";
let activeSaves = 0;
const captureBtn = document.getElementById('capture-btn');
const processCheckbox = document.getElementById('process-checkbox');
const detailedCheckbox = document.getElementById('detailed-checkbox');
const vectorJsonCheckbox = document.getElementById('vector-json-checkbox');
const statusDot = document.getElementById('status-dot');
const statusTextSpan = document.getElementById('status-text');
const bridgeActiveToolsDiv = document.getElementById('bridge-active-tools');
const hintTextDiv = document.getElementById('hint-text');

// Preview Elements
const previewCodeBtn = document.getElementById('preview-code-btn');
const exactRefactorCheckbox = document.getElementById('exact-refactor-checkbox');
const codePreviewArea = document.getElementById('code-preview-area');

// Component Elements
const refreshComponentsBtn = document.getElementById('refresh-components-btn');
const componentList = document.getElementById('component-list');
const refreshPagesBtn = document.getElementById('refresh-pages-btn');

const pageList = document.getElementById('page-list');
const refreshSlidesBtn = document.getElementById('refresh-slides-btn');
const slideList = document.getElementById('slide-list');
const refreshPresentationsBtn = document.getElementById('refresh-presentations-btn');
const refreshFlowsBtn = document.getElementById('refresh-flows-btn');
const presentationList = document.getElementById('presentation-list');

// File Browser Elements
const fileList = document.getElementById('file-list');
const refreshFilesBtn = document.getElementById('refresh-files-btn');
const fileActions = document.getElementById('file-actions');
const generateSelectedBtn = document.getElementById('generate-from-selected-btn');
const convertToCodeBtn = document.getElementById('convert-to-code-btn');
const convertAllBtn = document.getElementById('convert-all-btn');
const generatorOnlyCheckbox = document.getElementById('generator-only-checkbox');
const simplifiedCodeCheckbox = document.getElementById('simplified-code-checkbox');
const proceduralGenCheckbox = document.getElementById('procedural-gen-checkbox');
const generatorOnlyCheckboxCapture = document.getElementById('generator-only-checkbox-capture');
const proceduralGenCheckboxCapture = document.getElementById('procedural-gen-checkbox-capture');
const proceduralGenCheckboxPreview = document.getElementById('procedural-gen-checkbox-preview');

let pollInterval = null;
let selectedFilePath = null;
let selectedFolder = null;
let isOperationActive = false;
let isEditMode = false;
let selectedItems = new Set();

function showFeedback(btn, originalText, successText = "Captured!") {
    const prevText = btn.textContent;
    btn.textContent = successText;
    const originalColor = btn.style.backgroundColor;
    const originalBoxShadow = btn.style.boxShadow;

    // Special styling for feedback state if it's the sync-btn
    if (btn.id === 'sync-btn' || btn.id === 'generate-from-selected-btn') {
        btn.style.backgroundColor = "#1db954"; // Brighter green
    }

    setTimeout(() => {
        btn.textContent = originalText || prevText;
        btn.style.backgroundColor = originalColor;
        btn.style.boxShadow = originalBoxShadow;
    }, 2000);
}

createBtn.onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'create' } }, '*')
}

captureBtn.onclick = () => {
    const isDetailed = detailedCheckbox.checked;
    parent.postMessage({ pluginMessage: { type: 'capture', detailed: isDetailed } }, '*')
    // We'll trigger feedback when the download starts (approximate)
    showFeedback(captureBtn, "Download JSON (Manual)");
};

document.getElementById('tool-check-accessibility').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'tools-check-accessibility' } }, '*')
};

document.getElementById('tool-extract-details').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'tools-extract-details' } }, '*')
};

const editFilesBtn = document.getElementById('edit-files-btn');
const editComponentsBtn = document.getElementById('edit-components-btn');
const editPagesBtn = document.getElementById('edit-pages-btn');
const editSlidesBtn = document.getElementById('edit-slides-btn');
const editPresentationsBtn = document.getElementById('edit-presentations-btn');
const editFlowsBtn = document.getElementById('edit-flows-btn');
const batchDeleteFlowsBtn = document.getElementById('batch-delete-flows-btn');
const batchActionsBar = document.getElementById('batch-actions-bar');
const selectionCountSpan = document.getElementById('selection-count');
const batchDeleteBtn = document.getElementById('batch-delete-btn');
const batchConvertBtn = document.getElementById('batch-convert-btn');

const batchDeleteComponentsBtn = document.getElementById('batch-delete-components-btn');
const batchDeletePagesBtn = document.getElementById('batch-delete-pages-btn');
const batchDeleteSlidesBtn = document.getElementById('batch-delete-slides-btn');
const batchDeletePresentationsBtn = document.getElementById('batch-delete-presentations-btn');

let activeEditSection = null; // 'file', 'component', 'page'

const toggleEditMode = (section, btn) => {
    if (activeEditSection === section) {
        activeEditSection = null;
        isEditMode = false;
    } else {
        activeEditSection = section;
        isEditMode = true;
    }

    [editFilesBtn, editComponentsBtn, editPagesBtn].forEach(b => {
        const isActive = isEditMode && (
            (section === 'file' && b === editFilesBtn) ||
            (section === 'component' && b === editComponentsBtn) ||
            (section === 'page' && b === editPagesBtn) ||
            (section === 'slide' && b === editSlidesBtn) ||
            (section === 'presentation' && b === editPresentationsBtn)
        );
        b.classList.toggle('active', isActive);
        if (isActive) {
            b.style.borderColor = "#0d99ff";
            b.style.color = "#0d99ff";
        } else {
            b.style.borderColor = "";
            b.style.color = "";
            b.classList.remove('active');
        }
    });
    selectedItems.clear();
    updateBatchBar();
    loadFiles();
    loadComponents();
};

editFilesBtn.onclick = () => toggleEditMode('file', editFilesBtn);
editComponentsBtn.onclick = () => toggleEditMode('component', editComponentsBtn);
editPagesBtn.onclick = () => toggleEditMode('page', editPagesBtn);
editSlidesBtn.onclick = () => toggleEditMode('slide', editSlidesBtn);
editPresentationsBtn.onclick = () => toggleEditMode('presentation', editPresentationsBtn);

function updateBatchBar() {
    const fileBar = document.getElementById('batch-actions-bar');
    const compBar = document.getElementById('components-batch-bar');
    const pageBar = document.getElementById('pages-batch-bar');
    const slideBar = document.getElementById('slides-batch-bar');
    const presentationBar = document.getElementById('presentations-batch-bar');
    const flowBar = document.getElementById('flows-batch-bar');
    if (flowBar) flowBar.style.display = isEditMode ? 'flex' : 'none';



    fileBar.style.display = 'none';
    compBar.style.display = 'none';
    pageBar.style.display = 'none';
    slideBar.style.display = 'none';


    if (isEditMode) {
        if (activeEditSection === 'file') {
            fileBar.style.display = 'flex';
            selectionCountSpan.textContent = `${selectedItems.size} selected`;
        } else if (activeEditSection === 'component') {
            compBar.style.display = 'flex';
            document.getElementById('components-selection-count').textContent = `${selectedItems.size}
                        selected`;
        } else if (activeEditSection === 'page') {
            pageBar.style.display = 'flex';
            document.getElementById('pages-selection-count').textContent = `${selectedItems.size} selected`;
        } else if (activeEditSection === 'slide') {
            slideBar.style.display = 'flex';
            document.getElementById('slides-selection-count').textContent = `${selectedItems.size}
                        selected`;
        } else if (activeEditSection === 'presentation') {
            presentationBar.style.display = 'flex';
            document.getElementById('presentations-selection-count').textContent = `${selectedItems.size}
                        selected`;
        }
    }
}

batchDeleteBtn.onclick = async () => {
    if (selectedItems.size === 0) return;
    if (!confirm(`Delete ${selectedItems.size} selected items?`)) return;

    const items = Array.from(selectedItems).map(s => JSON.parse(s));
    const files = items.filter(i => (i.t === 'file' || i.type === 'file')).map(i => i.p ||
        i.fullPath);
    const comps = items.filter(i => (i.t === 'component' || i.type === 'component')).map(i => i.p ||
        i.fullPath);
    const pages = items.filter(i => (i.t === 'page' || i.type === 'page')).map(i => i.p ||
        i.fullPath);
    const slides = items.filter(i => (i.t === 'slide' || i.type === 'slide')).map(i => i.p ||
        i.fullPath);
    const presentations = items.filter(i => (i.t === 'presentation' || i.type ===
        'presentation')).map(i => i.p || i.fullPath);

    try {
        if (files.length > 0) {
            await fetch('http://127.0.0.1:4000/batch-delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paths: files })
            });
        }
        if (comps.length > 0) {
            await fetch('http://127.0.0.1:4000/batch-delete-components', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ names: comps })
            });
        }

        const flows = items.filter(i => i.t === 'flow' || i.type === 'flow').map(i => i.id);
        if (flows.length > 0) {
            await fetch('http://localhost:4000/batch-delete-components', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ names: flows })
            });
            deletedAny = true;
        }
        if (pages.length > 0) {
            await fetch('http://127.0.0.1:4000/batch-delete-pages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ names: pages })
            });
        }
        if (slides.length > 0) {
            await fetch('http://127.0.0.1:4000/batch-delete-components', {
                // Reuse component delete for slides as they are basically components
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ names: slides })
            });
        }
        if (presentations.length > 0) {
            await fetch('http://127.0.0.1:4000/batch-delete-components', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ names: presentations })
            });
        }
        selectedItems.clear();
        updateBatchBar();
        loadFiles();
        loadComponents();
    } catch (err) { console.error(err); }
};

batchDeleteComponentsBtn.onclick = batchDeleteBtn.onclick;
batchDeletePagesBtn.onclick = batchDeleteBtn.onclick;
batchDeleteSlidesBtn.onclick = batchDeleteBtn.onclick;
batchDeletePresentationsBtn.onclick = batchDeleteBtn.onclick;

batchConvertBtn.onclick = async () => {
    if (selectedItems.size === 0) return;
    const items = Array.from(selectedItems).filter(p => !p.includes('|')); // Only files for now
    if (items.length === 0) {
        alert("Please select files from the extraction list to convert.");
        return;
    }

    isOperationActive = true;
    batchConvertBtn.disabled = true;
    batchConvertBtn.textContent = "Processing...";

    try {
        for (const itemPath of items) {
            const isProcedural = document.getElementById('procedural-gen-checkbox').checked;
            await fetch('http://127.0.0.1:4000/generate-from-json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    path: itemPath,
                    options: {
                        refactor: !generatorOnlyCheckbox.checked,
                        compact: !generatorOnlyCheckbox.checked,
                        procedural: isProcedural
                    }
                })
            });
            console.log(`[Batch] Converted: ${itemPath}`);
        }
        alert(`Successfully converted ${items.length} files.`);
        loadComponents();
    } catch (err) {
        console.error("Batch conversion failed", err);
    } finally {
        isOperationActive = false;
        batchConvertBtn.disabled = false;
        batchConvertBtn.textContent = "Convert Selected";
    }
};

syncBtn.onclick = () => {
    console.log("Sync button clicked");
    const isDetailed = detailedCheckbox.checked;
    const saveVectorInJson = vectorJsonCheckbox.checked;
    const isProcedural = proceduralGenCheckboxCapture.checked;
    console.log(`Sending capture-bridge request. Detailed: ${isDetailed}, SaveVector:
                        ${saveVectorInJson}, Procedural: ${isProcedural}`);
    parent.postMessage({
        pluginMessage: {
            type: 'capture-bridge',
            detailed: isDetailed,
            saveVectorInJson: saveVectorInJson,
            procedural: isProcedural,
            refactor: !generatorOnlyCheckboxCapture.checked,
            compact: !generatorOnlyCheckboxCapture.checked,
            componentNameOverride: document.getElementById('capture-name-input').value.trim()
        }
    }, '*')
    // Feedback will be triggered on result message for precision,
    // but let's do immediate for responsiveness too
    showFeedback(syncBtn, "Capture Sync (to Disk)");
}

capturePngBtn.onclick = () => {
    console.log("Capture PNG button clicked");
    parent.postMessage({ pluginMessage: { type: 'capture-png' } }, '*');
    showFeedback(capturePngBtn, "Capture PNG", "Capturing...");
}

captureClipboardBtn.onclick = () => {
    console.log("Capture to Clipboard button clicked");
    isClipboardCapture = true;

    const isDetailed = detailedCheckbox.checked;
    const saveVectorInJson = vectorJsonCheckbox.checked;
    const isProcedural = proceduralGenCheckboxCapture.checked;

    parent.postMessage({
        pluginMessage: {
            type: 'capture-preview', // Reuse preview capture logic
            detailed: isDetailed,
            saveVectorInJson: saveVectorInJson,
            procedural: isProcedural,
            refactor: !generatorOnlyCheckboxCapture.checked,
            compact: !generatorOnlyCheckboxCapture.checked,
            skipAssets: false // We need assets for generation context, even if transient
        }
    }, '*');

    showFeedback(captureClipboardBtn, "Capture to Clipboard", "Capturing...");
}

buildPptBtn.onclick = () => {
    const textFidelityMode = (pptEditableTextCheckbox && pptEditableTextCheckbox.checked)
        ? 'always_editable'
        : 'smart_hybrid';
    setPptTriggerButton('build-ppt-btn');
    activePptExportBtn = buildPptBtn;
    activePptExportBtnOriginalText = "Build PPT (Selected Frame)";
    buildPptBtn.disabled = true;
    buildPptBtn.textContent = "Building...";
    parent.postMessage({
        pluginMessage: {
            type: 'export-ppt-from-selection',
            fidelity: 'balanced',
            rasterScale: 3,
            compositionFallback: 'container',
            textFidelityMode: textFidelityMode,
            platformProfile: 'cross_platform'
        }
    }, '*');
}

previewCodeBtn.onclick = () => {
    console.log("Preview Code button clicked");
    previewCodeBtn.disabled = true;
    previewCodeBtn.textContent = "Generating...";
    // codePreviewArea.style.display = "none"; // Keep visible
    codePreviewArea.value = "Generating..."; // Show status text instead of hiding

    // Trigger capture in plugin
    const isDetailed = detailedCheckbox.checked;
    const saveVectorInJson = vectorJsonCheckbox.checked;

    parent.postMessage({
        pluginMessage: {
            type: 'capture-preview',
            detailed: isDetailed,
            saveVectorInJson: saveVectorInJson,
            skipAssets: !exactRefactorCheckbox.checked
        }
    }, '*');
}

refreshFilesBtn.onclick = () => {
    loadFiles();
}

refreshComponentsBtn.onclick = () => {
    loadComponents();
}

refreshPagesBtn.onclick = () => {
    loadComponents();
}

refreshSlidesBtn.onclick = () => {
    loadComponents();
}

refreshPresentationsBtn.onclick = () => {
    loadComponents();
}

refreshFlowsBtn.onclick = () => {
    loadComponents();
}

generateSelectedBtn.onclick = async () => {
    if (!selectedFilePath) return;

    generateSelectedBtn.textContent = "Hydrating...";
    generateSelectedBtn.disabled = true;

    try {
        const response = await
            fetch(`http://127.0.0.1:4000/read?path=${encodeURIComponent(selectedFilePath)}`);
        if (!response.ok) {
            showFeedback(generateSelectedBtn, "Generate Selected", "File Not Found!");
            console.error(`Failed to read file: ${response.status} ${response.statusText}`);
            generateSelectedBtn.disabled = false;
            return;
        }
        const data = await response.json();

        // 1. Find all asset references
        const assetPaths = new Set();
        const findAssets = (obj) => {
            if (!obj || typeof obj !== 'object') return;
            if (obj.assetRef) assetPaths.add(obj.assetRef);
            if (obj.svgPath) assetPaths.add(obj.svgPath);
            Object.values(obj).forEach(findAssets);
        };
        findAssets(data);

        // 2. Fetch assets from bridge
        const lastSlashIndex = selectedFilePath.lastIndexOf('/');
        const dirPath = lastSlashIndex !== -1 ? selectedFilePath.substring(0, lastSlashIndex) : "";

        const assets = {};

        if (assetPaths.size > 0) {
            await Promise.all(Array.from(assetPaths).map(async (assetRef) => {
                try {
                    const fullAssetPath = dirPath ? `${dirPath}/${assetRef}` : assetRef;
                    const listRes = await
                        fetch(`http://127.0.0.1:4000/read-asset?project=&path=${encodeURIComponent(fullAssetPath)}`);

                    if (!listRes.ok) {
                        console.warn(`[UI] Asset not found: ${fullAssetPath}`);
                        return;
                    }

                    const assetData = await listRes.json();
                    if (assetData.content) {
                        assets[assetRef] = assetData.content;
                    }
                } catch (e) {
                    console.error(`Failed to fetch asset: ${assetRef}`, e);
                }
            }));
        }

        parent.postMessage({ pluginMessage: { type: 'generate-from-json', data, assets } }, '*');
        showFeedback(generateSelectedBtn, "Generate Selected", "Generated!");
    } catch (e) {
        console.error("Failed to read file for generation", e);
        generateSelectedBtn.textContent = "Error!";
    } finally {
        generateSelectedBtn.disabled = false;
    }
}

convertToCodeBtn.onclick = async () => {
    if (!selectedFilePath) return;

    convertToCodeBtn.textContent = "Converting...";
    convertToCodeBtn.disabled = true;

    try {
        const parts = selectedFilePath.split('/');
        const projectName = parts[0] || "Default";
        const isSimplified = simplifiedCodeCheckbox.checked;
        const isProcedural = proceduralGenCheckbox.checked;

        const response = await fetch('http://127.0.0.1:4000/generate-to-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: selectedFilePath,
                project: projectName,
                simplified: isSimplified,
                procedural: isProcedural,
                refactor: !generatorOnlyCheckbox.checked,
                compact: !generatorOnlyCheckbox.checked
            })
        });

        const result = await response.json();
        if (result.status === 'ok') {
            showFeedback(convertToCodeBtn, "Convert to Code Component", "Success!");
            console.log("Component generated at:", result.tsPath);
            loadComponents();
        } else {
            alert("Conversion failed: " + result.error);
            showFeedback(convertToCodeBtn, "Convert to Code Component", "Error!");
        }
    } catch (e) {
        console.error("Failed to convert to code", e);
        showFeedback(convertToCodeBtn, "Convert to Code Component", "Network Error");
    } finally {
        convertToCodeBtn.disabled = false;
    }
}

convertAllBtn.onclick = async () => {
    if (!selectedFolder) return;

    const originalText = convertAllBtn.textContent;
    convertAllBtn.textContent = "Processing Batch...";
    convertAllBtn.disabled = true;

    try {
        const isSimplified = simplifiedCodeCheckbox.checked;
        const isProcedural = proceduralGenCheckbox.checked;
        const response = await fetch('http://127.0.0.1:4000/generate-folder-to-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                folder: selectedFolder,
                project: selectedFolder.split('/')[0],
                simplified: isSimplified,
                procedural: isProcedural,
                refactor: !generatorOnlyCheckbox.checked,
                compact: !generatorOnlyCheckbox.checked
            })
        });

        const result = await response.json();
        if (result.status === 'ok') {
            const successCount = result.results.filter(r => r.status === 'ok').length;
            const totalCount = result.results.length;
            showFeedback(convertAllBtn, originalText, `Converted ${successCount}/${totalCount}!`);
            loadComponents();
        } else {
            alert("Batch conversion failed: " + result.error);
            showFeedback(convertAllBtn, originalText, "Error!");
        }
    } catch (e) {
        console.error("Failed to convert folder items", e);
        showFeedback(convertAllBtn, originalText, "Network Error");
    } finally {
        convertAllBtn.disabled = false;
    }
}

connectBtn.onclick = () => {
    if (pollInterval === null) {
        startPolling();
        connectBtn.textContent = "Disconnect Server";
    } else {
        stopPolling();
        connectBtn.textContent = "Connect to Server";
    }
}

async function loadFiles() {
    if (isOperationActive) return;

    if (pollInterval === null) {
        fileList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see files</div>`;
        fileActions.style.display = "none";
        return;
    }

    if (fileList.innerHTML.includes("Connect to server") || fileList.innerHTML.includes("Error")) {
        fileList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Loading files...</div>`;
    }
    fileActions.style.display = "none";
    selectedFilePath = null;
    selectedFolder = null;

    try {
        const response = await fetch(`http://127.0.0.1:4000/list?t=${Date.now()}`);
        if (!response.ok) throw new Error("Failed");
        const { files } = await response.json();

        const sessionMap = new Map();
        files.forEach(file => {
            const normalized = file.path.replace(/\\/g, '/');
            const parts = normalized.split('/');
            if (parts.length >= 1) {
                const project = parts[0];
                const session = parts.length > 2 ? parts[1] : parts[parts.length - 1].replace(/\.json$/, '');
                const key = `${project}|${session}`;

                const isDataJson = parts[parts.length - 1] === 'data.json';
                if (!sessionMap.has(key) || isDataJson) {
                    sessionMap.set(key, {
                        name: session,
                        fullPath: normalized,
                        project: project,
                        type: 'file'
                    });
                }
            }
        });

        renderGroupedList(fileList, Array.from(sessionMap.values()), true);
    } catch (e) {
        console.error(e);
        fileList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #ff4d4d;">Error loading files</div>`;
    }
}

async function loadComponents() {
    if (isOperationActive) return;

    if (pollInterval === null) {
        componentList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see components</div>`;
        pageList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see pages</div>`;
        slideList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see slides</div>`;
        presentationList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see presentations</div>`;
        const flowList = document.getElementById('flow-list');
        if (flowList) flowList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see flows</div>`;
        return;
    }
    if (componentList.innerHTML.includes("Connect to server") || componentList.innerHTML.includes("Error")) {
        componentList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Loading...</div>`;
        pageList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Loading...</div>`;
        slideList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Loading...</div>`;
        presentationList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Loading...</div>`;
    }

    try {
        const response = await fetch(`http://127.0.0.1:4000/list-components?t=${Date.now()}`);
        if (!response.ok) throw new Error("Failed");
        const jsonResponse = await response.json();
        console.log('[DEBUG] list-components response flows:', jsonResponse.flows);
        const { components, pages, slides, presentations, flows } = jsonResponse;

        const seen = new Set();
        const mapItems = (list, type) => {
            const items = [];
            list.forEach(pathStr => {
                const normalized = pathStr.replace(/\\/g, '/');
                const parts = normalized.split('/');
                const project = parts.length > 1 ? parts[0] : null;
                const name = parts[parts.length - 1].replace(/\.json$/, '');
                const key = `${project}|${name}|${type}`;

                if (!seen.has(key)) {
                    items.push({
                        name: name,
                        fullPath: normalized,
                        project: project,
                        type: type
                    });
                    seen.add(key);
                }
            });
            return items;
        };

        const flowList = document.getElementById('flow-list');
        if (flowList) {
            console.log('Rendering flows:', flows);
            renderGroupedList(flowList, mapItems(flows || [], 'flow'));
        }
        renderGroupedList(componentList, mapItems(components || [], 'component'));
        renderGroupedList(pageList, mapItems(pages || [], 'page'));
        renderGroupedList(slideList, mapItems(slides || [], 'slide'));
        renderGroupedList(presentationList, mapItems(presentations || [], 'presentation'));

    } catch (e) {
        console.error(e);
        componentList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #ff4d4d;">Error loading components</div>`;
        pageList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #ff4d4d;">Error loading pages</div>`;
        slideList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #ff4d4d;">Error loading slides</div>`;
        presentationList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #ff4d4d;">Error loading presentations</div>`;
    }
}

function renderGroupedList(container, items, sortDesc = false) {
    container.innerHTML = '';
    if (items.length === 0) {
        container.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">None found</div>`;
        return;
    }

    const groups = {};
    const topLevel = [];

    items.forEach(item => {
        if (item.project) {
            if (!groups[item.project]) groups[item.project] = [];
            groups[item.project].push(item);
        } else {
            topLevel.push(item);
        }
    });

    function createRow(item, paddingLeft) {
        const row = document.createElement('div');
        row.className = 'list-item';
        row.style.cssText = `padding: 8px 12px 8px ${paddingLeft}px; font-size: 11px; color: #eee;
                        border-bottom: 1px solid #2a2a2a; cursor: pointer; transition: background 0.2s; display: flex;
                        align-items: center; justify-content: space-between; position: relative; overflow: hidden;`;

        const nameSpan = document.createElement('div');
        nameSpan.style.cssText = `display: flex; align-items: center; gap: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;`;

        const icon = item.type === 'file' ? '📄' : '❖';
        nameSpan.innerHTML = `<span style="opacity:0.6; flex-shrink: 0;">${icon}</span> <span
                            style="overflow: hidden; text-overflow: ellipsis;">${item.name}</span>`;
        nameSpan.title = `${item.project}/${item.name}`;
        row.appendChild(nameSpan);

        const actions = document.createElement('div');
        actions.style.cssText = 'display: flex; gap: 4px; flex-shrink: 0; align-items: center;';

        if (item.type === 'component' || item.type === 'page' || item.type === 'slide' || item.type ===
            'presentation') {
            const insBtn = document.createElement('span');
            insBtn.textContent = 'Insert';
            insBtn.style.cssText = `font-size: 9px; background: #0d99ff; padding: 2px 6px; border-radius: 4px; opacity: 0; transition: opacity 0.2s; white-space: nowrap;`;
            insBtn.onclick = (e) => {
                e.stopPropagation();
                parent.postMessage({
                    pluginMessage: {
                        type: 'generate-component', componentName: item.name,
                        projectName: item.project
                    }
                }, '*')
                insBtn.textContent = 'Sent!';
                insBtn.style.background = '#1ed760';
                setTimeout(() => {
                    insBtn.textContent = 'Insert';
                    insBtn.style.background = '#0d99ff';
                }, 1000);
            };
            actions.appendChild(insBtn);
        }


        const moveBtn = document.createElement('span');
        moveBtn.textContent = 'Move';
        moveBtn.style.cssText = `font-size: 9px; background: #f5a623; padding: 2px 6px; border-radius: 4px; opacity: 0; transition: opacity 0.2s; white-space: nowrap; cursor: pointer;`;

        const showMoveInput = (e) => {
            e.stopPropagation();
            const originalActions = actions.innerHTML;
            actions.innerHTML = '';

            const input = document.createElement('input');
            input.type = 'text';
            input.value = item.project || "";
            input.placeholder = "Folder...";
            input.style.cssText = `font-size: 10px; background: #333; color: white; border: 1px solid #0d99ff; border-radius: 4px; padding: 2px 4px; width: 70px; outline: none; margin-right: 4px;`;

            const finish = () => {
                if (!isOperationActive) return;
                isOperationActive = false;
                if (item.type === 'file') loadFiles();
                else loadComponents();
            };

            const save = async () => {
                const dest = input.value.trim();
                if (!dest || dest === item.project) { finish(); return; }
                input.disabled = true;
                input.style.opacity = '0.5';
                try {
                    const resp = await fetch('http://127.0.0.1:4000/move', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            type: item.type === 'file' ? 'file' : 'component',
                            sourcePath: item.fullPath,
                            destinationFolder: dest
                        })
                    });
                    if (resp.ok) finish();
                    else {
                        const err = await resp.json();
                        alert("Move failed: " + (err.error || "Unknown error"));
                        finish();
                    }
                } catch (err) {
                    console.error(err);
                    alert("Network error");
                    finish();
                }
            };

            input.onkeydown = (ev) => {
                ev.stopPropagation();
                if (ev.key === 'Enter') save();
                if (ev.key === 'Escape') finish();
            };
            input.onblur = () => finish();
            input.onclick = (ev) => ev.stopPropagation();
            input.onmousedown = (ev) => ev.stopPropagation();

            actions.appendChild(input);
            input.focus();
            input.select();
            isOperationActive = true;
        };

        moveBtn.onclick = showMoveInput;
        actions.appendChild(moveBtn);

        const delBtn = document.createElement('span');
        delBtn.textContent = '×';
        delBtn.style.cssText = `font-size: 11px; background: #ff3b3b; color: white; padding: 0 6px; border-radius: 4px; opacity: 0; transition: opacity 0.2s; cursor: pointer; display: flex; align-items: center;`;
        delBtn.onclick = async (e) => {
            e.stopPropagation();
            if (!confirm(`Delete ${item.name}?`)) return;
            try {
                let url = item.type === 'file' ? 'http://127.0.0.1:4000/delete' :
                    'http://127.0.0.1:4000/delete-component';
                let body = item.type === 'file' ? { path: item.fullPath } : { name: item.fullPath };
                const resp = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
                if (resp.ok) {
                    const result = await resp.json();
                    if (result.status === 'regenerated') alert(result.message);
                    if (item.type === 'file') loadFiles();
                    else loadComponents();
                } else {
                    const err = await resp.json();
                    alert("Failed to delete: " + (err.error || "Unknown error"));
                }
            } catch (err) { console.error(err); }
        };
        actions.appendChild(delBtn);
        row.appendChild(actions);

        row.onmouseenter = () => {
            if (row.style.background !== '#3a3a3a') row.style.background = '#2a2a2a';
            actions.querySelectorAll('span').forEach(s => s.style.opacity = '1');
        };
        row.onmouseleave = () => {
            if (row.style.background !== '#3a3a3a') row.style.background = 'transparent';
            actions.querySelectorAll('span').forEach(s => s.style.opacity = '0');
        };

        const isSectionActive = (activeEditSection === 'file' && item.type === 'file') ||
            (activeEditSection === 'component' && item.type === 'component') ||
            (activeEditSection === 'page' && item.type === 'page') ||
            (activeEditSection === 'slide' && item.type === 'slide') ||
            (activeEditSection === 'presentation' && item.type === 'presentation');

        row.onclick = () => {
            if (isEditMode && isSectionActive) {
                const checkbox = row.querySelector('.edit-mode-checkbox');
                if (checkbox) {
                    checkbox.checked = !checkbox.checked;
                    const key = JSON.stringify({ p: item.fullPath, t: item.type });
                    if (checkbox.checked) selectedItems.add(key);
                    else selectedItems.delete(key);
                    updateBatchBar();
                }
                return;
            }

            if (item.type === 'file') {
                container.querySelectorAll('.list-item').forEach(el => {
                    el.style.background = 'transparent';
                    el.style.borderLeft = 'none';
                });
                row.style.background = '#3a3a3a';
                row.style.borderLeft = '2px solid #0d99ff';
                selectedFilePath = item.fullPath;
                selectedFolder = null;
                fileActions.style.display = "block";
                generateSelectedBtn.style.display = "block";
                convertToCodeBtn.style.display = "block";
                convertAllBtn.style.display = "none";
            }
        };

        if (isEditMode && isSectionActive) {
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'edit-mode-checkbox';
            const key = JSON.stringify({ p: item.fullPath, t: item.type });
            cb.checked = selectedItems.has(key);
            cb.onclick = (e) => {
                e.stopPropagation();
                if (cb.checked) selectedItems.add(key);
                else selectedItems.delete(key);
                updateBatchBar();
            };
            row.insertBefore(cb, nameSpan);
        }

        return row;
    }

    const sortFn = (a, b) => sortDesc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);

    topLevel.sort(sortFn).forEach(item => {
        container.appendChild(createRow(item, 12));
    });

    Object.keys(groups).sort().forEach(projName => {
        const groupContainer = document.createElement('div');
        const header = document.createElement('div');
        header.style.cssText = `padding: 8px 12px; font-size: 11px; color: #aaa; border-bottom: 1px solid #2a2a2a; cursor: pointer; display: flex; align-items: center; gap: 6px; font-weight: 600; background: #222;`;
        header.innerHTML = `<span class="arrow"
                            style="font-size: 9px; transition: transform 0.2s;">▶</span> <span>${projName}</span>`;
        const children = document.createElement('div');
        children.style.display = 'none';
        header.onclick = () => {
            const arrow = header.querySelector('.arrow');

            // Folder selection logic for "Convert All"
            if (container.id === 'file-list') {
                container.querySelectorAll('.list-item').forEach(el => {
                    el.style.background = 'transparent';
                    el.style.borderLeft = 'none';
                });
                container.querySelectorAll('[style*="background: rgb(34, 34, 34)"]').forEach(el => {
                    el.style.background = '#222';
                    el.style.borderLeft = 'none';
                });

                header.style.background = '#3a3a3a';
                header.style.borderLeft = '2px solid #6200ee';
                selectedFolder = projName;
                selectedFilePath = null;
                fileActions.style.display = "block";
                generateSelectedBtn.style.display = "none";
                convertToCodeBtn.style.display = "none";
                convertAllBtn.style.display = "block";
            }

            if (children.style.display === 'none') {
                children.style.display = 'block'; arrow.style.transform = 'rotate(90deg)';
            } else {
                children.style.display = 'none'; arrow.style.transform = 'rotate(0deg)';
            }
        };
        // Add delete button for the group (Folder Delete)
        const groupActions = document.createElement('div');
        groupActions.style.cssText = 'display: flex; gap: 4px; margin-left: auto; align-items: center;';

        const delGroupBtn = document.createElement('span');
        delGroupBtn.textContent = '×';
        delGroupBtn.style.cssText = `font-size: 11px; background: #ff3b3b; color: white; padding: 0 6px; border-radius: 4px; opacity: 0; transition: opacity 0.2s; cursor: pointer;`;
        delGroupBtn.title = "Delete Folder";

        delGroupBtn.onclick = async (e) => {
            e.stopPropagation();
            if (!confirm(`Delete folder ${projName} and all contents?`)) return;

            // Deletion Logic
            if (container.id === 'file-list') {
                // For files, projName is usually the folder name in extraction root.
                // Or it could be "Project" if files are in root of project.
                // But groups[projName] contains items.
                // If items have project=projName, then the folder is probably `projName`.
                // Let's use the project from the first item.
                const representative = groups[projName][0];
                // If the item path is "Project/Session/File.json", then project is "Project".
                // Wait, our grouping uses `item.project`.
                // If item.project is what we grouped by, we delete `tools/extraction/<item.project>`.
                // BUT, if we are in a subfolder view?
                // The current `item.project` logic in `loadFiles` sets project = parts[0].
                // So deleting `item.project` deletes the whole project folder.
                // If that's what we want? Yes, "Delete Folder".
                try {
                    const resp = await fetch('http://127.0.0.1:4000/delete', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ path: projName })
                    });
                    if (resp.ok) loadFiles();
                    else {
                        const err = await resp.json();
                        alert("Failed to delete folder: " + (err.error || "Unknown error"));
                    }
                } catch (err) { console.error(err); }

            } else {

                // COMPONENTS - Folder Delete (Server-Side)
                delGroupBtn.textContent = '...';
                const firstItem = groups[projName][0];
                const itemType = firstItem ? firstItem.type : 'component';

                try {
                    const resp = await fetch('http://127.0.0.1:4000/delete-component-folder', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ folder: projName, type: itemType })
                    });

                    if (resp.ok) {
                        loadComponents();
                    } else {
                        const err = await resp.json();
                        alert("Failed to delete folder: " + (err.error || "Unknown error"));
                        delGroupBtn.textContent = '×';
                    }
                } catch (e) {
                    console.error(e);
                    alert("Network error during folder deletion");
                    delGroupBtn.textContent = '×';
                }
            }
        };

        header.onmouseenter = () => {
            if (!isEditMode) delGroupBtn.style.opacity = '1';
        };
        header.onmouseleave = () => {
            delGroupBtn.style.opacity = '0';
        };

        groupActions.appendChild(delGroupBtn);
        header.appendChild(groupActions);

        groupContainer.appendChild(header);
        groupContainer.appendChild(children);

        groups[projName].sort(sortFn).forEach(item => {
            children.appendChild(createRow(item, 24));
        });
        container.appendChild(groupContainer);
    });
}

function startPolling() {
    statusTextSpan.textContent = "Connecting...";
    statusTextSpan.style.color = "#888";
    statusDot.className = "dot pending";

    pollInterval = setInterval(async () => {
        try {
            const response = await fetch('http://127.0.0.1:4000/poll');
            const json = await response.json();

            if (statusDot.className !== "dot active") {
                statusTextSpan.textContent = "Connected & Listening";
                statusTextSpan.style.color = "#1ed760";
                statusDot.className = "dot active";
                bridgeActiveToolsDiv.style.display = "block";
                hintTextDiv.style.display = "none";
                loadFiles();
                loadComponents();
            }

            if (json.command === 'capture') {
                const isDetailed = detailedCheckbox.checked;
                const saveVectorInJson = vectorJsonCheckbox.checked;
                parent.postMessage({
                    pluginMessage: {
                        type: 'capture-bridge', detailed: isDetailed,
                        saveVectorInJson: saveVectorInJson
                    }
                }, '*');
            }
        } catch (e) {
            if (statusDot.className !== "dot error") {
                console.warn("Bridge connection lost:", e);
                statusTextSpan.textContent = "No Server Found";
                statusTextSpan.style.color = "#ff4d4d";
                statusDot.className = "dot error";
                // We DON'T hide the tools immediately to avoid flickering
                // We ONLY clear the lists if the disconnect is fresh or if they were already empty
                if (fileList.innerHTML.includes("Loading")) {
                    fileList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see files</div>`;
                    componentList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see components</div>`;
                    pageList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see pages</div>`;
                    slideList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see slides</div>`;
                    presentationList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see presentations</div>`;
                    const flowList = document.getElementById('flow-list');
                    if (flowList) flowList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see flows</div>`;
                    bridgeActiveToolsDiv.style.display = "none";
                    hintTextDiv.style.display = "block";
                }
            }
        }
    }, 1000);
}

function stopPolling() {
    if (pollInterval) clearInterval(pollInterval);
    pollInterval = null;
    statusTextSpan.textContent = "Disconnected";
    statusTextSpan.style.color = "#888";
    statusDot.className = "dot";
    bridgeActiveToolsDiv.style.display = "none";
    hintTextDiv.style.display = "block";
    fileList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see files</div>`;
    componentList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see components</div>`;
    pageList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see pages</div>`;
    slideList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see slides</div>`;
    presentationList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see presentations</div>`;
    const flowList = document.getElementById('flow-list');
    if (flowList) flowList.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 11px; color: #555;">Connect to server to see flows</div>`;
    fileActions.style.display = "none";
}

window.onmessage = async (event) => {
    const msg = event.data.pluginMessage;
    console.log("Received message from plugin:", msg.type);


    if (msg.type === 'log') {
        console.log(`[Plugin Remote] ${msg.message}`);
    }

    if (msg.type === 'capture-status') {
        if (statusDot.className === "dot active") {
            statusTextSpan.textContent = msg.message;
        }
        if (syncBtn.textContent !== "Captured!" && syncBtn.textContent !== "Error!") {
            syncBtn.textContent = msg.message;
        }
    }

    if (msg.type === 'capture-bridge-result-packet') {
        try {
            if (!msg.packet) {
                console.log(`[UI] Packet ${msg.count}/${msg.total} skipped (empty data)`);
            } else {
                console.log(`[UI] Saving packet ${msg.count}/${msg.total}: ${msg.packet.name}`);

                const processAuto = document.getElementById('process-checkbox').checked ||
                    document.getElementById('procedural-gen-checkbox-capture').checked;
                const rawProjectName = msg.projectName || "Default";
                const sanitaryProjectName = rawProjectName.replace(/[^a-z0-9]/gi, '_');

                // Use user defined folder or default to 'captures'
                const folderInput = document.getElementById('capture-folder-input');
                const userFolder = folderInput ? folderInput.value.trim() : "";
                const batchFolder = userFolder || "captures";
                lastCapturedProject = batchFolder;

                const isProcedural = document.getElementById('procedural-gen-checkbox-capture').checked;
                const isSimplified = document.getElementById('process-checkbox').checked;

                activeSaves++;
                fetch('http://127.0.0.1:4000/save-packet', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        projectName: sanitaryProjectName,
                        name: msg.packet.name,
                        data: msg.packet.data,
                        assets: msg.packet.assets,
                        procedural: isProcedural,
                        simplified: isSimplified,
                        batchFolder: batchFolder,
                        options: {
                            refactor: !generatorOnlyCheckboxCapture.checked,
                            compact: !generatorOnlyCheckboxCapture.checked,
                            skipGeneration: processAuto // Postpone generation until batch is done
                        }
                    })
                }).finally(() => {
                    activeSaves--;
                });
            }

            if (msg.isLast) {
                console.log(`[UI] Last packet received.`);
                // The final completion logic is now in capture-finished to separate data capture from
                // processing
            }
        } catch (e) {
            console.error("Failed to process packet", e);
        }
    }

    if (msg.type === 'capture-png-result-packet') {
        try {
            console.log(`[UI] Processing PNG packet: ${msg.packet.name}`);
            const projectName = msg.projectName || "Default";

            const response = await fetch('http://127.0.0.1:4000/save-png', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    projectName: projectName,
                    packets: [msg.packet]
                })
            });

            if (msg.isLast) {
                showFeedback(capturePngBtn, "Capture PNG", "Saved All!");
            }
        } catch (e) {
            console.error("Failed to save PNG packet", e);
        }
    }

    if (msg.type === 'capture-finished') {
        console.log("[UI] Capture operation finished signal received");
        const processAuto = document.getElementById('process-checkbox').checked ||
            document.getElementById('procedural-gen-checkbox-capture').checked;

        if (processAuto) {
            // Wait for any pending saves to complete
            const checkSaves = async () => {
                if (activeSaves > 0) {
                    console.log(`[UI] Waiting for ${activeSaves} pending saves...`);
                    setTimeout(checkSaves, 100);
                    return;
                }

                try {
                    const isProcedural = document.getElementById('procedural-gen-checkbox-capture').checked;
                    // 1. Get Folder Name AGAIN (since batchFolder var is local to other handler)
                    const folderInput = document.getElementById('capture-folder-input');
                    const userFolder = folderInput ? folderInput.value.trim() : "";
                    const batchFolder = userFolder || "captures";

                    syncBtn.textContent = "Processing batch in " + batchFolder + "...";

                    // If we used a temporary batch folder, target that for generation and cleanup
                    // We check if there are multiple saves or if we set lastCapturedProject to to_be_converted
                    // Wait, lastCapturedProject is just the sanitized projectName.
                    // Let's check how many were captured. We can't see msg.total here.
                    // But if to_be_converted exists, it means we used it.
                    // Actually, let's just use a more robust way to track if it was a batch.
                    const isBatch = lastCapturedProject === "to_be_converted" || true; // Fallback to check

                    await fetch('http://127.0.0.1:4000/generate-folder-to-code', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            folder: batchFolder,
                            project: (msg.projectName || "Default").replace(/[^a-z0-9]/gi, '_'),
                            simplified: true,
                            procedural: isProcedural,
                            refactor: !generatorOnlyCheckboxCapture.checked,
                            compact: !generatorOnlyCheckboxCapture.checked,
                            cleanup: false // KEEP captures for debugging
                        })
                    });

                    showFeedback(syncBtn, "Capture Sync (to Disk)", "Captured & Processed!");
                } catch (e) {
                    console.error("Batch processing failed", e);
                    showFeedback(syncBtn, "Capture Sync (to Disk)", "Save Complete");
                }

                if (statusDot.className === "dot active") {
                    statusTextSpan.textContent = "Connected & Listening";
                }
                loadFiles();
                loadComponents();
            };

            checkSaves();
        } else {
            showFeedback(syncBtn, "Capture Sync (to Disk)", "Captured!");
            if (statusDot.className === "dot active") {
                statusTextSpan.textContent = "Connected & Listening";
            }
            loadFiles();
            loadComponents();
        }
    }

    if (msg.type === 'capture-preview-result-packet') {
        try {
            const packet = msg.packet;
            const isExact = exactRefactorCheckbox.checked;
            const doCompact = !isExact;

            console.log(`[Preview] Processing packet: ${packet.name}. Compact: ${doCompact}`);

            // INTERCEPT FOR CLIPBOARD CAPTURE
            if (isClipboardCapture) {
                console.log("[Clipboard] Using /generate-clipboard endpoint");
                isClipboardCapture = false; // Reset flag

                const isProcedural = document.getElementById('procedural-gen-checkbox-capture').checked;
                const response = await fetch('http://127.0.0.1:4000/generate-clipboard', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        packet: packet,
                        options: {
                            refactor: processCheckbox.checked,
                            compact: processCheckbox.checked ? !exactRefactorCheckbox.checked : false,
                            procedural: isProcedural
                        }
                    })
                });

                if (!response.ok) throw new Error(await response.text());
                const result = await response.json();

                if (result.status === 'ok' && result.code) {
                    // Create temporary textarea to copy
                    const el = document.createElement('textarea');
                    el.value = result.code;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);

                    showFeedback(captureClipboardBtn, "Capture to Clipboard", "Copied!");
                    console.log("[Clipboard] Code copied to clipboard.");
                } else {
                    throw new Error(result.error || "Unknown error");
                }
                return;
            }

            const response = await fetch('http://127.0.0.1:4000/generate-code-preview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    packet: packet,
                    options: {
                        refactor: true,
                        compact: doCompact,
                        procedural: proceduralGenCheckboxPreview.checked
                    }
                })
            });

            if (!response.ok) throw new Error(await response.text());

            const result = await response.json();
            if (result.status === 'ok' && result.code) {
                codePreviewArea.value = result.code;
                codePreviewArea.style.display = "block";
                codePreviewArea.select();
                document.execCommand('copy');
                showFeedback(previewCodeBtn, "📋 Copy Compact Code", "Copied to Clipboard!");
            } else {
                throw new Error(result.error || "Unknown error");
            }

        } catch (e) {
            console.error("Preview failed:", e);
            showFeedback(previewCodeBtn, "📋 Copy Compact Code", "Error!");
        } finally {
            previewCodeBtn.disabled = false;
            if (previewCodeBtn.textContent === "Generating...") {
                previewCodeBtn.innerHTML = '<span style="font-size: 14px;">📋</span> Copy Compact Code';
            }
        }
    }

    if (msg.type === 'capture-download') {
        const jsonStr = JSON.stringify(msg.data, null, 2);
        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = msg.fileName;
        a.click();
        URL.revokeObjectURL(url);
    }

    if (msg.type === 'capture-error') {
        // Ensure button also resets on capture error (e.g. no selection)
        if (previewCodeBtn.textContent === "Generating...") {
            previewCodeBtn.disabled = false;
            previewCodeBtn.innerHTML = '<span style="font-size: 14px;">📋</span> Copy Compact Code';
            codePreviewArea.value = "No selection";
        }

        console.error("Received capture error:", msg.message);
        alert(msg.message);
        syncBtn.textContent = "Capture Sync (to Disk)";
        syncBtn.style.backgroundColor = "";
        syncBtn.style.boxShadow = "";
    }
}

setTimeout(() => connectBtn.click(), 500);
