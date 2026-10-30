# 06 — Authentication and authorization

**Authentication** answers who the caller is. **Authorization** answers what that caller may do.

## Common mechanisms
- API keys: identify a client/application; protect, scope, rotate, and rate-limit them.
- OAuth 2.0: delegated authorization; use modern security best practices and appropriate flows.
- OpenID Connect: identity layer built on OAuth 2.0.
- JWT: a token format, not an authentication architecture by itself.

## Access-control design
- Deny by default.
- Enforce authorization server-side on every request.
- Check object ownership/tenant boundaries, not only route access.
- Separate roles from fine-grained permissions where needed.
- Keep access tokens short-lived; design refresh/revocation carefully.
- Never place secrets in URLs.

## BOLA example
A user changes `/accounts/100` to `/accounts/101`. The server must verify the caller can access account 101. Knowing or guessing an identifier is not authorization.

## Exercise
Write an authorization matrix for owner, support agent, and administrator across read/update/delete operations.
