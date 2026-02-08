# PPT Extractor Notes

This document explains the current PowerPoint export path and the text-fidelity hardening model.

## Export Flow

1. UI (`/Users/alexcalcan/Documents/Apps/FigmaDesigner/ui.html`) sends:
   - `type: "export-ppt-from-selection"`
   - `fidelity`, `rasterScale`, `compositionFallback`
   - `textFidelityMode`: `smart_hybrid | always_editable | always_raster`
   - `platformProfile`: `cross_platform | mac_365 | win_365`
2. Plugin (`/Users/alexcalcan/Documents/Apps/FigmaDesigner/code.ts`) validates defaults and calls:
   - `PPTExtractor.extract(slideFrame, options)`
3. Extractor (`/Users/alexcalcan/Documents/Apps/FigmaDesigner/presentation_logic/PPTExtractor.ts`) traverses visible nodes and serializes:
   - editable text/shape elements where possible
   - rasterized elements for unsupported or high-risk fidelity cases
4. UI receives `type: "export-ppt-data"` and uses PptxGenJS to render each element into `.pptx`.

## Text Fidelity Hardening

### Added text metadata

`PPTElement` now includes:

- `textBoxX/Y/W/H` (frame-box geometry)
- `fontFamily`, `fontStyle`, `fontWeight`
- `letterSpacingPx`, `lineHeightPx`, `lineHeightPercent`
- `textAutoResize`, `paragraphSpacing`
- `textExportMode`, `rasterReason`
- `sourceNodeId`, `sourceNodeName`

### Smart-hybrid raster decisions

When `textFidelityMode` is `smart_hybrid` and `fidelity` is `balanced`, text nodes are rasterized if they are likely to drift in PowerPoint:

- mixed font/fill styles
- non-solid text fill
- visible effects, non-default blend mode, rotation
- fixed-height text with non-top vertical alignment
- very large display text
- font availability risk for the selected `platformProfile`

`always_raster` forces text rasterization.  
`always_editable` keeps text editable in the text pass (other non-text flatten rules still apply).

### Geometry handling

Editable text uses text frame geometry (`absoluteTransform + width/height`) to avoid glyph-bounds drift.

### Writer behavior

In `ui.html`:

- `textExportMode: "raster"` is rendered via `slide.addImage(...)`
- editable text is rendered via `slide.addText(...)` using text box coordinates
- font face resolution prefers explicit face, then `family + style`, then weight-derived fallback

## Legacy Empty Export Fix (Retained)

The earlier empty-export issue was fixed in `code.ts` by resolving registry keys from class names and path-like names before lookup, preventing silent empty payloads.
