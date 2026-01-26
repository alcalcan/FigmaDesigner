# 📱 SocialProfileCard

This component uses a **Declarative Node Structure** to build a sleek Social Profile Card for Figma.

---

## 🧩 Structure Overview
The component is built using a single `NodeDefinition` tree:

1.  **Root (FRAME)**: The main card container (Auto Layout, Vertical).
2.  **Header (FRAME)**: A horizontal stack containing the avatar and user info.
    - **Avatar (FRAME)**: A circular frame using `IMAGE` fill with `assetRef`.
    - **User Info (FRAME)**: A vertical stack for Name and @handle.
3.  **Bio (TEXT)**: Dynamic bio text with auto-height and custom line height.
4.  **Footer (FRAME)**: A horizontal stack with "Space Between" alignment.
    - **Follower Count (TEXT)**: Displays the number of followers.
    - **Button (FRAME)**: A primary action button ("Follow") that hugs its content.

---

## 🛠️ Key Design Logic

### 1. Dynamic Images
The avatar uses `assetRef` from the props. This allows passing URLs directly which the `BaseComponent` will hydrate into Figma images.

### 2. Layout Mastery
- **Hug Contents**: The root frame uses `primaryAxisSizingMode: "AUTO"` to adjust its height based on the content.
- **Fill Width**: Internal containers like the Bio and Footer use `layoutAlign: "STRETCH"` to fill the card's width.
- **Button Sizing**: The Follow button uses `primaryAxisSizingMode: "AUTO"` to wrap its text perfectly, maintaining the "premium" feel.

---

## 🤖 AI Assistance
When asking an AI to modify this component, provide the `social_profile_card.ts` file and ask it to:
> "Maintain the declarative `NodeDefinition` structure. Ensure all new layout properties follow the 'Hug vs Fill' guide and always set `parentIsAutoLayout: true` for children."
