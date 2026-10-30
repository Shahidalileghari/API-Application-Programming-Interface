# 09 — API security

Use the OWASP API Security Top 10 as a recurring threat-modelling checklist. Key risk areas include broken object-level authorization, broken authentication, property-level authorization failures, unrestricted resource consumption, function-level authorization failures, sensitive business-flow abuse, SSRF, security misconfiguration, inventory management failures, and unsafe consumption of APIs.

## Secure-by-design controls
- Authenticate and authorize every protected operation.
- Validate inputs and constrain payload size, depth, and complexity.
- Allowlist writable and sortable fields.
- Apply rate limits and business-flow abuse controls.
- Use TLS; store passwords with a modern password-hashing algorithm.
- Keep secrets out of source, logs, and URLs.
- Avoid verbose errors and sensitive response fields.
- Inventory endpoints and retire obsolete versions.
- Validate data received from third-party APIs.
- Configure CORS narrowly; CORS is not authentication.

## Threat modelling prompt
For each endpoint ask: who can call it, which objects can they access, which properties can they read/write, how can it be abused at scale, and what evidence will detect misuse?
