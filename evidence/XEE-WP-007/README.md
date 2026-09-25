# Evidence - XEE-WP-007

Status COMPLETE. Native v0.3.1 XL accepted and integrated on 2026-09-25.

| ID | Evidence | Status |
|---|---|---|
| W7-EV-001 | Route contract and Home/Back rules | Draft implemented in prototype |
| W7-EV-002 | Browser route/focus/geometry checks | PASS at 1689x697 |
| W7-EV-003 | Maintainer architecture review | Hierarchy accepted; visual polish requested |
| W7-EV-004 | Native CLI validate/package | PASS - 0.3.1 / official CLI 0.4.47 |
| W7-EV-005 | Physical navigation/readability/touch/low-light | PASS - maintainer confirmed v0.3.1 XL |
| W7-EV-006 | iCUE-window continuity | PASS - maintainer confirmed v0.3.1 |

No application bindings or external state assertions are tested or implemented.


## Browser verification

Chromium at 1689x697: all ten non-home destinations, canonical Back, parent-tile
focus restoration, SC Prev/Next boundaries, retained page on Back, Home page
reset, Enter/Space, invalid-route fallback and reload-to-Home passed.
All buttons meet >=96px in both dimensions; no document scroll overflow or
button-content clipping was measured. No JavaScript page errors occurred.
This is browser evidence only. No physical or QtWebEngine acceptance is claimed.

## Visual revision

Restrained surface gradients, yellow edge accents and original Lucide functional
icons added after hierarchy approval. Licenses, pinned source revision and
per-file hashes accompany the local SVG assets. No invented or vendor logo.
Browser navigation/focus/geometry suite rerun successfully at 1689x697 after
the visual changes; Home and Star Citizen page 2 renders visually inspected.
Historical browser-stage result; later v0.3.1 physical acceptance is recorded below.


## Native candidate 0.3.0

Widget: XENEON Edge Navigation Deck (com.kaykaspers.xee.navigation).
Manifest: interactive=true, min_app_version=5.47; separate from the unchanged
v0.2.0 Base Deck. Official CLI 0.4.47 validate and package: PASS.
Artifact: xeneon-edge-navigation-deck.icuewidget
SHA256: 574B7D13C5CFB45F33DD0A4E3C21C00E5F52A43A5DDB261634B5304F7A72ED75

Native-source browser route/focus/geometry checks passed at 1689x697. All local
icons loaded; iCUE initialization/data callbacks preserved the selected SC page.
Package contents include original Lucide SVGs, LICENSE and provenance metadata.
No application data or credentials are present. Generated packages stay outside
the public repository. Physical import, touch, low-light and foreground-window
continuity of this new candidate remain unverified.

## Full-width candidate 0.3.1

Maintainer authorized full-width XL. Official content target 2536x696; panel
2560x720 also checked, with L 1689x697 retained. Semantic token overrides only
at CSS aspect ratio >=3:1; navigation JavaScript and accepted base bytes unchanged.
CLI 0.4.47 validate and package PASS. Browser navigation suite PASS at all three
sizes: canonical Back, page retention, Home reset, keyboard, 96px targets, no
overflow/clipping or JS errors. Local icon load check now waits for image
completion after route changes (the prior immediate assertion raced loading).
Package SHA256: D6DB1BC5864BBBE5D2D18D0136750137113AE3819DB06A7D1D0B453FE0668F54
Physical XL import, readability, touch and low-light: PASS per subsequent maintainer confirmation.
No staging, commit, push or release performed.

## Physical acceptance - 2026-09-25

Maintainer supplied a 2560x720 screenshot of Star Citizen page 1/2 spanning
the display width. Visual inspection: all four tiles, header and footer visible,
with no apparent clipping or overlap. The screenshot alone does not prove touch.
In direct response to the grouped device-test question, maintainer answered
"ja": Home/Back and both pages reliable, edge touches working, readable and
comfortable in dim lighting, usable with the iCUE foreground window closed.
These results apply to the delivered v0.3.1 package with the hash above.
Raw screenshot remains private; no new asset or package bytes were changed.
Review outcome: COMPLETE following verified maintainer integration.

Integration verified: `3eb0b44dcfa3e4f3044bb092d03d670d4889f28e` on local main and GitHub main.
No subsequent Work Package is authorized by this completion.
