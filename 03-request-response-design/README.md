# 03 — Request and response design

## Schema decisions
For every field define:
- type and format
- required vs optional
- nullable vs absent
- constraints and validation
- whether it is writable, readable, or server-generated

Avoid returning internal database rows directly. Public representations should be deliberate and stable.

## Example response
```json
{
  "data": {
    "id": "book_123",
    "title": "Designing Interfaces",
    "createdAt": "2026-01-15T10:30:00Z"
  }
}
```

Use ISO 8601 timestamps with an explicit timezone. Choose stable identifiers. Avoid ambiguous numeric money values; specify currency and use an appropriate representation such as integer minor units or a decimal string.

## Validation
Reject malformed input at the boundary. Validate length, ranges, formats, enums, and cross-field rules. Do not trust client-side validation.

## Exercise
Define a create-order request and response. Decide which fields the server must calculate rather than accept from the client.
