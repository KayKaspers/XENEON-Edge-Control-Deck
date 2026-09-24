# Evidence — XEE-WP-004 Windows Display and Touch Baseline

This directory is the public evidence index for XEE-WP-004.

## Allowed evidence

Evidence may include:

- sanitised screenshots of Windows Display settings;
- sanitised screenshots of Advanced display settings;
- written observations of touch behaviour;
- written results of reversible USB-C connection tests;
- sanitised touch-test screenshots where useful.

## Evidence classification

- `PUBLIC` — safe to commit as-is;
- `SANITISED SUMMARY` — public-safe written result, original not committed;
- `PRIVATE-ONLY` — retained by the Human Maintainer and not published.

## Never publish

Do not commit:

- Windows account names if unnecessary;
- machine names if unnecessary;
- unique PnP instance paths;
- serial numbers;
- hardware IDs beyond what is needed for public-safe product identification;
- desktop notifications containing personal information;
- browser/account content;
- credentials or tokens.

## Suggested evidence IDs

```text
W4-EV-001  Windows display settings
W4-EV-002  Advanced display mode
W4-EV-003  Touch mapping observation
W4-EV-004  USB-C disconnect/reconnect test
W4-EV-005  Multi-touch observation
```

## Review rule

```text
SCREENSHOT != INTERPRETATION
OBSERVED != TESTED
TOUCH WORKS != TOUCH MAPPED CORRECTLY
USB-C PRESENT != USB DATA VERIFIED
```
