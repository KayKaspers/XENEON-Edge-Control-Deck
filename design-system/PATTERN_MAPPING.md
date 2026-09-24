# Pattern Mapping — XENEON Edge Control Deck

- **Work Package:** XEE-WP-002
- **Status:** Consumer pattern architecture

## Purpose

Define recurring interaction patterns and keep domain-specific patterns above shared foundations.

## Global patterns

### Home / Return

Every deep deck should have a predictable route back to a known base.

### Context switching

Changing deck context must not silently change the meaning of a control that visually appears unchanged.

### Status + action pairing

Where useful, action and current state should be spatially or semantically related without conflating "action requested" and "state confirmed".

### Critical action separation

High-impact actions should not sit indistinguishably among routine high-frequency actions.

### Unknown state

When application state is unavailable, the interface should say so rather than infer a healthy/active state.

## Domain patterns

### Star Citizen

```text
STAR CITIZEN
├── Flight
├── Combat
├── Mining
├── Salvage
├── Industrial / Cargo
└── System / Utility
```

These are consumer-domain patterns, not universal CDS patterns.

### OBS Studio

Likely patterns:

- scene selection;
- recording/streaming transport;
- audio control;
- source visibility;
- status feedback.

### Discord

Likely patterns:

- mute/deafen;
- communication state;
- audio shortcuts.

### System

Likely patterns:

- telemetry;
- audio routing;
- system shortcuts;
- application launch/bring-to-front actions where justified.

## Generalization boundary

A pattern used repeatedly inside this project does not automatically become CDS.

```text
REPEATED LOCALLY != UNIVERSAL
CONSUMER PATTERN != CDS CORE PATTERN
```

Any future proposal to generalize a pattern requires evidence and separate authority.
