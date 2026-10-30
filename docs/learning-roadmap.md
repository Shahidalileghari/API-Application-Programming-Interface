# Learning roadmap

## Stage 1 — Foundations (Modules 00–04)
Understand the client/server boundary, HTTP request lifecycle, resource-oriented design, JSON representations, validation, and error semantics.

**Deliverable:** a small library API with list, read, create, update, and delete operations.

## Stage 2 — Contracts and identity (Modules 05–06)
Write an OpenAPI contract before implementation. Define authentication schemes, roles, scopes, and object-level authorization rules.

**Deliverable:** an API contract that a frontend developer can implement against without reading backend source code.

## Stage 3 — Collection and lifecycle design (Modules 07–08)
Design pagination, filtering, sorting, versioning, compatibility, and deprecation.

**Deliverable:** a stable collection API with documented query parameters and a migration plan.

## Stage 4 — Security and resilience (Modules 09–11)
Threat-model the API, protect resources, add rate controls, define caching behaviour, and design webhook delivery with signatures and retries.

**Deliverable:** a security review and reliable webhook specification.

## Stage 5 — Architecture and verification (Modules 12–14)
Understand gateways and service boundaries, test the contract, instrument the service, and define operational objectives.

**Deliverable:** an API release package with OpenAPI, tests, runbook, and production-readiness checklist.

## Suggested weekly pace

- 4–6 focused sessions per week
- 1 module per session, with extra time for security and versioning
- Write an API contract before writing route handlers
- Review every design as if another team must integrate without asking you questions
