# UEFA Library Build-Up Guide

## Methodology (Stable - Do Not Change)

This section is the canonical methodology for UEFA Library components.
Do not rewrite this methodology unless explicitly requested by the user.

### 1) Source Discovery and Capture Reading

We start from the capture/source files only to understand structure, spacing, text, and assets.

- Read source trees and identify component boundaries.
- Map repeated blocks (cards, filters, rows, pagination, sidebars, banners).
- Extract text content, typography, spacing, and image/icon assets.

### 2) Component Splitting Strategy

We split the page into standalone, production-facing `Library*` components.

- Each component must be directly renderable by itself.
- Each component must own its local `assets/` folder when it uses images/SVGs.
- Repeated UI is implemented as reusable components with typed props (e.g. `cardIndex`, labels).

### 3) Required Coding Style

All active UEFA Library components follow this coding style:

1. Export a `Library*` class that extends `BaseComponent`.
2. Define typed props interface extending `ComponentProps` where needed.
3. Prefer `ComponentHelpers` (`createFrame`, `createText`, etc.) for readable structure.
4. Keep clear method boundaries (`resolveModel`, `buildStructure`, `buildSectionX`).
5. Use semantic node names (no raw `Frame ####` naming in final output).
6. Ensure important text nodes have real content.
7. Render via `await this.renderDefinition(structure)` and set `x/y` from props.

### 4) Composition Rules

- Page-level components compose section components, not raw capture fragments.
- Shared primitives (`TopBar`, `Header`, `Footer`, cards, sidebar blocks) are reusable.
- Variant behavior is handled with props, not copy-paste component duplication.

### 5) Fidelity and Content Rules

- Keep all required visible text content from source/capture.
- Keep expected visual behavior (header overlays, legal footer text, certification label, etc.).
- Use current year dynamically where required in legal footer copy.

### 6) Validation Rules

Before finalizing:

1. `npm run build` must pass.
2. No missing critical text in rendered components.
3. No raw numeric frame naming leakage in final rendered layers.
4. Assets resolve from component-local asset folders.

## Folder Strategy

- Components: `components/UEFA_Library/...`
- Demo page: `pages/UEFA_Library/LibraryDemoPage.ts`
- Full pages: `pages/UEFA_Library/LibraryLandingPage.ts`, `pages/UEFA_Library/LibraryNotificationPage.ts`

## Active Library Components

- `Top_bar/LibraryTopBar.ts`
- `Header/LibraryHeader.ts`
- `Info_banner/LibraryInfoBanner.ts`
- `Page_title/LibraryPageTitle.ts`
- `Resources_content/LibraryResourcesContent.ts`
- `Resources_search_bar/LibraryResourcesSearchBar.ts`
- `Resources_sidebar/LibraryResourcesSidebar.ts`
- `Sidebar_subject_filters/LibrarySidebarSubjectFilters.ts`
- `Resources_pagination/LibraryResourcesPagination.ts`
- `Library_feature_card/LibraryFeatureCard.ts`
- `Divider/LibraryDivider.ts`
- `Library_resources_title/LibraryResourcesTitle.ts`
- `Library_intro/LibraryIntro.ts`
- `Library_articles_row/LibraryArticlesRow.ts`
- `Library_articles_section/LibraryArticlesSection.ts`
- `Library_article_card/LibraryArticleCard.ts`
- `Footer/LibraryFooter.ts`
- Notification-specific sections under `Notification_*`
