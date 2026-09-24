# Base Control Deck — XENEON EDGE

- **Work Package:** XEE-WP-006
- **Status:** Design and implementation active
- **Runtime direction:** project-owned custom iCUE widget
- **Target:** physical CORSAIR XENEON EDGE
- **Design authority:** CDS through the project-local XENEON Product Profile
- **Formal CDS conformance:** not claimed

## 1. Purpose

The Base Control Deck is the first reusable project-owned control surface.

It exists to validate:

- composition;
- touch interaction;
- shared control semantics;
- project visual baseline;
- truthful state representation;
- real-device readability;
- custom iCUE widget delivery.

It does not yet implement the final deck hierarchy or application-specific controls.

## 2. Verified platform baseline inherited

The implementation starts from the accepted project evidence:

```text
PHYSICAL XENEON EDGE
        ↓
WINDOWS 2560 × 720 @ 60 Hz
        ↓
TOUCH MAPPED + 5-POINT VERIFIED
        ↓
iCUE 5.51.42
        ↓
XENEON LCD-Touchscreen 5.51.1
        ↓
CUSTOM .ICUEWIDGET IMPORT AVAILABLE
```

## 3. Preferred delivery path

Primary delivery:

```text
HTML + CSS + JavaScript
        ↓
manifest.json
        ↓
Official WidgetBuilder validation
        ↓
.icuewidget package
        ↓
iCUE import
        ↓
Real XENEON EDGE
```

No application-specific bridge is required for the first Base Control Deck.

## 4. Base layout concept

Initial single-page shell:

```text
┌─────────────────────────────────────────────────────────────┐
│ XENEON EDGE CONTROL DECK             BASE / LOCAL / STATUS  │
├─────────────────────────┬───────────────────────────────────┤
│                         │                                   │
│ PRIMARY CONTROL REGION  │ STATUS / STATE REGION             │
│                         │                                   │
│                         ├───────────────────────────────────┤
│                         │ SECONDARY / SELECTION REGION       │
│                         │                                   │
└─────────────────────────┴───────────────────────────────────┘
```

This is an implementation scaffold, not the final WP-007 navigation architecture.

## 5. Required semantic prototypes

### Action

Visible requirements:

- explicit label;
- clear pressed feedback;
- explicit local/demo semantics;
- no implied external success.

### Stateful control

Visible requirements:

- current state label;
- non-colour state carrier;
- clear change feedback.

### Status

Must support at least:

```text
READY
ATTENTION
UNKNOWN
```

The word/label remains visible even when colour is used.

### Selection

Must show:

- available local options;
- current selection;
- visible selection change.

It must not claim that another application changed mode.

## 6. Visual baseline

Initial project palette:

| Token | Value |
|---|---|
| XENEON Dark | `#0B0B0B` |
| Surface | `#1A1A1A` |
| Slate | `#2A2F36` |
| White | `#FFFFFF` |
| Accent Yellow | `#FFD600` |

Typography:

```text
UI text:
Inter, "Segoe UI", sans-serif

Display / identity:
Exo 2 when locally available,
otherwise safe system fallback
```

No font binaries are stored by the project.

## 7. Touch target candidate

Initial candidate:

```text
minimum primary touch dimension = 96 px
```

This is a test candidate only.

Evidence must record:

- actual rendered target dimensions;
- edge/corner reachability;
- adjacent-target accidental activation;
- seated-distance comfort;
- any revised validated size.

## 8. Device validation checklist

- [ ] widget renders without clipping
- [ ] text is readable at normal seated distance
- [ ] primary controls are easy to hit
- [ ] edge controls remain usable
- [ ] no neighbouring accidental activation observed
- [ ] pressed feedback is perceivable
- [ ] state does not rely on colour alone
- [ ] unknown state is visibly distinct
- [ ] low-light brightness/contrast is acceptable
- [ ] foreground iCUE window can be closed without breaking the surface
- [ ] no application-specific actions are present

## 9. Implementation record

To be completed during XEE-WP-006.

| Item | Result |
|---|---|
| WidgetBuilder source/version | `TODO` |
| Source path | `TODO` |
| Manifest target | `TODO` |
| Validated widget sizes | `TODO` |
| Validation result | `TODO` |
| Package artifact | `TODO` |
| iCUE import result | `TODO` |
| Real-device render result | `TODO` |
| Validated minimum touch dimension | `TODO` |
| Low-light observation | `TODO` |

## 10. Design invariants

```text
ACTION SENT != STATE CONFIRMED
UNKNOWN != HEALTHY
UNVERIFIED != VERIFIED
COLOUR != SOLE MEANING
IMPLEMENTED != DEVICE_TESTED
BASE SURFACE != FINAL NAVIGATION ARCHITECTURE
```

## 11. Out of scope

Deferred:

- Home/deck hierarchy → XEE-WP-007
- Discord → XEE-WP-008
- OBS → XEE-WP-009
- Star Citizen → XEE-WP-010..014
- telemetry implementation → XEE-WP-015
- final backup/export/recovery → XEE-WP-017
