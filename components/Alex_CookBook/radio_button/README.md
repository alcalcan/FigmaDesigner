# Radio Button

A standard radio button component with a label, used for single-selection scenarios.

## Features

- **Interactive States**: Supports `checked` (solid fill with inner dot) and `hoverState` (background highlight).
- **Flexible Layout**: Can hug contents or stretch to a fixed width.
- **Visual Consistency**: Consistent styling with the `checkbox` component.

## Interface

```typescript
interface RadioButtonProps extends ComponentProps {
    characterOverride?: string; // Label text
    checked?: boolean;          // Active state (shows dot)
    hoverState?: boolean;       // Hover background state
    hugContents?: boolean;      // If TRUE, resizes to fit text
    fills?: Paint[];            // Custom background fill
}
```

## Implementation Example

```typescript
const rb = new radio_button();
const myRadio = await rb.create({
    characterOverride: "Option A",
    checked: true,
    hugContents: true
});
```

## Component File
[radio_button.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/radio_button/radio_button.ts)
