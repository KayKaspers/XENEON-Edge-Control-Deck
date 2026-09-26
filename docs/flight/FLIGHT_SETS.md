# Flight sets - GameGlass-inspired candidate 0.7.1

**Historical 0.7.x setup/reference.** Current 0.8.0 instructions and fleet notes
are in [STAR_CITIZEN_SETS.md](STAR_CITIZEN_SETS.md), with the current 8x8 map in
`STREAM_DECK_SLOTS.csv`. Do not use this historical 5x4 row/column table for 0.8.0.

## Design and scope

The maintainer requested GameGlass as the reference for sets and a complete
Flight candidate before the next game launch. Four task pages provide 16
controls, with a permanent Flight/Combat transition and connection/enable in
the header. Each page uses four large touch surfaces in a 2x2 grid.

| Page | Functions |
|---|---|
| Start & Landung | ATC, Flight Ready, landing gear, VTOL |
| Flugsteuerung | cruise control, coupled/decoupled, speed limiter, ESP |
| Avionik | starmap, scan mode, single ping, quantum travel request |
| Schiffssysteme | exterior lights, doors, locks, engines |

The UI is an original XEE implementation: framed graphite panels, mint action
plates, yellow page selection, full-width XL and original Lucide assets.
The v0.7.1 presentation follows the maintainer's supplied collage; see
`COCKPIT_DESIGN.md`. Assignments are identical to v0.7.0. One layout unit supplies
semantic sizing tokens. Touch targets are at least 96px at XL/L, without
scrolling or a chain of fixed panel heights.

PHYSICAL READABILITY > PREVIEW DENSITY.
TOUCH SURFACE > MICRO CONTROL.

Combat, Mining, Salvage and Cargo will use the same task-group pattern when
their respective scope is authorized. Cargo remains separate from Mining.
This candidate adds no weapon controls, continuous flight axes, power/shield
macros or speculative ship-state displays.

## Reference record (reviewed 2026-09-25)

- [GameGlass](https://gameglass.gg/): touch interfaces with editable actions.
- [Caliber Dynamics' own GameGlass shard guide](https://caliberdynamics.org/dispatch/cdyn-gameglass-shards-guide/):
  a community implementation, not the official default. Its role-based pages
  and separation of flight, systems and mode controls informed our grouping.
- [GameGlass keybind setup](https://support.gameglass.gg/en/articles/8188939-star-citizen-keybind-setup):
  some functions require custom bindings. The published 4.0 XML is not evidence
  that all defaults are valid in the maintainer's 4.10.1.
- [GameGlass 4.0 XML](https://download.gameglass.gg/keybinds/GameGlass-StarCitizen_4.0.xml):
  direct SCM/NAV command identifiers informed the mode contract.
- [Elgato provider API](https://docs.elgato.com/icue/widgets/references/plugins/stream-deck/):
  virtual key events and row-major slot numbering.
- Lucide original SVGs, pinned revision and hashes are recorded in
  `widgets/xee-flight-deck/assets/lucide/provenance.json`; upstream license
  accompanies them. No GameGlass logos, art, screenshots or code are embedded.

## One setup, then one joint game session

The widget never installs or replaces game/Stream Deck profiles. It sends a
virtual slot event. Each assigned Stream Deck action must implement the named
game command, including any required hold behavior. The table is the stable
slot contract; it does not assert that an unverified shortcut works.

1. Keep a backup of the accepted Stream Deck profile before expanding the device.
2. Import 0.7.1 into iCUE at XL. Verify the virtual device has 5 columns and
   4 rows. Keep the Smart Profile's default profile empty; configure the
   Star Citizen-specific profile. Keep the Stream Deck editor minimized/closed
   during operation as already accepted in WP-010.
3. Use the table below to prepare all Stream Deck slots together. Slots are
   zero-based; visible row/column positions below are one-based.
4. At the next planned game launch, inspect the installed version's Advanced
   Controls once and finish all missing assignments together. Do not import
   the entire GameGlass profile over the accepted Standard setup.
5. Exercise the checklist in the same session. Record unavailable or renamed
   commands; do not substitute a different action under the same button label.

## Stable Stream Deck assignment table

| Slot | Row / col | Command | Binding status / setup |
|---:|---|---|---|
| 0 | 1 / 1 | ATC landing/takeoff request | Left Alt+N; accepted in WP-010 |
| 1 | 1 / 2 | **Set SCM directly** | Custom binding required; replace old B toggle |
| 2 | 1 / 3 | Landing gear toggle | N from previous candidate; verify once |
| 3 | 1 / 4 | Exterior lights toggle | L from previous candidate; verify once |
| 4 | 1 / 5 | Flight Ready | Right Alt+R from previous candidate; verify once |
| 5 | 2 / 1 | VTOL toggle | Use installed game binding |
| 6 | 2 / 2 | Cruise control toggle | Use installed game binding |
| 7 | 2 / 3 | Coupled/decoupled toggle | Use installed game binding |
| 8 | 2 / 4 | Speed limiter toggle | Use installed game binding |
| 9 | 2 / 5 | ESP toggle | Use installed game binding |
| 10 | 3 / 1 | Starmap open | Use installed game binding |
| 11 | 3 / 2 | Scan mode toggle | Use installed game binding |
| 12 | 3 / 3 | Single ping | Use installed game binding; no auto-ping loop |
| 13 | 3 / 4 | Engage prepared quantum travel | Verify command and hold/press requirement; see below |
| 14 | 3 / 5 | Doors open/close toggle | Use the toggle, not a one-way open-only action |
| 15 | 4 / 1 | Lock/unlock toggle | Use the toggle, not a one-way lock-only action |
| 16 | 4 / 2 | Engines on/off toggle | Use installed game binding |
| 17 | 4 / 3 | **Set NAV directly** | Separate custom binding required |
| 18 | 4 / 4 | Reserved | Leave empty |
| 19 | 4 / 5 | Reserved | Leave empty |

Direct mode action identifiers from the reference are
`v_master_mode_set_scm` and `v_master_mode_set_nav`.
The reference assigns Right Alt+Insert and Right Alt+Numpad Decimal respectively.
Those are **GameGlass custom assignments, not Standard defaults**. They are
examples only; use conflict-free bindings verified in the installed game, and
the identical shortcuts in Stream Deck.

Quantum remains a single request to engage an already prepared jump. Route
selection, operator mode, alignment and readiness stay with the pilot. No mouse
click, hold duration or chained preparation macro is supplied by this widget.
Only populate slot 13 after configuring the correct quantum-specific command
and any necessary hold in Stream Deck. A simple immediate virtual press/release
does not itself provide an OS key hold. If that cannot be configured reliably,
leave it empty and record the unresolved binding.

For any unavailable toggle, leave its slot empty and record the exact available
commands. The widget cannot inspect assignments and cannot know that a slot is
empty. Connected and enabled means the transport may send; it does not mean
each function has passed a game test.

## Joint acceptance sheet

No additional game launch is needed while preparing the UI and profile.

- [ ] All 16 slots correspond to their named command (record any unavailable).
- [ ] Start/landing: ATC, Flight Ready, gear, VTOL.
- [ ] Flight: cruise, coupled, limiter, ESP.
- [ ] Avionics: starmap, scan, one ping, prepared quantum request.
- [ ] Systems: lights, doors, locks, engines; test in an appropriate ship context.
- [ ] Flight -> Combat requests SCM; Combat -> Flight requests NAV.
- [ ] Repeat after an external manual mode change; no toggle inversion.
- [ ] Local page changes send nothing and preserve enable; Home/Back clears it.
- [ ] Empty default profile produces no game action outside Star Citizen.
- [ ] Disconnect/restart requires enable again; no delayed or replayed actions.
- [ ] XL edge touch, physical readability and low light accepted.

All boxes remain pending for 0.7.1. Automated mocks are separate evidence.
