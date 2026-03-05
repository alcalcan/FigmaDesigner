# UEFA Library Extraction Map

Source of truth (untouched):

- `components/UEFA_Library/Proposal_notification/Proposal_notification.ts`

## Top-level map inside `Proposal_notification`

- `[0,0]` Top bar
- `[0,1]` Header
- `[0,2]` Info banner
- `[0,3]` Page title
- `[0,4]` Main content area
- `[0,5]` Divider
- `[0,6]` Related resources title
- `[0,7]` Related resources section
- `[0,8]` Footer

## Main content breakdown

- `[0,4,0]` Main content left column
- `[0,4,1]` Sidebar filters
- `[0,4,1,5]` Sidebar subject filters (UEFA Initiative checkbox list)
- `[0,4,0,0]` Search + sort/filter row
- `[0,4,0,1]` Main resource card #1
- `[0,4,0,2]` Main resource card #2
- `[0,4,0,3]` Main resource card #3
- `[0,4,0,4]` Pagination block

## Related resources breakdown

- `[0,7,0]` Related intro block
- `[0,7,1]` Related cards row
- `[0,7,1,0]` Related card #1
- `[0,7,1,1]` Related card #2
- `[0,7,1,2]` Related card #3
- `[0,7,1,3]` Related card #4

## Components created from this map

- `LibraryTopBar`
- `LibraryHeader`
- `LibraryInfoBanner`
- `LibraryPageTitle`
- `LibraryResourcesContent`
- `LibraryResourcesSearchBar`
- `LibraryResourcesSidebar`
- `LibrarySidebarSubjectFilters`
- `LibraryResourcesPagination`
- `LibraryFeatureCard` (`cardIndex` 0..2)
- `LibraryDivider`
- `LibraryResourcesTitle`
- `LibraryIntro`
- `LibraryArticlesRow`
- `LibraryArticlesSection`
- `LibraryArticleCard` (`cardIndex` 0..3)
- `LibraryFooter`

## Cross-Library Reuse (Alex_CookBook)

For UEFA Library refactors, prefer these shared primitives over local redraw:

- `Alex_CookBook/button/button`
  - Notification title actions (`Cancel`, `Save`) in `LibraryPageTitle`.
  - Rounded chevron icon control in `LibraryNotificationSection`.
- `Alex_CookBook/chip_expand/chip_expand`
  - Header chips in `LibraryNotificationSection`.
  - Search/filter chips in `LibraryResourcesContent`.
- `Alex_CookBook/checkbox/checkbox`
  - Subject options in `LibraryNotificationSection`.
  - Sidebar initiative options in `LibrarySidebarSubjectFilters`.
