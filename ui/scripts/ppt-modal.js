        // --- PPT Export Modal Logic ---
        let pendingPptPayload = null;
        let pendingPptGenerator = null;
        let pendingPptDocName = "Presentation";
        let pendingPptTriggerBtnId = "build-ppt-btn";
        let activePptExportBtn = null;
        let activePptExportBtnOriginalText = "";

        function setPptTriggerButton(buttonId) {
            pendingPptTriggerBtnId = buttonId || "build-ppt-btn";
        }

        function resetActivePptExportButton() {
            if (activePptExportBtn) {
                activePptExportBtn.disabled = false;
                if (activePptExportBtnOriginalText) {
                    activePptExportBtn.textContent = activePptExportBtnOriginalText;
                }
            }
            activePptExportBtn = null;
            activePptExportBtnOriginalText = "";
        }

        function showPptExport(payload, pptInstance, docName) {
            pendingPptPayload = payload;
            pendingPptGenerator = pptInstance;
            pendingPptDocName = docName || "Presentation";

            const triggerBtn = document.getElementById(pendingPptTriggerBtnId) || document.getElementById('build-ppt-btn');
            if (triggerBtn) {
                activePptExportBtn = triggerBtn;
            }
            if (activePptExportBtn && !activePptExportBtnOriginalText) {
                activePptExportBtnOriginalText = activePptExportBtn.textContent;
            }

            // Try to use System Dialog first
            useSystemDialog(payload, pptInstance);
        }

        async function useSystemDialog(payload, pptInstance) {
            if (activePptExportBtn) {
                activePptExportBtn.disabled = true;
                activePptExportBtn.textContent = "Selecting Path...";
            }

            try {
                // DEBUG: Check payload
                console.log("[UI] Export Payload:", payload);
                console.log("[UI] Payload Length:", payload.length);
                if (payload.length > 0) console.log("[UI] First Name:", payload[0].presentationName);

                // Use first presentation name if available, otherwise docName
                let defaultName = (payload && payload.length > 0 && payload[0].presentationName)
                    ? payload[0].presentationName
                    : (pendingPptDocName || "Presentation");

                // Keep underscores as per user request ("name of the .ts file")
                // defaultName = defaultName.replace(/_/g, ' ');

                // Sanitization (allow underscores, hyphens, alphanumeric)
                defaultName = defaultName.replace(/[^\w\s-\.]/g, ''); // Added dot for safety but usually extension added later

                if (!defaultName.endsWith('.pptx')) defaultName += '.pptx';

                // 1. Ask Bridge to open System Save Dialog
                const pathResponse = await fetch('http://127.0.0.1:3001/select-save-path', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ defaultName: defaultName })
                });

                if (!pathResponse.ok) {
                    // Fallback to Modal if system dialog fails (e.g. not on Mac or error)
                    console.warn("System dialog failed, falling back to modal.");
                    showPptModal(payload, pptInstance);
                    return;
                }

                const pathResult = await pathResponse.json();

                if (pathResult.cancelled) {
                    console.log("User cancelled save dialog.");
                    return;
                }

                if (pathResult.path) {
                    if (activePptExportBtn) {
                        activePptExportBtn.textContent = "Exporting...";
                    }
                    // 2. Generate and Save to the selected path
                    const base64Ctx = await pptInstance.write('base64');

                    const saveResponse = await fetch('http://127.0.0.1:3001/save-ppt', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            absolutePath: pathResult.path,
                            data: base64Ctx
                        })
                    });

                    const saveResult = await saveResponse.json();
                    if (saveResponse.ok) {
                        alert(`PPT Saved Successfully to:\n${pathResult.path}`);
                    } else {
                        throw new Error(saveResult.error || "Save failed");
                    }

                } else {
                    // Should not happen if not cancelled
                    throw new Error("No path returned");
                }

            } catch (err) {
                console.error("System Export Failed:", err);
                // Fallback to modal in case of error
                showPptModal(payload, pptInstance);
            } finally {
                resetActivePptExportButton();
            }
        }

        // Keep modal as fallback
        function showPptModal(payload, pptInstance) {
            pendingPptPayload = payload;
            pendingPptGenerator = pptInstance;

            const modal = document.getElementById('ppt-export-modal');
            const fileNameInput = document.getElementById('ppt-filename-input');
            const pathInput = document.getElementById('ppt-path-input');

            // Set default filename
            const defaultName = payload.length === 1
                ? payload[0].presentationName
                : (pendingPptDocName || `Export_${new Date().getTime()}`);
            fileNameInput.value = defaultName;

            modal.style.display = 'flex';
            fileNameInput.focus();
            fileNameInput.select();
        }

        function closePptModal() {
            document.getElementById('ppt-export-modal').style.display = 'none';
            pendingPptPayload = null;
            pendingPptGenerator = null;
            pendingPptDocName = "Presentation";
            resetActivePptExportButton();
        }

        async function confirmPptExport() {
            const fileNameInput = document.getElementById('ppt-filename-input');
            const pathInput = document.getElementById('ppt-path-input');
            let fileName = fileNameInput.value.trim();
            let customPath = pathInput.value.trim();

            if (!fileName) {
                alert("Please enter a filename.");
                return;
            }

            if (!fileName.endsWith('.pptx')) fileName += '.pptx';

            const confirmBtn = document.getElementById('ppt-confirm-btn');
            const originalText = confirmBtn.textContent;
            confirmBtn.disabled = true;
            confirmBtn.textContent = "Saving...";

            try {
                // Generate Base64
                const base64Ctx = await pendingPptGenerator.write('base64');

                // Send to Bridge
                const response = await fetch('http://127.0.0.1:3001/save-ppt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fileName: fileName,
                        data: base64Ctx,
                        customPath: customPath
                    })
                });

                const result = await response.json();

                if (response.ok) {
                    alert(`PPT Saved Successfully to:\n${result.path}`);
                    closePptModal();
                } else {
                    throw new Error(result.error || "Bridge save failed");
                }
            } catch (err) {
                console.error("PPT Save Failed:", err);
                alert("Failed to save PPT: " + err.message);
                confirmBtn.disabled = false;
                confirmBtn.textContent = originalText;
            }
        }

        // --- PPT Import Logic ---
        const importPptBtn = document.getElementById('import-ppt-btn');
        const pptFileInput = document.getElementById('ppt-file-input');

        if (importPptBtn && pptFileInput) {
            importPptBtn.addEventListener('click', () => {
                pptFileInput.value = ''; // Reset
                pptFileInput.click();
            });

            pptFileInput.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (!file) return;

                if (!file.name.toLowerCase().endsWith('.pptx')) {
                    alert("Please select a valid .pptx file.");
                    return;
                }

                const originalText = importPptBtn.textContent;
                importPptBtn.disabled = true;
                importPptBtn.textContent = "Importing...";

                try {
                    const reader = new FileReader();

                    reader.onload = async () => {
                        const base64Data = reader.result.split(',')[1]; // Remove data URL prefix

                        try {
                            const response = await fetch('http://127.0.0.1:3001/import-ppt', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    fileName: file.name,
                                    data: base64Data
                                })
                            });

                            const result = await response.json();

                            if (response.ok) {
                                alert(`PPT Imported Successfully!\n\nDeck: ${result.deckName}\nSlides: ${result.slideCount}\nKey: ${result.importKey}\n\nCheck 'slides/${result.importKey}' folder.`);
                                // Refresh lists to show new slides
                                document.getElementById('refresh-slides-btn')?.click();
                                document.getElementById('refresh-presentations-btn')?.click();
                            } else {
                                throw new Error(result.error || "Import failed on server.");
                            }
                        } catch (err) {
                            console.error("PPT Import Network Error:", err);
                            alert("Failed to send PPT to Bridge: " + err.message);
                        } finally {
                            importPptBtn.disabled = false;
                            importPptBtn.textContent = originalText;
                        }
                    };

                    reader.onerror = () => {
                        alert("Failed to read file.");
                        importPptBtn.disabled = false;
                        importPptBtn.textContent = originalText;
                    };

                    reader.readAsDataURL(file);

                } catch (err) {
                    console.error("PPT Import Error:", err);
                    alert("An unexpected error occurred: " + err.message);
                    importPptBtn.disabled = false;
                    importPptBtn.textContent = originalText;
                }
            });
        }
