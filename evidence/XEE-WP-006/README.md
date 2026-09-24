# Evidence — XEE-WP-006 Base Control Deck

This directory is the public evidence index for the first reusable XENEON Base Control Deck.

## Evidence classes

- `PUBLIC` — safe to commit as-is;
- `SANITISED SUMMARY` — public-safe summary of local evidence;
- `PRIVATE-ONLY` — retained locally and not committed.

## Suggested evidence IDs

```text
W6-EV-001  WidgetBuilder toolchain / validation
W6-EV-002  Source + package build result
W6-EV-003  iCUE import and real-device render
W6-EV-004  Touch-target usability test
W6-EV-005  Readability / low-light observation
W6-EV-006  Component semantics and truthful-state review
W6-EV-007  Foreground-window persistence
```

## Useful evidence

Useful public-safe evidence may include:

- WidgetBuilder validation output;
- package build summary;
- manifest summary without machine paths;
- sanitised screenshot of the base widget;
- written touch-target observations;
- written readability/low-light observations;
- state-semantics review notes.

## Never publish

Do not commit:

- local Windows user paths;
- serial numbers;
- unique device or USB identifiers;
- private account data;
- precise location data;
- tokens, keys or credentials;
- unrelated desktop content;
- unreviewed generated package internals.

## Review rules

```text
SOURCE EXISTS != VALIDATED
VALIDATED != IMPORTED
IMPORTED != DEVICE_TESTED
LOCAL FEEDBACK != EXTERNAL STATE CONFIRMED
SCREENSHOT != INTERPRETATION
PRIVATE RAW EVIDENCE != PUBLIC SUMMARY
```
