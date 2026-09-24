# Evidence — XEE-WP-005 iCUE and Firmware Baseline

This directory is the public evidence index for XEE-WP-005.

## Evidence policy

Evidence may be:

- `PUBLIC` — safe to commit as-is;
- `SANITISED SUMMARY` — original local evidence is not committed, but a public-safe result is recorded;
- `PRIVATE-ONLY` — retained by the Human Maintainer and not published.

## Current evidence handling

The Human Maintainer supplied real iCUE/XENEON observations and screenshots for W5-EV-001 through W5-EV-007.

The raw screenshots are classified `PRIVATE-ONLY` because they include information that is unnecessary for the public repository, including:

- a local geographic location used by a weather widget;
- hardware and sensor inventory;
- a local Windows user path;
- other machine-specific desktop context.

The public repository therefore records sanitised written summaries in:

`docs/icue/ICUE_FIRMWARE_BASELINE.md`

No raw screenshot is required for WP-005 acceptance.

## Evidence register

| Evidence ID | Public status | Public representation |
|---|---|---|
| W5-EV-001 | SANITISED SUMMARY | Installed iCUE version and startup state |
| W5-EV-002 | SANITISED SUMMARY | XENEON EDGE detection and public-safe device name |
| W5-EV-003 | SANITISED SUMMARY | XENEON EDGE device version |
| W5-EV-004 | SANITISED SUMMARY | Software/device update status |
| W5-EV-005 | SANITISED SUMMARY | Device-settings capability inventory |
| W5-EV-006 | SANITISED SUMMARY | Widget/screen capability inventory |
| W5-EV-007 | SANITISED SUMMARY | Desktop/Widget mode persistence and switching test |

## Never publish

Do not commit evidence containing:

- serial numbers;
- unique device IDs;
- unnecessary USB/PnP identifiers;
- Windows account information;
- CORSAIR account information;
- email addresses or notifications;
- API keys, tokens, stream keys or webhooks;
- unrelated personal desktop content;
- local user paths when not required;
- precise/local weather-widget location when not required.

## Review rules

```text
LATEST_PUBLIC_VERSION != INSTALLED_VERSION
SCREENSHOT != INTERPRETATION
DETECTED != CONFIGURED
UPDATE_AVAILABLE != UPDATE_AUTHORISED
WIDGET_VISIBLE != WIDGET_VALIDATED
PRIVATE_RAW_EVIDENCE != PUBLIC_SUMMARY
```
