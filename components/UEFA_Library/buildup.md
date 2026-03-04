# UEFA Library Build-Up Guide

This document mirrors the Academy workflow for rebuilding the UEFA Library screen into reusable components while keeping the original capture untouched.

## Goals

- Keep `Proposal_notification` as the untouched source of truth.
- Split major page blocks into reusable `Library*` components.
- Expose two card primitives:
- `LibraryFeatureCard` for the 3 wide cards (image on left).
- `LibraryArticleCard` for the 4 vertical cards (image on top).
- Compose everything in a dedicated demo page under `pages/UEFA_Library`.

## Folder Strategy

Use this pairing:

- Components: `components/UEFA_Library/...`
- Demo page: `pages/UEFA_Library/LibraryDemoPage.ts`
- Full reconstructed page: `pages/UEFA_Library/LibraryRecreatedPage.ts`

Primary source remains:

- `components/UEFA_Library/Proposal_notification/Proposal_notification.ts`

Reusable split components:

- `Top_bar/LibraryTopBar.ts`
- `Header/LibraryHeader.ts`
- `Info_banner/LibraryInfoBanner.ts`
- `Page_title/LibraryPageTitle.ts`
- `Resources_content/LibraryResourcesContent.ts`
- `Resources_search_bar/LibraryResourcesSearchBar.ts`
- `Resources_sidebar/LibraryResourcesSidebar.ts`
- `Resources_pagination/LibraryResourcesPagination.ts`
- `Library_feature_card/LibraryFeatureCard.ts`
- `Divider/LibraryDivider.ts`
- `Library_resources_title/LibraryResourcesTitle.ts`
- `Library_intro/LibraryIntro.ts`
- `Library_articles_row/LibraryArticlesRow.ts`
- `Library_articles_section/LibraryArticlesSection.ts`
- `Library_article_card/LibraryArticleCard.ts`
- `Footer/LibraryFooter.ts`

Shared extraction logic:

- `shared/LibrarySourceHelpers.ts`

## How Splitting Works

- Each `Library*` component clones a targeted subtree from `Proposal_notification` using an index path.
- Source is rendered once per extraction, cloned, then removed.
- Result: exact visual fidelity from the capture, with separated reusable components.

## Demo Page Pattern

`LibraryDemoPage` follows the same style as `AcademyDemoPage`:

1. Intro header
2. Numbered section titles and implementation notes
3. Real component instances at `1680` width
4. Separate showcase rows for:
- 3 wide cards (`LibraryFeatureCard`, `cardIndex`)
- 4 vertical cards (`LibraryArticleCard`, `cardIndex`)
5. Dedicated extracted components for search bar, sidebar filters, pagination, divider, and related-resources row/section.

## Full Page Reconstruction

`LibraryRecreatedPage` rebuilds the full original screen layout (top bar to footer) by composing split `Library*` components with the original spacing/padding structure.

## Rules

- Do not edit `Proposal_notification.ts` when splitting.
- Keep names prefixed with `Library` for canonical components.
- Keep the demo page in `pages/UEFA_Library` and section numbering explicit.
- Prefer reusable card components over duplicated card-specific files.

## Validation Checklist

1. Imports resolve for all new `UEFA_Library` files.
2. Demo page class compiles and instantiates all sections.
3. Card components support index-based rendering.
4. Original source component remains unchanged.
