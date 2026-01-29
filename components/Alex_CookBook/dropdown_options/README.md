# Dropdown Options

A menu component containing a list of options with selectable items (checkboxes or radio buttons).

## Features

- **Flexible Selection**: Can display items as `checkbox` (multi-select) or `radio_button` (single-select style).
- **Auto-layout**: Vertically stacked items with consistent spacing.
- **Visual Design**: Includes a border, rounded corners, and a drop shadow for a premium feel.

## Interface

```typescript
interface DropdownProps extends ComponentProps {
    options?: { name: string, selected: boolean }[]; // List of options
    selectionType?: "checkbox" | "radio";           // Style of indicators
}
```

## Implementation Example

```typescript
const dropdown = new dropdown_options();
const menu = await dropdown.create({
    selectionType: "radio",
    options: [
        { name: "Highest Rated", selected: true },
        { name: "Most Recent", selected: false },
        { name: "Price: Low to High", selected: false }
    ]
});
```

## Component File
[dropdown_options.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/dropdown_options/dropdown_options.ts)
