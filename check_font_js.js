
const opentype = require('opentype.js');
const fs = require('fs');

async function checkFont(path) {
    try {
        const font = await opentype.load(path);
        console.log(`File: ${path}`);
        console.log('Font Family:', font.names.fontFamily.en);
        console.log('Font Subfamily:', font.names.fontSubfamily.en);
        console.log('PostScript Name:', font.names.postScriptName.en);
        console.log('Preferred Family:', font.names.preferredFamily ? font.names.preferredFamily.en : 'N/A');
        console.log('Preferred Subfamily:', font.names.preferredSubfamily ? font.names.preferredSubfamily.en : 'N/A');
    } catch (err) {
        console.error(`Error loading font ${path}:`, err);
    }
}

const args = process.argv.slice(2);
if (args.length > 0) {
    checkFont(args[0]);
}
