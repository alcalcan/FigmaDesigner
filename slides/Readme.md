# Slides Directory

This directory contains components that function as "Slides" for the Figma plugin.
These are ported from the Python `PresStyle` library to allow native generation within Figma.

## Structure

*   `theme.ts`: Contains the ported style constants (Colors, Fonts, Layout) from `PresStyle/styles/UEFA/theme.py`. Emu units have been converted to Pixels.
*   `pageRaster.ts`: Utility to rasterize a generated page/frame and contain-fit it into a slide viewport while preserving aspect ratio.
*   `Slide_*/`: Subdirectories for each specific slide type.

## PresStyle Source Path

The local Python source used by these slides lives at:
`/Users/alexcalcan/Documents/Apps/PresStyle`

UEFA object modules are in:
`/Users/alexcalcan/Documents/Apps/PresStyle/styles/UEFA/objects`

## Slide Object Components

To mirror PresStyle objects in Figma, reusable slide objects are implemented in:
`components/Slide_Objects/`

These components are used by:
`slides/UEFA_Light_extra/Slide_Object_System_extra.ts`

Included objects:
- `bar_chart`
- `line_chart`
- `area_chart`
- `pie_chart`
- `donut_chart`
- `radar_chart`
- `stat_card`
- `timeline`
- `stacked_timeline`
- `image`
- `text`

## Lucide Icons

This project includes a collection of curated [Lucide](https://lucide.dev/) icons, ported from SVG assets to native Figma components.

### Implementation
- **Location**: `components/lucide_icons/`
- **Structure**: Each icon is a class extending `BaseComponent`, wrapping its SVG content as a `VECTOR` node.
- **Style Propagation**: The `BaseComponent` handles drawing the SVG paths and propagating styles (stroke color, weight, caps, joins) to all child paths.

### Management
- **Previewing**: Use the `Lucide_IconShowcase` page (`pages/lucide_icons/Lucide_IconShowcase.ts`) to view all available icons.
- **Adding Icons**: Use the script in `tools/GenerateLucideIcons.ts` to automatically generate new icon components from Lucide's raw SVG repository.

## Available Slides

### Slide_Title
A standard title slide.
- **Source**: `PresStyle/styles/UEFA/title_slide.py`
- **Usage**:
    - **Title**: The main title of the presentation.
    - **Background**: Full screen image (placeholder currently).

### Slide_Body
Standard slide with a title and a large body text area.
- **Usage**: General content, descriptions.

## Presentations

A **Presentation** is a meta-container (transparent frame) with horizontal layout and generous padding, used to organize and display a sequence of slides. Presentation components are found in the `/presentations` root directory.

### Slide_Bullets
Standard slide with a title and a bulleted list.
- **Usage**: Lists, key takeaways.

### Slide_Body_Bullets
Slide with title, introductory body text, and a bulleted list.
- **Usage**: Detailed explanations followed by points.

### Slide_2Body
Two-column slide with a central divider.
- **Usage**: Comparison, parallel points.

### Slide_3Body
Three-column slide for dense information layout.
- **Usage**: Summary tables, 3-way comparisons.

## Development

To add new slides:
1.  Study the Python implementation in `PresStyle/styles/UEFA`.
2.  Create a new directory implementation here (e.g., `Slide_Content_Simple`).
3.  Use `theme.ts` for all layout coordinates and colors to ensure consistency.
