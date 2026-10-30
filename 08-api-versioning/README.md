# 08 — Versioning and compatibility

Versioning is a consumer coordination strategy, not a substitute for careful evolution.

## Usually additive changes
- Add an optional response field.
- Add a new endpoint.
- Add an optional request field with a safe default.

Even additive changes can break strict clients, generated SDKs, or exhaustive enum handling. Validate with actual consumer expectations.

## Potentially breaking changes
- Remove or rename a field.
- Change a field type or meaning.
- Make an optional field required.
- Change authentication or error semantics.
- Change ordering or pagination guarantees.

## Strategies
- URI versioning (`/v1`, `/v2`) is visible and straightforward.
- Header/media-type versioning can keep URIs stable but is less discoverable.
- Date-based versions are useful in some platform APIs but add operational complexity.

## Deprecation plan
Announce the replacement, publish migration instructions, measure usage, provide a support window, and remove only according to policy.
