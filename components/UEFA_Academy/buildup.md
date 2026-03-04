# UEFA Academy Build-Up Guide

This document explains how the UEFA Academy components and demo page were built, and how to continue the same pattern for future sections.

## Goals

- Keep original extracted structure and behavior.
- Create Academy-prefixed, production-facing components.
- Build a demo page that renders real components at `1680` width.
- Keep legacy code isolated and easy to remove.

## Folder Strategy

Use this pairing:

- Components: `components/UEFA_Academy/...`
- Demo page: `pages/UEFA_Academy/...`

For each section, prefer this pattern in the same folder:

- `Academy<Section>.ts` -> active, canonical component.
- `<Section>.ts` -> compatibility wrapper or historical file.
- `assets/` -> captured image/svg assets.

Examples:

- `components/UEFA_Academy/Header/AcademyHeader.ts`
- `components/UEFA_Academy/Mission/AcademyMission.ts`
- `components/UEFA_Academy/Programmes_Section/AcademyProgrammesSection.ts`

## Demo Page Pattern

Demo page file:

- `pages/UEFA_Academy/AcademyDemoPage.ts`

Rules used:

- Extend `BaseDemoPage`.
- Add a page-level intro/caption.
- Render each **real component instance** directly (no preview wrapper cards).
- Enforce component width to `1680`.
- Keep each section in a hug-content block, with numbered explanation text.

Current sequence:

1. Academy Header
2. Academy Header Banner
3. Academy Mission Banner
4. Academy Welcome Section
5. Academy Programmes Section
6. Academy President Section (variant: `stay-connected-social-only`)
7. Academy Footer

## Section Build Rules

### 1) Keep Original Structure First

When refining a section, mimic the original extracted section 100% first:

- Keep original layout hierarchy when possible.
- Keep existing variants and prop API.
- Keep original positioning rules (including absolute nodes when required by design).

Then simplify only where behavior is unchanged.

### 2) Prefix New Canonical Components

Use `Academy` prefix for active components:

- `AcademyMission`
- `AcademyProgrammesSection`
- `AcademyPresidentSection`

This makes the active path obvious and avoids ambiguity with older extracted names.

### 3) Width and Layout Consistency

- Main section components in demo should be `1680` wide.
- Demo containers should hug content; the component itself is the visual section.
- For divider nodes:
  - Header divider can remain fixed if design requires.
  - Card/content section divider should fill container width.

### 4) Mission Banner Specific Rule

For mission/banner-style sections:

- Keep content vertically centered.
- Keep overlay/gradient inside component bounds.
- Use image fill behavior that avoids squashing.

### 5) Variants Must Be Kept

If a page uses a specific variant (example: President section social-only), ensure:

- Variant exists in the Academy-prefixed component.
- Demo page explicitly uses that variant.

## Legacy Cleanup Workflow

When replacing old files:

1. Create Academy-prefixed canonical file.
2. Update demo and imports to canonical component.
3. Move unused old files to a temporary `legacy_components` area if needed.
4. After verification, remove dead legacy files (or keep minimal wrappers only when required).
5. Ensure exports/index files only expose supported paths.

## Coding Style Expectations

- Match the project TypeScript component patterns used by existing Academy files.
- Prefer composition (import section parts, assemble final component) over large monolith files.
- Keep props aligned with existing conventions (`ComponentProps` etc.).
- Avoid Figma-only shortcuts that break runtime structure consistency.

## Validation Checklist

Before finalizing changes:

1. TypeScript/structure sanity
- Imports resolve.
- No orphaned or stale exports.

2. Lint scope check (Academy only)
- `npx eslint --ext .ts components/UEFA_Academy pages/UEFA_Academy`

3. Build check
- `npm run build`

4. Visual check
- Demo page renders all Academy sections.
- Components are real sections at `1680` width.
- Section captions are visible and numbered.

## How To Add a New Academy Section (Template)

1. Add component folder under `components/UEFA_Academy/<Section>/`.
2. Implement `Academy<Section>.ts` using existing project patterns.
3. Keep or wrap old extracted file only if needed for compatibility.
4. Import and place in `pages/UEFA_Academy/AcademyDemoPage.ts`.
5. Add numbered caption + description in demo section list.
6. Enforce width to `1680`.
7. Run lint/build checks above.

## Maintenance Notes

- Prefer Academy-prefixed names for all active exports.
- Keep page and component folder names aligned (`UEFA_Academy` in both `components` and `pages`).
- Remove duplicate section implementations once Academy-prefixed canonical version is stable.
