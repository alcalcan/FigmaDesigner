# Recipe Card

A premium card component designed for displaying recipe previews with high-quality visual hierarchy.

## Features

- **Rich Content**: Displays category, title, description, time, and difficulty level.
- **Visual Design**: Rounded corners, drop shadow, and a reserved space for an image.
- **Metadata Icons**: Includes SVG icons for time (timer) and difficulty (star).
- **Typography**: Uses 'Open Sans' with semantic color mapping for readability.

## Interface

```typescript
interface RecipeCardProps extends ComponentProps {
    category?: string;    // Recipe category (e.g., BREAKFAST)
    title?: string;       // Main recipe name
    description?: string; // Brief summary
    time?: string;        // Cooking time (e.g., "15 mins")
    difficulty?: string;  // Level (e.g., "Easy", "Hard")
    x?: number;
    y?: number;
}
```

## Implementation Example

```typescript
const recipe = new recipe_card();
const card = await recipe.create({
    category: "Dinner",
    title: "Spicy Pasta",
    description: "A quick and delicious spicy tomato pasta with herbs.",
    time: "20 mins",
    difficulty: "Medium"
});
```

## Component File
[recipe_card.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/recipe_card/recipe_card.ts)
