# Exercise solutions — discussion guide

1. Use `DELETE /customers/9` if deletion is the intended operation. Use a request body only where the contract requires it; do not hide destructive intent behind GET.
2. `401` means valid authentication credentials are absent/invalid; `403` means the authenticated principal is not permitted. Some systems intentionally return `404` to conceal resource existence.
3. Return a bounded `data` array plus explicit pagination metadata or links. Define stable ordering and maximum page size; do not return all 2,450 rows by default.
4. Authenticate the caller, then authorize access to invoice 501 in its tenant/ownership context. An unpredictable ID is not a permission check.
5. No. Strict clients, generated enums, schema validation, or consumers that assume exact shapes may break. Evaluate actual consumers and document evolution policy.
6. Accept an idempotency key scoped to caller and operation; persist key + request fingerprint + result atomically. Replays with the same payload return the original result; conflicting payload reuse is rejected.
7. Verify an HMAC/signature over raw bytes and timestamp, enforce a tolerance window, store event IDs, process idempotently, and retry transient failures with bounded exponential backoff and jitter.
8. CORS is a browser cross-origin policy. Non-browser clients can call APIs directly; server-side authentication and authorization remain essential.
9. Login: account/IP/device signals; search: user/tenant and expensive query classes; uploads: user/tenant, byte size, concurrency, and daily quota.
10. Include path parameter, request schema, success response, validation error, unauthenticated, forbidden, and not-found cases in OpenAPI.
11. Offset is simple and supports page jumps but can be expensive and unstable under writes. Cursor is efficient for sequential traversal with stable ordering but is less convenient for arbitrary page jumps.
12. Announce sunset/deprecation, publish migration guide, instrument old-version usage, notify consumers, support a defined window, then remove under policy.
