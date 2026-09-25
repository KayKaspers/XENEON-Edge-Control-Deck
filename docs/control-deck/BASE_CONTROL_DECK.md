# Base Control Deck - XEE-WP-006

Version 0.2.0: Template-Derived Base Control Deck, accepted presentation basis.
Official validation/package and maintainer device checks passed.
Execution is ready for review; integration/final work-package acceptance remain outstanding.

## Presentation contract

Authoritative CSS viewport: physical XENEON L, 1689x697 (DPR 1).
Diagnostic v0.1.4 also reported SCREEN 2560x720 and VV 642x265.
The visualViewport value does not determine the layout baseline.

One --layout-unit feeds all semantic size tokens. A flat 2x2 grid fills the
space between compact, content-sized header/footer. Each entire card is one
native button; no inner button, panel height, card height or navigation layer.
At L: labels ~21px, control names ~38px, values ~66px, footer ~20px.
Touch minimum is 96px in both dimensions. Layout below the target size is a
secondary fallback; compact landscape drops secondary copy, never changes logic.

PHYSICAL READABILITY > PREVIEW DENSITY
TOUCH SURFACE > MICRO CONTROL
REAL DEVICE > PREVIEW PARITY
ACTION SENT != STATE CONFIRMED
UNKNOWN != HEALTHY
COLOUR != SOLE MEANING
IMPLEMENTED != DEVICE_TESTED

## Behaviour and manifest

main.js is byte-for-byte unchanged from the captured dirty v0.1.5 source.
All interaction IDs and the inline iCUE lifecycle/settings bridge are retained.
Manifest changes only version: 0.2.0; interactive=true, min_app_version=5.47,
widget ID, target device, OS, metadata and framework requirement are preserved.
Icon and translation file are byte-for-byte preserved.
No app bindings, networking, navigation architecture or added persistence.
The existing state is in memory: closing the iCUE foreground window is different
from reloading the widget. Reload persistence is not claimed.

## v0.1.x - exploration / lessons learned

- 0.1.2: interactions worked; physical tile regions appeared stretched.
- 0.1.3: bounding cards inside full panels made the presentation worse.
- 0.1.4: diagnostic exploration established actual L runtime geometry.
- 0.1.5: improved over 0.1.2, but proportions still failed; clipping and text
  too small were reported. No overlap, four interactions worked, 96px touch
  remained suitable, no mis-triggers. Its persistence answers were unresolved.
- 0.1.6: abandoned direction; not used as this build's baseline.

Earlier readability PASS observations do not establish v0.1.5 or v0.2.0
acceptance. Height patches and preview matching are superseded by this baseline.

## Architecture references (reviewed 2026-09-25)

- [CORSAIR responsive layout/scaling](https://github.com/Corsair-Labs/icue-widget-builder/blob/main/skills/icue-widget-builder/references/responsive-layout-scaling.md): semantic sizing from one baseline, broad slot occupancy, device readability first.
- [CORSAIR CSS template](https://github.com/Corsair-Labs/icue-widget-builder/blob/main/skills/icue-widget-builder/references/css-template.md): central typography, spacing and radius tokens.
- [stealthsrc native widgets](https://github.com/stealthsrc/icue-edge-widgets) (now redirects to inerthel-agi): native packaging and shared XENEON styles.
- [criticalmiraw native CSS](https://github.com/criticalmiraw/widgets): flat grid/card patterns with shrinkable containers; no nested height chains. The standalone CSS endpoint was unavailable during this build; detailed patterns also come from the supplied prior research.
- [SilverFuel stage](https://github.com/SilverFuel/xeneon-widgets/blob/main/dashboard.html): whole-stage composition and touch-first design inspiration. Its current project has expanded to Auxora; the prior research's 2560x720 scaling formula and 116/132/160px touch sizes were not independently reverified here.

This is an original project implementation derived from architectural principles,
not a vendored template. No third-party runtime, host, app integration or routing
code is included. SilverFuel's stage principle is realized as one CSS viewport
baseline, not a transformed 2560x720 canvas that would shrink touch targets.
CORSAIR currently also discusses preview calibration; choosing no preview parity
is this project's explicit requirement, not a claim that CORSAIR forbids it.


## Device acceptance and remaining boundary

The Human Maintainer accepted the presentation with "Das passt" and confirmed
all four controls, edge taps, visibility and interaction with the iCUE foreground
window closed. The supplied CLI 0.4.47 log establishes official validation and
package success. See evidence/XEE-WP-006/README.md for provenance and artifact hash.
Low-light: PASS - maintainer explicitly confirmed v0.2.0 under usual dim lighting.

The measured L slot remains the target. Earlier XL preference is superseded by
the explicit v0.2.0 brief and accepted L presentation. WP-007 retains ownership
of final navigation. M4 is not achieved by the base deck alone.
No commit, push, completed integration or final work-package acceptance is implied.
