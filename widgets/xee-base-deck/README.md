# XENEON Edge Base Deck 0.2.0

Template-Derived Base Control Deck for XEE-WP-006.
Physical XENEON L 1689x697 is authoritative. Preview parity is not a goal.
Flat 2x2 macro-grid, four whole-card buttons, semantic tokens from one
--layout-unit, no card/panel height chain, 96px minimum touch surface.

PHYSICAL READABILITY > PREVIEW DENSITY
TOUCH SURFACE > MICRO CONTROL
REAL DEVICE > PREVIEW PARITY
ACTION SENT != STATE CONFIRMED
UNKNOWN != HEALTHY
COLOUR != SOLE MEANING
IMPLEMENTED != DEVICE_TESTED

ACTION counts local sends, TOGGLE changes local ON/OFF, STATUS cycles
UNKNOWN/READY/ATTENTION, SELECTION cycles A/B/C. No external state is confirmed.
main.js and the iCUE event bridge retain v0.1.5 behaviour. No app bindings,
navigation or storage were added. State resets on widget reload as before.
Manifest: interactive=true, min_app_version=5.47, version=0.2.0.

v0.1.x is exploration / lessons learned, not the accepted layout baseline.
See docs/control-deck/BASE_CONTROL_DECK.md for references and physical retest.
Use the supplied resume script to validate and package outside the repository.
