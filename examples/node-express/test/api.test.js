import test from 'node:test';
import assert from 'node:assert/strict';
import { app } from '../src/app.js';

let server;
let baseUrl;

test.before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.after(async () => {
  await new Promise((resolve, reject) => server.close((err) => err ? reject(err) : resolve()));
});

test('health endpoint returns status ok', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok' });
});

test('list endpoint returns a paginated collection', async () => {
  const response = await fetch(`${baseUrl}/api/v1/books?limit=1&offset=0`);
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body.data.length, 1);
  assert.equal(body.pagination.total >= 2, true);
});

test('create endpoint validates input and returns 201', async () => {
  const response = await fetch(`${baseUrl}/api/v1/books`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ title: 'Test API Design', author: 'Test Author' })
  });
  const body = await response.json();
  assert.equal(response.status, 201);
  assert.equal(body.data.title, 'Test API Design');
  assert.match(response.headers.get('location'), /\/api\/v1\/books\/\d+$/);
});

test('missing book returns problem details', async () => {
  const response = await fetch(`${baseUrl}/api/v1/books/999999`);
  const body = await response.json();
  assert.equal(response.status, 404);
  assert.equal(body.status, 404);
  assert.equal(response.headers.get('content-type').includes('application/problem+json'), true);
});

test('invalid create request returns 400', async () => {
  const response = await fetch(`${baseUrl}/api/v1/books`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ title: '', author: 'A' })
  });
  assert.equal(response.status, 400);
});
