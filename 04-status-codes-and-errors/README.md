# 04 — Status codes and errors

Use status codes consistently:
- `200 OK`: successful request with a representation
- `201 Created`: resource created; consider a `Location` header
- `202 Accepted`: accepted for asynchronous processing, not yet completed
- `204 No Content`: success with no response body
- `400 Bad Request`: malformed or invalid request
- `401 Unauthorized`: authentication is missing or invalid
- `403 Forbidden`: authenticated caller lacks permission
- `404 Not Found`: resource absent, or deliberately concealed
- `409 Conflict`: request conflicts with current resource state
- `412 Precondition Failed`: conditional request precondition failed
- `422 Unprocessable Content`: syntactically valid content that fails semantic validation (use consistently)
- `429 Too Many Requests`: rate limit exceeded
- `500 Internal Server Error`: unexpected server failure

## Problem Details
RFC 9457 defines a standard problem-details representation. Example:

```json
{
  "type": "https://api.example.com/problems/validation",
  "title": "Validation failed",
  "status": 422,
  "detail": "One or more fields are invalid.",
  "instance": "/api/v1/books",
  "errors": [{"field": "title", "code": "required"}]
}
```

Never expose stack traces, SQL errors, secrets, or internal topology to clients.

## Exercise
Create a consistent error catalogue for not found, validation, unauthenticated, forbidden, conflict, rate limit, and unexpected failures.
