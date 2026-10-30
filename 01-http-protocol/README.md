# 01 — HTTP protocol

## Core concepts
HTTP is a stateless application protocol. A request has a method, target, headers, and optional body. A response has a status code, headers, and optional body.

| Method | Typical intent | Safe | Idempotent |
|---|---|---:|---:|
| GET | Read a representation | Yes | Yes |
| HEAD | Read headers/metadata | Yes | Yes |
| POST | Create/process an action | No | Not inherently |
| PUT | Replace target state | No | Yes |
| PATCH | Partially modify state | No | Depends on design |
| DELETE | Remove target association/state | No | Yes |

Do not infer safety from whether your handler happens to be read-only; follow HTTP semantics.

## Headers worth knowing
`Content-Type` describes the representation sent; `Accept` describes acceptable response formats; `Authorization` carries credentials; `Cache-Control` controls caching; `ETag` identifies a representation version; `Location` commonly identifies a newly created resource.

## Status families
- 2xx: successful processing
- 3xx: redirection or cache validation
- 4xx: client/request problem
- 5xx: server failed to fulfil a valid request

## Exercise
For each operation in a library API, choose a method and explain whether repeating it should have the same intended effect.
