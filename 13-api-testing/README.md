# 13 — API testing

A strong strategy tests both implementation and the public contract.

- **Unit tests:** isolated validation, mapping, and business rules.
- **Integration tests:** routes, persistence, and dependencies together.
- **Schema tests:** request/response conforms to the documented schema.
- **Contract tests:** provider and consumer agree on interactions.
- **Security tests:** authorization boundaries, injection, abuse limits.
- **Performance tests:** latency and throughput under realistic load.

## Test cases beyond the happy path
Missing fields, invalid types, oversized payload, malformed IDs, duplicate submissions, expired credentials, forbidden object IDs, concurrent updates, dependency timeout, and rate-limit exhaustion.

## Exercise
Write a test matrix for `POST /orders`, including status, response shape, and side effects for each case.
