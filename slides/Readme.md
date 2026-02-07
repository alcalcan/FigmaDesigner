
# Slides Directory

This directory contains components that function as "Slides" for the Figma plugin.
These are ported from the Python `PresStyle` library to allow native generation within Figma.

## Structure

*   `theme.ts`: Contains the ported style constants (Colors, Fonts, Layout) from `PresStyle/styles/UEFA/theme.py`. Emu units have been converted to Pixels.
*   `Slide_*/`: Subdirectories for each specific slide type.

## Available Slides

### Slide_Title
A standard title slide.
- **Source**: `PresStyle/styles/UEFA/title_slide.py`
- **Usage**:
    - **Title**: The main title of the presentation.
    - **Background**: Full screen image (placeholder currently).

## Development

To add new slides:
1.  Study the Python implementation in `PresStyle/styles/UEFA`.
2.  Create a new directory implementation here (e.g., `Slide_Content_Simple`).
3.  Use `theme.ts` for all layout coordinates and colors to ensure consistency.
