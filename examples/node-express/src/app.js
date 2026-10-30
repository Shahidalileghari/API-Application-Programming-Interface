import express from 'express';

export const app = express();
app.use(express.json({ limit: '32kb' }));

const books = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'Andrew Hunt and David Thomas', createdAt: '2026-01-01T00:00:00.000Z' },
  { id: 2, title: 'Clean Architecture', author: 'Robert C. Martin', createdAt: '2026-01-02T00:00:00.000Z' }
];
let nextId = 3;

function problem(res, status, title, detail) {
  return res.status(status).type('application/problem+json').json({
    type: 'about:blank',
    title,
    status,
    detail
  });
}

app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));

app.get('/api/v1/books', (req, res) => {
  const limit = Math.min(Math.max(Number.parseInt(req.query.limit ?? '20', 10) || 20, 1), 100);
  const offset = Math.max(Number.parseInt(req.query.offset ?? '0', 10) || 0, 0);
  const data = books.slice(offset, offset + limit);
  res.set('Cache-Control', 'no-store');
  return res.status(200).json({ data, pagination: { limit, offset, total: books.length } });
});

app.post('/api/v1/books', (req, res) => {
  const { title, author } = req.body ?? {};
  if (typeof title !== 'string' || !title.trim() || title.length > 200 ||
      typeof author !== 'string' || !author.trim() || author.length > 120) {
    return problem(res, 400, 'Invalid request', 'title and author are required strings within the documented length limits.');
  }
  const book = {
    id: nextId++,
    title: title.trim(),
    author: author.trim(),
    createdAt: new Date().toISOString()
  };
  books.push(book);
  res.location(`/api/v1/books/${book.id}`);
  return res.status(201).json({ data: book });
});

app.get('/api/v1/books/:bookId', (req, res) => {
  if (!/^[1-9]\d*$/.test(req.params.bookId)) {
    return problem(res, 400, 'Invalid book ID', 'bookId must be a positive integer.');
  }
  const book = books.find((item) => item.id === Number(req.params.bookId));
  if (!book) return problem(res, 404, 'Book not found', 'No book exists with the supplied identifier.');
  return res.status(200).json({ data: book });
});

app.delete('/api/v1/books/:bookId', (req, res) => {
  if (!/^[1-9]\d*$/.test(req.params.bookId)) {
    return problem(res, 400, 'Invalid book ID', 'bookId must be a positive integer.');
  }
  const index = books.findIndex((item) => item.id === Number(req.params.bookId));
  if (index === -1) return problem(res, 404, 'Book not found', 'No book exists with the supplied identifier.');
  books.splice(index, 1);
  return res.status(204).end();
});

app.use((req, res) => problem(res, 404, 'Not found', `No route matches ${req.method} ${req.path}.`));

app.use((err, _req, res, _next) => {
  if (err?.type === 'entity.parse.failed') return problem(res, 400, 'Malformed JSON', 'Request body must contain valid JSON.');
  return problem(res, 500, 'Internal server error', 'An unexpected error occurred.');
});
