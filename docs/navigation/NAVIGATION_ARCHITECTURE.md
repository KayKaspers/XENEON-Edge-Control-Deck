# Navigation architecture - WP-007 proposal

Status: navigation hierarchy accepted by Human Maintainer; visual polish proposed.
Browser prototype only; native navigation is not yet device-tested.
Basis: design-system/XENEON_PRODUCT_PROFILE.md, PATTERN_MAPPING.md and the
accepted WP-006 physical L presentation. No external runtime dependency.

## Route hierarchy

HOME
- STAR CITIZEN
  - FLIGHT (sc.flight)
  - COMBAT (sc.combat)
  - MINING (sc.mining)
  - SALVAGE (sc.salvage)
  - CARGO (sc.cargo)
  - SHIP UTILITY (sc.utility; display alias for Product Profile System / Utility)
- OBS STUDIO (obs)
- DISCORD (discord)
- SYSTEM (system; global system domain, distinct from Ship Utility)

Home retains four full-card domain targets. Star Citizen uses two 2x2 pages:
page 1 Flight/Combat/Mining/Salvage; page 2 Cargo/Ship Utility.
Unused page-2 cells contain no controls. No automatic pagination or timed switch.
OBS, Discord and System initially open explicitly unconnected route placeholders;
their eventual inner hierarchies belong to their respective integration WPs.

## Global bar and interaction rules

Fixed order: HOME, BACK, current location, PREV, NEXT. The bar occupies a
content-sized row above the macro-grid. Navigation buttons have >=96px on both
axes and text labels. Disabled controls keep their positions. Home and Back are
disabled at Home; Prev/Next only operate on the Star Citizen index.

HOME always returns directly to Home and resets the Star Citizen page to 1.
BACK selects the canonical parent, not the last visited screen. From a Star
Citizen leaf it returns to the same index page; from any top-level domain to Home.
Domain switching goes through Home: at most two taps, no hidden swipe gesture.
The longest route is Home -> Star Citizen -> subdeck, two choices from Home.

Navigation is synchronous and one click produces one transition. No animation
is required. Local page changes never imply an external application is running.
Fresh load starts at Home; route state is session-only. No localStorage,
URL/hash routing, history manipulation or background application detection.
Unknown route resolves to Home. Native candidate must preserve these semantics.

After entry, focus moves to the visible location heading; after Back it returns
to the parent tile when present. Paging focuses the location heading before the
page control can become disabled. Standard Tab, Enter and Space remain usable.
No separate keyboard shortcut or Escape override is introduced.

## Presentation and scope

One --layout-unit feeds semantic typography, spacing and radius tokens. The
physical XL slot is the current full-width target; L remains supported. 2x2 cards consume remaining height; no fixed
card-height chain. The larger global bar must be retested on-device.
PHYSICAL READABILITY > PREVIEW DENSITY
TOUCH SURFACE > MICRO CONTROL

The prototype is prototypes/wp007-navigation/index.html. It is standalone HTML
for browser review, not an importable .icuewidget. widgets/xee-base-deck remains
the unchanged, accepted v0.2.0 rollback baseline. No new version or installed
widget change is claimed. Portrait and arbitrary small slots are not accepted.

## Physical acceptance sequence for the later native candidate

Home -> each domain -> Back; Home -> SC page 1 -> each subdeck -> Back;
SC page 2 -> Cargo/Utility -> Back (still page 2); Home (resets page 1);
rapid deliberate navigation; edge taps; no overlap/clipping; clear location;
comfortable seated readability; dim-room check; operation with iCUE window closed.

## Visual proposal

Human Maintainer accepted the navigation and requested graphical polish using
licensed/approved assets, without invented logos. The prototype adds original
Lucide functional SVGs, local license/provenance, restrained gradients and accent
rules. See prototypes/wp007-navigation/ASSETS.md. Geometry and text-labelled global
navigation retain the same semantics; no mark is a substitute brand logo.

## Maintainer naming refinement

Cargo is a standalone deck with the original Lucide boxes icon. Mining remains
a separate, single deck on page 1 with the original Lucide pickaxe icon. The
Industrial label is removed from this navigation proposal at maintainer request.
This refines the earlier Product Profile family label; it does not create a
second Mining route or change the scope of the future integration WPs. Salvage
uses the original Lucide recycle icon.

## Native candidate and rollback

Version 0.3.1 is implemented in widgets/xee-navigation-deck with the separate
ID com.kaykaspers.xee.navigation and display name XENEON Edge Navigation Deck.
Import it at horizontal XL for full width; do not overwrite the Base Deck. The accepted
v0.2.0 sources remain unchanged and a delivery backup was saved. To roll back,
remove the navigation candidate from the slot and select the Base Deck again.
No route storage or app bindings were introduced. The native candidate has no
personalization controls; it uses the reviewed palette. All icon licenses and
source hashes ship in the package. Physical v0.3.1 XL acceptance is recorded in evidence/XEE-WP-007/README.md.

## Full-width refinement (0.3.1)

Maintainer requested the entire display width; no right-side region is reserved.
The official XL horizontal content size is 2536x696 within the 2560x720 panel.
iCUE must assign the XL slot: CSS cannot enlarge the host viewport.
A CSS aspect-ratio breakpoint at 3:1 increases semantic title, label and icon
tokens from the same layout unit. The 2x2 grid and route/page semantics stay
unchanged; L retains its previous styling. No manifest size override is invented.
Reference: https://github.com/Corsair-Labs/icue-widget-builder/blob/main/skills/icue-widget-builder/SKILL.md
Physical XL readability, touch reach, navigation, dim-room and foreground-window
continuity accepted by the maintainer on 2026-09-25. Git integration pending.
