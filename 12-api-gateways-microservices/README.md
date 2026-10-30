# 12 — API gateways and service boundaries

An API gateway can centralize cross-cutting concerns such as routing, TLS termination, authentication integration, quotas, and request telemetry. It should not become an unreviewed dumping ground for business logic.

## Service boundaries
Split services around cohesive business capabilities and ownership, not simply one service per database table. Distributed systems introduce network failures, partial availability, eventual consistency, and operational overhead.

## Gateway responsibilities
- Route requests to services.
- Apply coarse-grained edge policies.
- Enforce request size and rate limits.
- Emit correlation identifiers and telemetry.
- Avoid duplicating domain authorization in ways that create inconsistent policy.

## Exercise
For an e-commerce system, decide which capabilities belong in catalog, order, and payment services. Identify one synchronous and one asynchronous interaction.
