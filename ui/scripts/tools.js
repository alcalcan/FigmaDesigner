        // --- Tools Section Logic ---
        document.getElementById('tool-select-instances').onclick = () => {
            parent.postMessage({ pluginMessage: { type: 'tools-select-instances' } }, '*');
        };

        document.getElementById('tool-organize-grid').onclick = () => {
            parent.postMessage({ pluginMessage: { type: 'tools-organize-grid' } }, '*');
        };
