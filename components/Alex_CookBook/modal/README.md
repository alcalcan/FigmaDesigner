# Modal

A versatile modal component that supports standard/unified designs, and complex separated header/body/footer designs.

## Props

- `title` (string): Required modal title.
- `description` (string): Optional sub-title or description text.
- `variant` ("unified" | "unified_with_dividers" | "separated"): 
  - `unified`: A single solid background.
  - `unified_with_dividers`: A single solid background, but separated by subtle 1px divider lines.
  - `separated`: Distinct sections with potential background and border differences.
- `showCloseIcon` (boolean): Default `true`. To optionally hide the `X` button.
- `width` (number): Modal max-width (default `480`).
- `bodyPadding` ("standard" | "none"): Default `"standard"`. Set to `"none"` if injecting edge-to-edge images/charts.
- `primaryCtaText` (string): Shows a primary full-width CTA in the footer if provided.
- `secondaryCtaText` (string): Shows an outlined full-width CTA in the footer if provided.
- `bodyContent` (NodeDefinition[]): List of nodes representing the inner contents of the modal.

## Usage
```typescript
{
    type: "COMPONENT",
    component: modal,
    props: {
        title: "Confirm Deletion",
        description: "Are you sure you want to delete this specific log?",
        variant: "separated",
        primaryCtaText: "Delete",
        secondaryCtaText: "Cancel",
        bodyContent: [
           // Nodes here
        ]
    }
}
```
