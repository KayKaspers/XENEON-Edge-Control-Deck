# Star Citizen sets - candidate 0.8.0

The maintainer approved keeping the 0.7.1 cockpit design and requested the
remaining sets. Candidate 0.8.0 provides six sets with four pages each. Every
page keeps four large full-surface actions. Cargo stays separate from Mining.
Flight's 16 controls and mode slots retain their meanings. The CSS is unchanged.

| Set | Four task pages |
|---|---|
| Flight | Start/landing; handling; avionics; systems |
| Combat | Targeting; weapon modes; countermeasures/missiles; handling |
| Mining | Operation; laser power; modules; approach/search |
| Salvage | Operation; beam tools; structural salvage; approach/ship |
| Cargo | Loading/access; tractor; approach/delivery; HULL/ship |
| Ship Utility | Access; drive/gear; avionics; assists |

Combat includes target selection, gun/missile modes, gimbal/PIP selection,
decoy/noise requests and missile type/count. It has no gun-fire, missile-launch,
self-destruct or ejection controls. Mining power and cargo positioning issue one
request per tap; no held-input or automatic repeat loops are introduced.

## Setup once, then test together

The widget submits native Stream Deck virtual-key events. It does not install
game bindings, keyboard/mouse software, profiles or GameGlass. Most bindings are
still unverified in the maintainer's Star Citizen 4.10.1 Standard configuration.
Only ATC (Left Alt+N, slot 0) has historical WP-010 physical acceptance.

1. Export/back up the existing Stream Deck profile before importing the new
   widget. Keep the prior package and its matching profile for rollback.
2. Import `xeneon-edge-star-citizen-deck.icuewidget` at horizontal XL. The widget
   ID remains `com.kaykaspers.xee.flight`; the display name changes to Star
   Citizen Deck. Keep only the intended candidate instance active.
3. Verify the virtual device presents **8 columns x 8 rows**. The provider API
   accepts dimensions and supplies `updateVirtualDeviceSize`; browser mocks
   verify our calls, not the installed host's capacity. Native 8x8 support and
   migration are a required device check. If the host presents fewer slots,
   stop setup; do not put different commands into reused slots.
4. Review every assignment using `STREAM_DECK_SLOTS.csv`. Slots 0-17 retain
   their meaning; 18/19 remain empty; 20-55 add the other sets; 56-63 stay empty.
   **The old 5-column row/column positions change.** Map by numeric slot and
   named function. Do not assume expansion preserves actions at the same
   physical cell. The widget cannot inspect or validate assigned actions.
5. Preserve the accepted Smart Profiles arrangement: a Star Citizen-specific
   profile and empty default profile; Stream Deck editor minimized/closed.
   Widget enable is not an unconditional foreground-process guard.
6. At the next planned game launch, review Advanced Controls and complete all
   assignments together. The CSV contains intended commands, not invented
   default keys. Verify direct SET SCM and SET NAV separately; never substitute
   one B-toggle for both. Do not overwrite the Standard profile with GameGlass's
   complete custom profile merely to obtain a few commands.
7. For ship/context-dependent commands, choose the matching game action and
   Stream Deck action deliberately. A virtual key pair does not implement a
   held OS key, mouse wheel, mouse movement or joystick axis. Tractor rotation,
   reach and quantum may require a suitable installed action or custom game
   binding. If no reliable mapping exists, leave that slot empty and record it;
   the UI is not evidence that the command is available.

All sets share one permanent slot map. No page-change macro or automatic Stream
Deck profile switch can redirect the same slot to another action. Ordinary
navigation sends nothing and clears enable; page selection inside a set keeps
enable. Each set remembers its own page for the current widget session.

Explicit Flight -> Combat requests SCM (slot 1). Explicit FLIGHT from Combat,
Mining, Salvage, Cargo or Utility requests NAV (slot 17). Mining and Salvage
also expose SCM as a separate action. These requests do not prove game state.
See `MASTER_MODE_SWITCH.md` and `TELEMETRY_OPTIONS.md`.

## Fleet-specific use

The fleet below was supplied by the maintainer. No ship is automatically
detected, no ship-specific profile is installed, and no current loadout is
assumed. The UI marks conditional tools; this table describes how to use them.

| Fleet | Application to the set |
|---|---|
| Drake Golem | CIG describes a bespoke mining head with mining-module slots. Module buttons apply only to active modules actually fitted; do not assume all three are populated. Golem OX is a different cargo variant and is not substituted for the maintainer's Golem. |
| MISC Prospector / Argo MOLE | Use the active mining workplace and its fitted equipment. For MOLE, verify the occupied mining station; the deck does not control other crew members' heads or change seats. |
| RSI Salvation | Its bespoke heads/scraper attachments are not interchangeable according to CIG. Do not assign the generic left/right head-cycling buttons as if interchangeable heads were present. |
| Drake Vulture | Check the fitted heads and available beam/mode commands together. No assumed live head selection, cargo-buffer amount or fill level is displayed. |
| Argo MOTH | CIG separates three manned scraping turrets from pilot-controlled structural salvage arms. Use beam controls at a scraping station and structural controls at the pilot station; the copilot's missile turret is a different workplace. |
| Drake Ironclad | Tractor access must match the station/beam actually being operated. The set does not claim that one remote-turret binding addresses every tractor. Roof/filler/elevator terminals remain in-game interactions unless a matching bindable command is verified. |
| MISC HULL A / B | Cargo includes a dedicated spindle request (slot 55); bind the appropriate transform command only after checking the installed game. It has no application to Ironclad. Check extension/clearance on the ship. HULL B's Q&A describes pilot/copilot tractor access with copilot priority and a pilot-access bug at publication; test current behavior rather than assume the old bug persists. |

Structural salvage availability, target limits and outputs depend on the ship,
tool and current build. FRACTURE/DISINTEGRATE labels are requested operations,
not proof that the target is eligible. No automated target acquisition or
multi-step destructive sequence is supplied.

## One-session acceptance record

Preparation and browser checks need no game launch. At the planned joint test:

- [ ] Native device is 8x8; existing and new positions match the CSV.
- [ ] Slot 0 ATC regression, then all 16 Flight actions and SET SCM/NAV.
- [ ] Combat targeting, modes, countermeasures and missile selection/count.
- [ ] Mining operation, stepwise power and fitted modules on the chosen ships.
- [ ] Salvage tools/spacing and structural operations in the proper workplace.
- [ ] Cargo tractor mappings, HULL spindle and shared access/delivery controls.
- [ ] Utility reuses the same assignments; no duplicate setup per set.
- [ ] Record unavailable commands/ship restrictions before claiming coverage.
- [ ] Home/Back sends nothing; local pages preserve enable; reconnect requires enable.
- [ ] Empty default profile, editor minimized, external manual mode changes.
- [ ] Physical XL/L readability, edge touch and usual dim-light comfort.

These are pending; mocked delivery is not game acceptance. PHYSICAL READABILITY
> PREVIEW DENSITY. TOUCH SURFACE > MICRO CONTROL.

## Sources reviewed 2026-09-25

- [GameGlass keybind setup](https://support.gameglass.gg/en/articles/8188939-star-citizen-keybind-setup)
  and its [published 4.0 profile](https://download.gameglass.gg/keybinds/GameGlass-StarCitizen_4.0.xml):
  reference command identifiers and custom bindings, not proof of 4.10.1 defaults.
- [Elgato Stream Deck provider API](https://docs.elgato.com/icue/widgets/references/plugins/stream-deck/):
  virtual dimensions, resize and press/release calls.
- [CIG Golem Q&A](https://robertsspaceindustries.com/en/comm-link/engineering/20509-Q-A-Drake-Golem).
- [CIG Salvation Q&A](https://robertsspaceindustries.com/en/comm-link/engineering/20881-Q-A-RSI-Salvation).
- [CIG MOTH Q&A](https://robertsspaceindustries.com/en/comm-link/engineering/21011-Q-A-Argo-MOTH).
- [CIG HULL B Q&A, current ship](https://robertsspaceindustries.com/en/comm-link/engineering/21085-Q-A-MISC-Hull-B).
- [CIG DefenseCon 2956 ship Q&A](https://robertsspaceindustries.com/en/comm-link/engineering/21086-Q-A-DefenseCon-2956-New-Ships).
- [CIG peripheral/keybinding guide](https://support.robertsspaceindustries.com/hc/en-us/articles/360000134267-Set-up-keybindings-for-your-peripherals).

The creator's GameGlass workflow references are retained in `FLIGHT_SETS.md`.
No GameGlass artwork, logos, software or profiles are bundled. All icons are
original Lucide SVGs with pinned revision, hashes and upstream license.
