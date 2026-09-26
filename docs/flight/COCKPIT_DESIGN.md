# Cockpit presentation - v0.7.1

The maintainer approved keeping this design for now. Candidate 0.8.0 reuses
the same CSS across all six sets; it does not claim new physical acceptance.

The maintainer supplied a collage of control-panel designs and requested a
stronger visual treatment after v0.7.0. The collage is visual reference only;
it is not distributed or embedded in the widget.

## Translation to XENEON

- Dark graphite panels with fine inset edges, corner fasteners and restrained
  surface texture create the appearance of mounted cockpit modules.
- Pale mint labels and backlit action plates establish the Flight palette.
  Yellow identifies the selected page; the Combat request uses muted amber.
- Round icon bezels identify commands; rectangular bezels identify toggles.
  These are decorative shapes inside one full-surface button, not separate
  small hit targets or displays of an ON/OFF ship state.
- Locally available Bahnschrift is used for technical labels, with Segoe UI
  and sans-serif fallbacks. No font files are bundled or fetched.
- Existing original Lucide SVGs are reused with their license and provenance.
  No logos or images from the reference are copied or invented.

Four pages, four large controls per page, the permanent left selector and the
global header remain. Sizes derive from the one layout unit and semantic
tokens. All visible buttons remain >=96px at L, XL and the full panel size.
Only the action icon wrapper and CSS presentation change; slot assignments,
provider handling, NAV/SCM requests, arming and cooldown behavior are preserved.

## State and interaction

Backlighting means the widget action is enabled. Depressed styling appears
only during a press; hover and keyboard focus are separate visual feedback.
No persistent physical switch position, gauge value or game telemetry is drawn.
The status line continues to distinguish submitted events from confirmed game
state. Local connection/enable controls show only their actual local state.

PHYSICAL READABILITY > PREVIEW DENSITY.
TOUCH SURFACE > MICRO CONTROL.

## Verification

Existing transport, mode-switch and all-action tests pass. Browser renders
cover 2536x696, 1689x697 and 2560x720. All four pages were visually inspected
across XL/L, including the longest labels. The screenshots use a mock provider
and do not establish physical readability, low-light comfort or game acceptance.
Those checks stay part of the planned joint device/game session.
