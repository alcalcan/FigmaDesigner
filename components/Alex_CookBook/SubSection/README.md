# SubSection

A layout component that displays a list of selectable items organized into columns, featuring a header with a count badge and an expand/collapse toggle.

## Features

- **Header**: Includes a subject title, a counts badge (Subjects), and an expand button.
- **Automatic Layout**: Organized items into a 2-column grid.
- **Interactive States**: Uses the `checkbox` component for items, supporting selection and hover states.
- **Shadows**: Subtle drop shadow for depth.

## Interface

```typescript
interface ComponentProps {
    x?: number;
    y?: number;
}
```

## Implementation Example

```typescript
const subSection = new SubSection();
const group = await subSection.create({
    // Props here
});
```

## Component File
[SubSection.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/SubSection/SubSection.ts)
