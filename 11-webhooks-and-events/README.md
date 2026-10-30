# 11 — Webhooks and event-driven integration

A webhook is an outbound HTTP request sent when an event occurs.

## Receiver design
- Verify a cryptographic signature over the exact raw payload and timestamp.
- Reject stale timestamps to reduce replay risk.
- Make handlers idempotent; the same event may arrive more than once.
- Respond quickly, then process expensive work asynchronously.
- Store event IDs and processing outcomes.
- Do not trust webhook payloads as authorization proof.

## Sender design
- Sign requests and publish a verification guide.
- Retry transient failures with exponential backoff and jitter.
- Set timeouts and cap retry duration.
- Provide event IDs, event type, creation time, and schema version.
- Offer delivery logs and a replay mechanism with safeguards.

## Exercise
Design `order.paid` webhook delivery. Explain duplicate delivery, signature verification, retries, and consumer downtime.
