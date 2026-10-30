# 02 — REST API design

REST is an architectural style, not a synonym for JSON over HTTP. Its constraints include client-server separation, statelessness, cacheability, a uniform interface, layered systems, and optionally code-on-demand.

## Resource-oriented URI design
Prefer nouns representing resources:
- `GET /books`
- `GET /books/{bookId}`
- `POST /books`
- `PATCH /books/{bookId}`
- `DELETE /books/{bookId}`

Avoid encoding the method into the path (`/getBooks`, `/deleteBook`). Use query parameters for collection shaping, not for changing the meaning of HTTP methods.

## Relationships
Nested paths can communicate ownership or context: `/users/{userId}/orders`. Avoid deep nesting that makes resources hard to address independently.

## Actions
Some domain operations are not simple CRUD. Model them deliberately, e.g. `POST /orders/{orderId}/cancellation` or a clearly documented command resource. Do not force every domain operation into fake CRUD.

## Exercise
Design endpoints for books, authors, and reviews. Identify which resources need stable independent identifiers.
