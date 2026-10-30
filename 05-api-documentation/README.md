# 05 — API documentation and OpenAPI

An API contract should be consumable by humans and tools. OpenAPI describes paths, operations, parameters, request bodies, responses, schemas, and security schemes.

## Contract-first workflow
1. Agree on use cases and resource model.
2. Write request/response schemas and error cases.
3. Review the OpenAPI document with consumers.
4. Generate or implement server/client code as appropriate.
5. Validate implementation against the contract in CI.
6. Publish versioned documentation.

The repository includes `openapi-specifications/library-api.yaml`. Treat it as a teaching example; validate it with an OpenAPI 3.1 validator before production use.

## Documentation quality
Document authentication, examples, constraints, pagination, rate limits, idempotency, error cases, and compatibility policy—not just happy-path endpoints.
