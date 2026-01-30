# Sidebar

A complex, feature-rich sidebar component that integrates multiple UI elements like search, toggles, and expandable category filters.

## Features

- **Global Controls**: Includes a "Favourites" toggle to control global visibility states.
- **Search Integration**: Contains an `input_field` specifically tailored for filtering content (e.g., "1 result").
- **Categorized Filters**: Uses `accordion` components to group filters like "SUBJECT", "UEFA INITIATIVE", and "ORGANISATION".
- **Nested Interactivity**: The "UEFA INITIATIVE" section includes a list of checkboxes for multi-selection.
- **Visual Hierarchy**: Uses separators (lines) and consistent typography for a clean, professional look.

## Interface

```typescript
interface SidebarProps extends ComponentProps {
    favouriteToggleIsOn?: boolean; // Initial state of the favourites toggle
    x?: number;
    y?: number;
}
```

## Implementation Example

```typescript
const sb = new sidebar_filtering();
const navigation = await sb.create({});
```
