# Consumer Extensions — XENEON Edge Control Deck

- **Work Package:** XEE-WP-002
- **Owner:** XENEON Edge Control Deck
- **CDS ownership:** None unless explicitly accepted through separate CDS governance

## Purpose

Register product-specific functionality that legitimately remains outside the CDS Core.

## Extension families

### XEE-EXT-SC — Star Citizen

Planned extensions:

- flight actions;
- combat actions;
- mining actions;
- salvage actions;
- industrial/cargo actions;
- utility/system actions;
- game-version-specific bindings.

### XEE-EXT-OBS — OBS Studio

Planned extensions:

- scene actions;
- streaming/recording actions;
- audio actions;
- source actions;
- state feedback where supported.

### XEE-EXT-DISCORD — Discord

Planned extensions:

- mute/deafen;
- push-to-talk related controls;
- audio control;
- supported state feedback.

### XEE-EXT-SYSTEM — System and Telemetry

Planned extensions:

- CPU/GPU/memory telemetry;
- temperatures;
- audio state;
- application state;
- local launch/shortcut actions;
- local automation where separately authorised.

## Rules

1. Consumer Extensions may use shared CDS component and pattern semantics.
2. They may not redefine CDS semantics.
3. They remain owned by this project.
4. Reuse across multiple XENEON decks does not make them CDS Core.
5. Secrets and credentials are never embedded.
6. Application version dependencies are documented where material.
7. Unknown state is represented honestly.
8. Technical limitations are documented instead of hidden.

## Upstream boundary

Nothing in this file is an upstream proposal.

If a project-local extension later appears broadly reusable, a separate evidence-based proposal is required.

```text
USEFUL HERE != ACCEPTED UPSTREAM
```
