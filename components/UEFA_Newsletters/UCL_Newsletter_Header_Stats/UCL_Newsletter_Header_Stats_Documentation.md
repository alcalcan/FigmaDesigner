# UCL Newsletter Header Stats Documentation

This document explains the architecture and composition of the `UCL_Newsletter_Header_Stats` component, and provides a guide on how to extend or modify it.

## Component Architecture

To maintain performance, code cleanliness, and reusability, `UCL_Newsletter_Header_Stats` is modularized into several independent components. Rather than one massive file, the main component acts as an orchestrator, strictly defining the layout and order of rendering.

### The Composites

1. **`UCLBackground`**: 
   - Handles the absolute lowest layer (`z-index` in Figma terms). 
   - Contains the blue gradient base, the glowing purple `Ellipse2300` layer, and the wave textures (`UCL_2024-27_LightWaveTexture_RGB_Transparent_V3_5k`).

2. **`HeaderFooter`**:
   - Contains the bottom decorative elements (`deco_comps`) and the gradient opacity maps that fade out the bottom of the card smoothly. Ensure this renders immediately *above* the background, but *below* the stats and text.

3. **`TopBar`**:
   - Encapsulates the top section containing the Sponsor logos, separator lines, and the team Crests.

4. **`StatsButton`**:
   - Houses the interactive "See all stats" button at the bottom of the card.

5. **`StatsTable` & `StatRow` & `Tail`**:
   - The core data grid of the component.
   - `StatsTable`: Holds the static labels, gradient dividers, and the date/time header ("Time_Match"). It iterates over the data to inject rows.
   - `StatRow`: Represents a single line item of data (e.g., "Goals", "Won"). Maps the numbers to visual percentage bars.
   - `Tail`: A small reused SVG aesthetic element attached to the ends of the percentage bars.

## Modifying the Component

Because the component is heavily modularized, updating a specific visual element requires finding the correct file rather than searching through thousands of lines in the main file:

- **Need to change the background gradients?** Go to `UCLBackground.ts`.
- **Need to change the fonts or colors of the "See all stats" button?** Go to `StatsButton.ts`.
- **Need to adjust the padding of the statistics data rows?** Go to `StatsTable.ts` or `StatRow.ts`.

### Rendering Order (Z-Index equivalent)

In Figma Plugin generation, the order of objects in the `children` array determines what renders on top. Elements at the *end* of the array appear on *top* of elements at the beginning.

The strict `children` array structure in `UCL_Newsletter_Header_Stats.ts` is:
1. `UCLBackground` (Back)
2. `HeaderFooter` (Back-Middle, placed here so shadows and opacities do not eclipse the text)
3. `TopBar` 
4. `UCL SEASON COMPARED` (Title Text)
5. `StatsButton`
6. `StatsTable` (Front)

## Example: Creating and Adding a New Sub-Component

If you wanted to add a "Footer Disclaimer" component:

1. Create a `Disclaimer.ts` file in this directory extending `BaseComponent`:
   ```typescript
   import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

   export class Disclaimer extends BaseComponent {
     async create(props: ComponentProps): Promise<SceneNode> {
       const structure: NodeDefinition = {
         "type": "TEXT",
         "name": "Disclaimer",
         "props": {
            "characters": "Stats provided by UEFA",
            // ... text properties ...
         }
       };
       return this.renderDefinition(structure);
     }
   }
   ```

2. Open `UCL_Newsletter_Header_Stats.ts`.
3. Import the new component: `import { Disclaimer } from "./Disclaimer";`
4. Add it to the `children` array of the main composition, depending on where you want it to render visually (e.g., usually at the end so it renders above the background).
