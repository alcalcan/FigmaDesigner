# 👤 UserProfileCard

This component uses a **Declarative Node Structure** to build a Figma UI. Instead of imperative code, we describe the layout as a tree of data.

---

## 🧩 Structure Overview
The component is built using a single `NodeDefinition` tree:

1.  **Root (FRAME)**: The main card container (Auto Layout).
2.  **Header (FRAME)**: A horizontal stack containing the avatar and details.
    - **Avatar (FRAME)**: A rounded frame using `IMAGE` fill.
    - **Details (FRAME)**: A vertical stack for Name and Role.
3.  **Follow Button (FRAME)**: A clickable-style button that changes appearance based on state.

---

## 🛠️ Key Design Logic
If you are modifying this code, follow these rules to maintain the "Figma-first" feel:

### 1. The "Hug" Rule (No Cropping)
To ensure text isn't cut off:
- All **TEXT** nodes must have `"textAutoResize": "HEIGHT"`.
- Parent frames should use `"primaryAxisSizingMode": "AUTO"`.

### 2. The "parentIsAutoLayout" Flag
- **Important**: Any node inside an Auto Layout frame **MUST** have `"parentIsAutoLayout": true` in its `layoutProps`.

### 3. Dynamic Styles (The Toggle)
Look for ternary operators (? :) in the `fills` properties. This is where we handle state changes (e.g., Follow vs. Following colors).

---

## 🤖 AI Assistance
When asking an AI to modify this component, provide the `user_profile_card.ts` file and ask it to:
> "Maintain the declarative `NodeDefinition` structure. Ensure all new layout properties follow the 'Hug vs Fill' guide and always set `parentIsAutoLayout: true` for children."
