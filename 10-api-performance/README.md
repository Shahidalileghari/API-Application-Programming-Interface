# 10 — API performance and caching

## Measure before optimizing
Track latency percentiles (p50/p95/p99), throughput, error rates, saturation, and dependency latency. Averages can hide tail latency.

## Caching
- `Cache-Control` defines caching policy.
- `ETag` supports conditional requests.
- `If-None-Match` can produce `304 Not Modified`.
- Do not publicly cache user-specific or sensitive data.
- Invalidate or bound stale data intentionally.

## Resource controls
Set request size limits, query timeouts, concurrency limits, pagination bounds, and rate limits. Apply limits per identity, tenant, IP, and operation where appropriate.

## Payload and database
Avoid over-fetching, N+1 queries, unbounded collections, and expensive synchronous work on request paths. Compress suitable responses and use appropriate indexes.

## Exercise
Propose performance budgets for a product-list endpoint and describe how you would measure them.
