# Master Mode coupling - WP-011

Status: candidate 0.8.0 (SCM/NAV slot meanings unchanged); physical Star Citizen
4.10.1 test pending.

## Direct requests replace the unverified B toggle

The published [GameGlass 4.0 keybind profile](https://download.gameglass.gg/keybinds/GameGlass-StarCitizen_4.0.xml)
contains `v_master_mode_set_scm` and `v_master_mode_set_nav` in
`spaceship_movement`. These are evidence for separate commands, not confirmation
of the maintainer's 4.10.1 bindings. GameGlass documents use of custom bindings in
its [setup guide](https://support.gameglass.gg/en/articles/8188939-star-citizen-keybind-setup).

Our virtual slot 1 requests **SET SCM**, slot 17 requests **SET NAV**.
Assign each to its corresponding direct command in the installed game's bindings.
The original short B press from candidates 0.5/0.6 is retired. RSI's
[3.23 release notes](https://robertsspaceindustries.com/en/comm-link/Patch-Notes/19915-Star-Citizen-Alpha-3230)
describe a long B press, while the
[Quantum guide](https://support.robertsspaceindustries.com/hc/en-us/articles/360019449994-How-to-Quantum-Travel)
says pressing B. Neither validates the earlier short toggle in 4.10.1.

## Route contract

- On Flight, COMBAT / SCM anfordern sends slot 1, then opens the Combat view.
- On Combat, FLIGHT / NAV anfordern sends slot 17, then opens Flight.
- Mining, Salvage, Cargo and Ship Utility use the same explicit FLIGHT request.
- Mining and Salvage expose SCM separately on their operation page; merely
  opening either set does not send it automatically.
- A failed send, locked transport, preview, synthetic click or duplicate tap
  cannot change the route through these buttons.
- Opening a deck from the main navigation sends nothing. Merely opening Flight
  does not silently switch the game from SCM to NAV.
- Flight subpages preserve enable and send no key. Home/Back/re-entry clears it.

Direct mode requests remove the toggle's assumed starting state. They still
cannot prove that a command reached the game or that the ship completed the
transition. External mode changes do not update the UI. Header labels identify
the deck and requested destination, never observed game state.

If the installed version lacks these direct commands, leave slots 1/17 empty
and record that in the joint test. Do not silently replace both with B.
The accepted Smart Profiles condition from WP-010 remains unchanged.
