# Checkbox

A standard checkbox component with a label, supporting checked and hover states.

## Features

- **Interactive States**: Supports `checked` (solid fill with checkmark) and `hoverState` (background highlight).
- **Flexible Layout**: Can hug contents or stretch to a fixed width.
- **Customizable**: Override labels and background colors.

## Interface

```typescript
interface CheckboxProps extends ComponentProps {
    characterOverride?: string; // Label text
    checked?: boolean;          // Active state
    hoverState?: boolean;       // Hover background state
    hugContents?: boolean;      // If TRUE, resizes to fit text
    fills?: Paint[];            // Custom background fill
}
```

## Implementation Example

```typescript
const cb = new checkbox();
const myCheckbox = await cb.create({
    characterOverride: "Accept Terms & Conditions",
    checked: true,
    hugContents: true
});
```

## Component File
[checkbox.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/checkbox/checkbox.ts)
