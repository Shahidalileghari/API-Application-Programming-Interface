# Exercises

Try these before opening `../solutions/README.md`.

1. A client uses `GET /removeCustomer?id=9`. Redesign it using HTTP semantics.
2. Explain why `401` and `403` are not interchangeable.
3. Design a response for a paginated list of 2,450 products.
4. A caller changes `/invoices/500` to `/invoices/501`. What must the server verify?
5. Decide whether adding an optional response field is always backward-compatible. Explain client-generation and strict-decoding caveats.
6. Design an idempotent order-creation strategy for clients that retry after a timeout.
7. Define webhook signature verification, replay protection, duplicate handling, and retry policy.
8. Explain why CORS does not replace authentication or authorization.
9. Propose rate-limit dimensions for login, search, and file-upload endpoints.
10. Draft an OpenAPI operation for updating a user's display name, including validation and error responses.
11. Explain the trade-offs between offset and cursor pagination.
12. Create a deprecation plan for `/v1/reports` when `/v2/reports` is ready.
