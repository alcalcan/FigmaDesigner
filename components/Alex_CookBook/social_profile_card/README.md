# Social Profile Card

A premium social media profile card component featuring an avatar, user information, bio, and interactive stats.

## Features

- **Declarative Structure**: Built using a clean `NodeDefinition` tree for maximum maintainability.
- **Dynamic Avatar**: Supports circular avatars with `IMAGE` fill and asset hydration.
- **Auto-layout Mastery**: Uses "Hug" vs "Fill" logic to ensure the card perfectly wraps its content while maintaining consistent padding.
- **Interactive Elements**: Includes a primary action button ("Follow") and social proof stats (Followers).
- **Typography**: Optimized line heights and semantic text spacing for better readability.

## Interface

```typescript
interface SocialProfileCardProps extends ComponentProps {
    name?: string;       // User's display name
    handle?: string;     // User's @handle
    bio?: string;        // Short biography text
    followers?: string;  // Follower count string (e.g., "12.4K")
    avatarUrl?: string;  // URL or asset reference for the profile image
    x?: number;
    y?: number;
}
```

## Implementation Example

```typescript
const profile = new social_profile_card();
const card = await profile.create({
    name: "Alex Calcan",
    handle: "@alexcalcan",
    bio: "Building future-proof UI components with procedural code.",
    followers: "4,250",
    avatarUrl: "https://example.com/avatar.png"
});
```

## Component File
[social_profile_card.ts](file:///Users/alexcalcan/Documents/Apps/FigmaDesigner/components/Alex_CookBook/social_profile_card/social_profile_card.ts)
