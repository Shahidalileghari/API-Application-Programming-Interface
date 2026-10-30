# 07 — Pagination, filtering, sorting, and search

Collection endpoints need bounded, predictable behaviour.

## Offset pagination
`GET /books?limit=20&offset=40`
- Easy to understand and jump to a page.
- Large offsets can be expensive.
- Concurrent inserts/deletes can shift page boundaries.

## Cursor pagination
`GET /books?limit=20&after=opaque_cursor`
- Better for large or changing datasets when based on a stable ordering.
- Cursors should be opaque and validated.
- Define ordering and whether the cursor is inclusive/exclusive.

## Filtering and sorting
Use allowlisted fields and operators. Never interpolate arbitrary client-supplied sort expressions into SQL. Define stable tie-breakers, e.g. `createdAt DESC, id DESC`.

## Search
Specify tokenization, case sensitivity, partial matching, ranking, and consistency expectations.

## Exercise
Design a cursor-paginated endpoint for orders with filters for status and creation date. Define metadata for next-page navigation.
