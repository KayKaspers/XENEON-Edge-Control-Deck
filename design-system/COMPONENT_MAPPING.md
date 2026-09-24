# Component Mapping — XENEON Edge Control Deck

- **Work Package:** XEE-WP-002
- **Status:** Semantic mapping
- **Creates CDS components:** No

## Purpose

Map recurring XENEON UI needs to shared component concepts without inventing consumer-specific CDS Core components.

## Mapping

| XENEON need | Shared component concept | Consumer-specific content |
|---|---|---|
| Trigger an action | Action Button | Landing Gear, Start Recording, Mute |
| Represent on/off state | Toggle / Stateful Control | VTOL, Discord mute, OBS source state |
| Navigate between decks | Navigation Control | Flight, Combat, Mining, OBS |
| Show a value | Value Display | GPU temp, speed, volume |
| Show state | Status Indicator | connected, active, warning, unknown |
| Select one of several modes | Segmented / Selection Control | operating mode, target deck |
| Confirm risky action | Confirmation Pattern / Control | stop stream, destructive automation |
| Adjust continuous value | Range / Increment Control | volume or supported numeric setting |

## Semantic rules

### Action Button

Represents an intentional user action.

It does not imply that the target application confirmed success.

### Toggle

Represents a state only when the state is actually known.

If the underlying application cannot expose state, the control must avoid pretending that its local visual state is authoritative.

### Status Indicator

Must distinguish truthful state from presentation.

Unknown, stale and unverified states must remain expressible.

### Navigation Control

Represents location within the deck architecture, not application state.

### Confirmation

Used only where consequence justifies additional friction.

Confirmation is not decorative ceremony.

## Consumer ownership

Labels, icons and bindings for Star Citizen, OBS, Discord and telemetry remain consumer-local.

Examples:

```text
Action Button
├── Landing Gear
├── Quantum
├── Start Recording
└── Discord Mute
```

The concrete children are not promoted to CDS merely by being mapped to a shared concept.

## Deferred values

XEE-WP-002 does not choose:

- colours;
- fonts;
- corner radii;
- icon family;
- exact component dimensions;
- animation timing;
- elevation;
- final touch-target size.

Those belong to later design and validation work.
