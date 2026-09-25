# Evidence - XEE-WP-006

## v0.2.0 - reconciled execution evidence

Presentation basis accepted by the Human Maintainer. Execution ready for REVIEW; integration and final acceptance remain outstanding.

| Evidence | Current interpretation |
|---|---|
| W6-EV-001 | PASS - official CLI 0.4.47 reported in the supplied execution log |
| W6-EV-002 | PASS - v0.2.0 validated twice and packaged by the official CLI |
| W6-EV-003 | PASS - imported/rendered presentation accepted by maintainer ("Das passt") |
| W6-EV-004 | PASS - four controls and card-edge taps explicitly confirmed ("ja") |
| W6-EV-005 | Readability/layout accepted; low-light: PASS - maintainer explicitly confirmed v0.2.0 under usual dim lighting. |
| W6-EV-006 | PASS - local semantics preserved; manifest and source checks passed |
| W6-EV-007 | PASS - visibility and interaction with the iCUE foreground window closed explicitly confirmed |

## Evidence provenance and limits

The maintainer supplied the official CLI success log and subsequently accepted
the presentation. The follow-up "ja" answered a combined question about all four
controls, edge taps, and visibility/interaction with the iCUE window closed.
These are maintainer-reported physical observations, not automated device tests.
The screenshot shows SENT 1, ON, UNKNOWN and C without apparent clipping or
overlap; its exact capture surface was not separately established. The physical
acceptance rests on the maintainer's feedback rather than screenshot provenance.

Package: xeneon-edge-base-deck.icuewidget, version 0.2.0.
SHA256: 6ABC45F320EAF35ED149C193A11024B2C159F82C67319423F16A9C3413C55C90
No local user path or raw screenshot is included in public evidence.

Local Chromium checks: four full-card controls, state cycles, edge clicks,
keyboard activation, settings callbacks, long title, six-digit action counter,
and layout at 1689x697, 1688x696, 2560x720, 840x344 and 642x265 passed.
These supplement the device feedback; they are not QtWebEngine/device evidence.
At L, tested control surfaces are approximately 824x285px. The 96px floor is
retained; this test does not independently retest a precisely 96x96px surface.
In-memory state resets on widget reload as before; restart persistence is not claimed.

Low-light: PASS - maintainer explicitly confirmed v0.2.0 under usual dim lighting.

## Exploration / lessons learned

v0.1.2: stretched regions. v0.1.3: worse presentation. v0.1.4: diagnostic only.
v0.1.5: import PASS, improved vs 0.1.2, proportions FAIL, clipping YES,
overlap NO, overall presentation FAIL, text too small for the maintainer.
ACTION/TOGGLE/STATUS/SELECTION PASS; 96px suitable; no mis-triggers.
Do not convert placeholder ja/nein persistence answers into PASS.

Measured v0.1.4: INNER/CLIENT 1689x697, DPR 1.00, SCREEN 2560x720,
VV 642x265. INNER/CLIENT is authoritative for this presentation.

PHYSICAL READABILITY > PREVIEW DENSITY
TOUCH SURFACE > MICRO CONTROL
REAL DEVICE > PREVIEW PARITY
ACTION SENT != STATE CONFIRMED
UNKNOWN != HEALTHY
COLOUR != SOLE MEANING
IMPLEMENTED != DEVICE_TESTED

The 0.2.0 patch targets the actual dirty nine-file v0.1.5 snapshot on commit
98b64ed43f8dd1de09ac52d3b64e40f65e1494fe. Its delivery inventory contains raw
SHA256 before/after hashes for all nine files. Six files change; main.js,
resources/icon.svg and translation.json remain byte-identical.
No private raw screenshots are added to public evidence.

SOURCE EXISTS != VALIDATED
VALIDATED != IMPORTED
IMPORTED != DEVICE_TESTED
SURFACE PERSISTS != INTERACTION PERSISTS
