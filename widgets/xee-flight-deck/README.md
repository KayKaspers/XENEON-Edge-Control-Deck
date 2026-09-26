# XENEON Edge Star Citizen Deck 0.8.0

Six sets: Flight, Combat, Mining, Salvage, Cargo and Ship Utility. Each has four
pages with four large controls. The maintainer-approved 0.7.1 cockpit design is
retained. All 16 Flight controls keep their assignments. No GameGlass software,
account, profile or artwork is required.

The native Stream Deck device now requests **8 columns x 8 rows**. There are
54 distinct assigned command slots: 0-17 and 20-55. Slots 18/19 and 56-63 remain
empty. Slot numbers are permanent across sets; shared actions share one slot.
The provider API is used to resize existing devices after connection. Native
8x8 capacity and profile migration still require a device check.

**Migration:** The widget ID stays com.kaykaspers.xee.flight. Back up the old
Stream Deck profile before import. Switching from 5 to 8 columns changes the
physical row/column of most slots. Check by numeric slot and function against
docs/flight/STREAM_DECK_SLOTS.csv; do not assume physical cells stayed mapped.
Slot 1 is SET SCM and 17 SET NAV, never the retired B-toggle.

Import at horizontal XL (2536x696); L (1689x697) and full panel (2560x720) are
also browser-checked. Home > Star Citizen exposes the six sets over two pages.
The left rail selects task pages. The entire card is one action.

Explicit COMBAT in Flight requests SCM then changes deck. Explicit FLIGHT from
the other sets requests NAV then opens Flight. Ordinary navigation sends nothing
and clears enable. Local task-page changes preserve enable. Mining/Salvage also
offer a separate SCM request. A send does not prove the mode changed in-game.

Each trusted tap submits one press/release pair with a one-second duplicate
guard. No repeated holds, automatic retries, input queue or game-command macros
are supplied. Enable clears on ordinary navigation, blur/hidden document,
initialization, disconnect or error. The accepted WP-010 operating condition
remains: Star Citizen Smart Profile, empty default, Stream Deck editor minimized
or closed. Local enable is not an unconditional process-focus guard.

Only ATC (Left Alt+N) has historical game acceptance. Other controls need their
matching installed game and Stream Deck bindings. A virtual key pair does not
provide OS key holds, mouse wheel/movement or joystick axes. Leave unsupported
commands empty and record them instead of substituting a different command.
The widget cannot inspect assignment contents or detect the active ship.

Conditional actions are labelled. Salvation fixed heads, MOTH crew workplaces,
Golem modules and HULL A/B cargo spindles are covered in
docs/flight/STAR_CITIZEN_SETS.md. Cargo tractor actions require the appropriate
tool and workplace. No live ship state, cargo amount or laser percentage is
claimed. All requests remain unconfirmed by the game.

See docs/flight/STAR_CITIZEN_SETS.md for setup, fleet notes, references and the
single-session test. docs/flight/TELEMETRY_OPTIONS.md records the current
telemetry research, not an implemented bridge.

Physical acceptance is pending. Base/navigation source folders are unchanged.
Rollback requires the previous package AND its matching saved Stream Deck
profile/device layout. Restoring only the widget does not undo profile edits.
