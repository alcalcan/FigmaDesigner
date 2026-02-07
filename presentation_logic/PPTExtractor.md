# PPT Extractor and Empty Export Fix

This document explains the PowerPoint export path and the fix for empty `.pptx` exports.

## Export Flow

1. UI selection (`ui.html`) sends:
   - `type: "export-ppt"`
   - `presentations: [...]`
2. Plugin handler (`code.ts`) receives the message and resolves each selected presentation to a registry class.
3. The plugin creates a temporary presentation node, iterates slide children, and calls:
   - `PPTExtractor.extract(slideNode)`
4. `PPTExtractor` traverses visible nodes and serializes text/image/shape elements.
5. UI receives `type: "export-ppt-data"` and uses PptxGenJS to write the `.pptx`.

## Root Cause of Empty PPT

The UI batch selection stores `item.fullPath` for presentations (example: `UEFA_template/UEFA_Light_Presentation`).

Before the fix, the plugin export handler looked up `ComponentRegistry[name]` directly. Registry keys are class names (example: `UEFA_Light_Presentation`), so path-form names were not resolved. This produced missing components and an effectively empty export payload.

## Fix Implemented

In `code.ts`:

- Added `resolveRegistryKey(rawName)` to support:
  - class name
  - path (`folder/ClassName`)
  - windows path separators
  - optional `.ts` suffix
  - aliased keys (`Class_project`)
- Updated export handler to use `resolveRegistryKey` before class lookup.
- Added explicit fallback slide when a presentation cannot be resolved, so failure is visible in the exported file instead of silently empty output.

## Files Involved

- `/Users/alexcalcan/Documents/Apps/FigmaDesigner/code.ts`
- `/Users/alexcalcan/Documents/Apps/FigmaDesigner/presentation_logic/PPTExtractor.ts`
- `/Users/alexcalcan/Documents/Apps/FigmaDesigner/ui.html`
- `/Users/alexcalcan/Documents/Apps/FigmaDesigner/presentation_logic/PPTExtractor.md`

## Notes

`PPTExtractor.ts` is responsible for element extraction once a valid slide node is provided. The empty export issue addressed here was upstream in presentation identifier resolution before extraction.
