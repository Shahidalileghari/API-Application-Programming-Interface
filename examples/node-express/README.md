# Node.js / Express reference API

A deliberately small teaching implementation of the Library API contract.

## Requirements
- Node.js 20 or later
- npm

## Run
```bash
npm install
cp .env.example .env
npm run dev
```

## Test
```bash
npm test
```

## Endpoints
- `GET /health`
- `GET /api/v1/books?limit=20&offset=0`
- `POST /api/v1/books`
- `GET /api/v1/books/:bookId`
- `DELETE /api/v1/books/:bookId`

## Important limitations
- Data is held in memory and resets when the process restarts.
- No authentication, authorization, database, distributed rate limiter, or production observability is implemented.
- This example demonstrates HTTP contract choices; it is not production-ready.
