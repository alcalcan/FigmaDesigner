# UEFA Cards 4x

An auto-generated composite component that displays a grid of 4 UEFA-themed content cards.

## Features

- **Rich Content Display**: Each card features an image, title, description, author, and a 5-star rating system.
- **Interactive Indicators**: Supports a "Play Icon" overlay for video-based content.
- **Shadows & Depth**: Each card has a subtle drop shadow and white background to stand out.
- **Auto-layout Grid**: Cards are arranged horizontally with consistent 24px spacing.
- **Responsive-ready Content**: Descriptive text and titles use auto-resize to fit their contents.

## Interface

```typescript
interface ComponentProps {
    x?: number;
    y?: number;
}
```

## Implementation Example

```typescript
const cardsGrid = new uefa_cards_4x();
const myGrid = await cardsGrid.create({
    // Props here
});
```

## Component File
[uefa_cards_4x.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/uefa_cards_4x/uefa_cards_4x.ts)
