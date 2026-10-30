# 00 — API fundamentals

## Learning objectives
- Explain API, client, server, contract, endpoint, and resource.
- Trace a request from client to server and back.
- Distinguish API design from implementation.

## Mental model
A client asks for an operation using a protocol. The server validates the request, authenticates the caller when needed, authorizes the action, performs application work, and returns a representation plus metadata.

## Example
A mobile app asks for `GET /api/v1/books/42`. The API contract promises what `42` means, what fields may be returned, and what happens if the book is absent or the caller is not allowed to see it.

## Design exercise
For a course platform, identify resources, consumers, and five operations. Avoid designing database tables first; model the public concepts consumers need.

## Common mistake
Treating an API as merely a list of URLs. A usable API also defines semantics, schemas, errors, security, compatibility, and operational behaviour.
