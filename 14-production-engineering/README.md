# 14 — Production API engineering

## Observability
- Logs: structured, correlated, and scrubbed of secrets/PII.
- Metrics: request count, latency, error rate, saturation, dependency health.
- Traces: follow a request across service boundaries.
- Correlation ID: connect client reports to server-side telemetry.

## Reliability
Define timeouts, bounded retries, circuit-breaking where justified, graceful degradation, health checks, and clear ownership. Retry only when safe; use idempotency for operations where duplicate effects are dangerous.

## Release readiness
- OpenAPI is reviewed and versioned.
- Security and authorization tests pass.
- Rate and payload limits are configured.
- Dashboards and alerts exist.
- Rollback and migration plans are documented.
- Deprecation and support policy is published.
- Runbook identifies owners and recovery steps.
