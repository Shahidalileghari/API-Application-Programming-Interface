# Projects

Complete projects in order. For each one, submit: requirements, resource model, OpenAPI contract, example requests/responses, error catalogue, security review, test matrix, and a short architecture decision record.

## 1. Library API — Foundation
CRUD for books and authors, pagination, validation, and consistent errors. Starter contract: `../openapi-specifications/library-api.yaml`.

## 2. Identity and Access API — Professional
Registration, login, token refresh, logout/revocation strategy, profile, roles, and permissions. Use a secure password hash; never store plaintext passwords. Define threat model and account-enumeration protections.

## 3. Commerce API — Professional
Catalog, cart, orders, inventory reservation, and simulated payment. Define concurrency behaviour, idempotency keys, and order state transitions. Do not integrate real payment credentials in a learning repository.

## 4. Webhook Platform — Advanced
Event registration, signed delivery, retries with backoff, delivery attempts, replay, and duplicate handling. Include receiver verification examples.

## 5. Multi-tenant SaaS API — Advanced
Organizations, members, projects, and audit events. Demonstrate tenant isolation and object-level authorization tests. A user must never access another tenant's objects by changing an identifier.

## Capstone: Production API design package
Choose a real-world domain and deliver:
- API requirements and consumer personas
- Resource model and endpoint catalogue
- OpenAPI specification
- Authentication and authorization matrix
- Error and status-code catalogue
- Pagination, caching, rate-limit, and idempotency policies
- Threat model and abuse cases
- Contract/integration/security test plan
- Versioning and deprecation policy
- Observability plan, SLO proposal, and runbook
