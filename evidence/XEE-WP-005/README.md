# Evidence — XEE-WP-005 iCUE and Firmware Baseline

This directory is the public evidence index for XEE-WP-005.

## Evidence policy

Evidence may be:

- `PUBLIC` — safe to commit as-is;
- `SANITISED SUMMARY` — original local evidence is not committed, but a public-safe result is recorded;
- `PRIVATE-ONLY` — retained by the Human Maintainer and not published.

## Useful evidence

Useful XEE-WP-005 evidence may include:

- sanitised screenshot of the iCUE About/version screen;
- sanitised screenshot showing the XENEON EDGE device tile;
- sanitised screenshot of the XENEON EDGE settings page;
- sanitised screenshot of Software Updates showing version/update state;
- written inventory of exposed XENEON settings and widgets;
- written result of Desktop/Widget mode behaviour.

Screenshots are optional when the same fact can be captured truthfully in a sanitised written summary.

## Never publish

Do not commit evidence containing:

- serial numbers;
- unique device IDs;
- unnecessary USB/PnP identifiers;
- Windows account information;
- CORSAIR account information;
- email addresses or notifications;
- API keys, tokens, stream keys or webhooks;
- unrelated personal desktop content.

## Suggested evidence IDs

```text
W5-EV-001  Installed iCUE version and startup state
W5-EV-002  XENEON EDGE detection and public-safe device name
W5-EV-003  XENEON EDGE firmware/device version
W5-EV-004  Software/device update status
W5-EV-005  Device-settings capability inventory
W5-EV-006  Widget/screen capability inventory
W5-EV-007  Desktop/Widget mode behaviour
```

## Review rules

```text
LATEST_PUBLIC_VERSION != INSTALLED_VERSION
SCREENSHOT != INTERPRETATION
DETECTED != CONFIGURED
UPDATE_AVAILABLE != UPDATE_AUTHORISED
WIDGET_VISIBLE != WIDGET_VALIDATED
```
