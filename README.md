# API Design 

A practical, language-independent curriculum for designing reliable, secure, evolvable APIs—with implementation labs using **JavaScript, Node.js, and Express**.


## What you'll learn

- HTTP semantics, REST constraints, resource modelling, and URI design
- Consistent request/response contracts and machine-readable errors
- OpenAPI 3.1 documentation and contract-first workflows
- Authentication, authorization, and object-level access control
- Pagination, filtering, sorting, caching, and rate limiting
- Idempotency, retries, timeouts, and webhook delivery
- API versioning, compatibility, and deprecation
- OWASP API Security risks and secure-by-design practices
- Unit, integration, schema, and contract testing
- Gateways, service boundaries, observability, and production readiness

## Who this is for

Software engineering students, junior backend developers, mobile/web developers, and engineers who want to design APIs that other teams can use safely and predictably.

## Learning paths

| Level | Focus | Suggested outcome |
|---|---|---|
| Foundation | HTTP, JSON, REST, resources, status codes | Design a coherent CRUD API |
| Professional | OpenAPI, auth, validation, errors, pagination, tests | Deliver a documented, secure API contract |
| Advanced | compatibility, idempotency, webhooks, caching, gateways, observability | Design production-oriented integrations |

## Repository map

```text
00-fundamentals/                 API concepts and architecture
01-http-protocol/                HTTP methods, headers, semantics
02-rest-api-design/              Resources, routes, REST constraints
03-request-response-design/      Schemas, validation, representations
04-status-codes-and-errors/      Status codes and Problem Details
05-api-documentation/            OpenAPI and contract-first workflow
06-authentication-authorization/ Identity, tokens, permissions
07-pagination-filtering-search/  Collection design
08-api-versioning/                Compatibility and deprecation
09-api-security/                  OWASP API Security and threat modelling
10-api-performance/               Caching, limits, payloads
11-webhooks-and-events/            Delivery, signatures, retries
12-api-gateways-microservices/     Boundaries and gateway responsibilities
13-api-testing/                    Test strategy and contract verification
14-production-engineering/         Observability and operational readiness
projects/                         End-to-end project briefs and starter contract
exercises/ and solutions/          Practice and worked answers
openapi-specifications/            Reusable OpenAPI examples
postman-collections/               Importable request collection
examples/node-express/              Minimal runnable reference implementation
docs/                              Roadmaps, glossary, checklists, diagrams
tests/                              Static repository/spec checks
```

## Prerequisites

- Basic programming knowledge
- Familiarity with JSON and client-server applications
- Basic command-line and Git usage
- Node.js 20+ and npm for the optional implementation lab

You can study the design material without installing Node.js.

## Quick start

1. Read [`docs/learning-roadmap.md`](docs/learning-roadmap.md).
2. Work through modules `00` to `04`.
3. Read and validate [`openapi-specifications/library-api.yaml`](openapi-specifications/library-api.yaml).
4. Complete the exercises before reading the solutions.
5. Run the example API:

```bash
cd examples/node-express
npm install
cp .env.example .env
npm run dev
```

The sample server listens on `http://localhost:3000`. It uses in-memory demonstration data and is **not** a production persistence layer.

Try:

```bash
curl -i http://localhost:3000/health
curl -i http://localhost:3000/api/v1/books
curl -i http://localhost:3000/api/v1/books/1
```

Run its automated tests:

```bash
npm test
```

## Design principles used throughout

1. **Consistency:** similar operations behave similarly.
2. **Explicit semantics:** HTTP methods and status codes communicate intent.
3. **Least privilege:** authenticate callers and authorize every protected operation.
4. **Stable contracts:** avoid breaking consumers without a migration strategy.
5. **Useful errors:** provide safe, actionable, machine-readable error details.
6. **Observable behaviour:** correlate requests and measure service health.
7. **Documented decisions:** explain trade-offs rather than treating style rules as universal truths.

## Validation

- The OpenAPI example is intended to be OpenAPI 3.1 compatible.
- The Node.js example includes automated tests and a lockfile-free npm manifest.
- Repository integrity and required-file checks are performed when packaging.
- Runtime execution status is reported alongside the ZIP. Do not interpret static checks as proof that every example runs in every environment.

