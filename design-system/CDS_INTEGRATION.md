# CDS Integration — XENEON Edge Control Deck

- **Work Package:** XEE-WP-002
- **Status:** Project-local integration contract
- **Consumer:** XENEON Edge Control Deck
- **Design authority:** Core Design System (CDS)
- **Pinned CDS revision:** `d8b5857e1eda2066e61fda47b694afbc466aa6d8`
- **NDF baseline:** v1.1.0
- **Pinned NDF repository revision:** `b7bebb8a9b1b51756e83fdbf51d83eeb7d70929e`

## Purpose

This document defines how XENEON Edge Control Deck consumes the Core Design System without making CDS a runtime dependency and without claiming formal CDS adoption or conformance.

## Project assumption

The project deliberately treats the **CDS target state as fully operational for planning and implementation**.

This assumption means the project may design against the intended CDS model for:

- foundations and tokens;
- components;
- patterns and experiences;
- channels;
- accessibility;
- Product Profiles;
- evidence and quality.

It does **not**:

- modify the CDS repository;
- convert project-local artifacts into CDS artifacts;
- create a formal CDS adoption claim;
- create a formal CDS conformance claim;
- grant this project authority over CDS.

```text
TARGET-STATE ASSUMPTION != FORMAL CDS CONFORMANCE
CONSUMER ARTIFACT != CDS ARTIFACT
EVIDENCE != AUTHORITY
```

## Consumer classification

XENEON Edge Control Deck is a **CDS consumer**.

It owns:

- the actual XENEON implementation;
- hardware-specific constraints;
- touch interaction on the target device;
- application integrations;
- local automation;
- project-local assets;
- project-local evidence;
- all claims about this consumer.

CDS owns:

- shared semantic meaning;
- shared design/UX contracts;
- accessibility obligations;
- Product Profile boundaries;
- shared component/pattern semantics;
- channel and evidence architecture.

## Source Contract

The project pins its CDS planning baseline to repository revision:

`d8b5857e1eda2066e61fda47b694afbc466aa6d8`

Primary CDS sources used by XEE-WP-002:

- `docs/architecture/DESIGN_SYSTEM_ARCHITECTURE.md`
- `docs/architecture/PRODUCT_PROFILE_AND_EXTENSION_MODEL.md`
- `docs/architecture/CONSUMER_CONTRACT_AND_RECONCILIATION_MODEL.md`
- `docs/architecture/ARTIFACT_DISTRIBUTION_AND_CHANNEL_MODEL.md`
- `docs/architecture/ADAPTIVE_LAYOUT_AND_RESPONSIVE_FOUNDATION.md`
- `docs/governance/ACCESSIBILITY_AND_INCLUSIVE_DESIGN_POLICY.md`
- `docs/governance/VISUAL_FOUNDATION_BRAND_AND_PROFILE_BOUNDARY.md`

The pinned revision records provenance. The target-state assumption allows this consumer project to plan beyond current CDS implementation readiness without pretending that the current CDS repository has formally approved this Product Profile.

## Integration Contract

The consumer must:

1. preserve shared semantic meaning;
2. avoid redefining CDS roles locally;
3. keep application-specific behaviour in Consumer Extensions;
4. preserve accessibility obligations;
5. keep status meaning truthful;
6. document deviations and technical limitations;
7. keep the CDS revision identifiable;
8. avoid silent overrides;
9. keep basic operation independent of mandatory external runtime services.

## Product Profile boundary

The XENEON Product Profile describes device/channel-specific constraints and approved project-local expression under the target-state assumption.

It may define:

- display geometry;
- density constraints;
- touch interaction requirements;
- navigation constraints;
- low-light usage needs;
- information hierarchy constraints;
- device-specific feedback expectations.

It may not:

- redefine shared semantics;
- remove accessibility obligations;
- make colour the sole carrier of meaning;
- turn Star Citizen/OBS/Discord actions into CDS Core;
- silently override CDS because iCUE is limited.

## Consumer Extensions

Application-specific work remains local unless separately accepted elsewhere.

Examples:

- Star Citizen Flight Deck
- Star Citizen Combat Deck
- Mining Deck
- Salvage Deck
- OBS Scene Controls
- Discord Audio Controls
- telemetry surfaces
- local automation adapters

See `CONSUMER_EXTENSIONS.md`.

## Technical limitation rule

When Windows, iCUE, the XENEON hardware or an application cannot realize the intended interaction:

```text
OBSERVE LIMITATION
      ↓
DOCUMENT
      ↓
CLASSIFY
      ├── implementation constraint
      ├── consumer-local extension
      ├── bounded local exception
      └── design-contract conflict
      ↓
HUMAN-MAINTAINER DECISION where authority is required
```

The implementation limitation must not silently rewrite CDS semantics.

## Accessibility responsibility

The project treats accessibility as shared responsibility:

- CDS supplies design obligations and semantic constraints;
- the XENEON consumer owns composition, device behaviour, local extensions and practical validation.

Using CDS concepts does not by itself prove the XENEON implementation accessible or conformant.

## Distribution and runtime boundary

The project follows Standalone-First behaviour:

- NDF is not a runtime dependency;
- CDS is not a runtime dependency;
- the control deck should remain locally usable;
- cloud connectivity may enhance a feature but must not become mandatory for basic control surfaces unless explicitly justified.

## Evidence boundary

Evidence may include:

- screenshots;
- device photos;
- configuration captures;
- interaction test notes;
- application-version records;
- before/after state;
- failure cases.

Evidence supports review but does not create authority.

## Claims

Permitted project wording:

- "designed against the CDS target-state model"
- "CDS-informed"
- "CDS consumer under project target-state assumption"

Not permitted without later formal evidence/authority:

- "CDS conformant"
- "CDS certified"
- "formally adopted by CDS"
- "official Core Product Profile"
