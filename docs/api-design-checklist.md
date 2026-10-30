# API design review checklist

## Contract
- [ ] Resources and relationships are clear.
- [ ] Paths use consistent resource naming.
- [ ] HTTP methods match operation semantics.
- [ ] Request and response schemas are explicit.
- [ ] Required, optional, nullable, and default fields are distinguished.
- [ ] Status codes and error bodies are documented.
- [ ] Pagination and ordering behaviour are defined.

## Security
- [ ] Authentication mechanism and token lifecycle are defined.
- [ ] Authorization is checked for every operation and object.
- [ ] Input validation and output filtering are specified.
- [ ] Rate limits and abuse controls are considered.
- [ ] Sensitive data is not exposed in errors or logs.
- [ ] CORS policy is intentionally configured.
- [ ] TLS and secret-management expectations are documented.

## Reliability and operations
- [ ] Timeouts, retries, and idempotency are considered.
- [ ] Caching rules and validators are defined where useful.
- [ ] Request correlation and useful metrics are available.
- [ ] Deprecation and compatibility policy is documented.
- [ ] OpenAPI and tests are maintained with implementation.
