# UEFA Cards Row (Alex Cookbook Edition)

A horizontal row of cards styled after the UEFA Academy online courses, built using the Alex Cookbook design language.

## Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `cards` | `CardData[]` | Array of card objects to display. |

### CardData

| Option | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The title of the card. |
| `description` | `string` | Subtitle or description text (will be truncated). |
| `author` | `string` | The author display name. |
| `rating` | `number` | Rating from 0 to 5 for article relevance. |
| `imageUrl` | `string` | Optional URL for the card's main image. |
| `hasVideo` | `boolean` | If true, displays a play button overlay on the image. |

## Usage

```typescript
// Example usage in another component or page
{
    type: "COMPONENT",
    name: "Course Row",
    props: {
        cards: [
            {
                title: "Introduction to Football Management",
                description: "Learn the basics of managing a professional football club.",
                author: "John Doe",
                hasVideo: true
            }
        ]
    }
}
```
