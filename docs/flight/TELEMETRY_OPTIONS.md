# Star Citizen telemetry assessment - 2026-09-25

The maintainer asked whether Star Citizen can return telemetry. This document
records research only; it does not authorize or implement a telemetry bridge.

No documented public cockpit-state API was located for reliably reading live
NAV/SCM, gear, shields, mining power or similar states. This is a research result,
not a claim that no experimental/community technique can exist.

[GameGlass's own plugin list](https://support.gameglass.gg/en/articles/10934948-plugins-page)
explicitly describes Star Citizen support as keybind-file placement only.
Its general telemetry support for other games therefore does not establish
Star Citizen state feedback. [RSI Public Telemetry](https://robertsspaceindustries.com/en/development)
is described as community machine-performance data, not cockpit-state export.

[CIG documents Game.log](https://support.robertsspaceindustries.com/hc/en-us/articles/360000065688-Send-In-Game-Files-for-RSI-Support)
as a diagnostic log for launches, server connections and other events/errors.
A local read-only parser could expose only events actually observed in that
build. A diagnostic event is not a complete, continuously refreshed ship state.
Nothing in this source validates gear/NAV/SCM/shield telemetry.

Possible later work under WP-015: inspect selected local log fields for an
event panel; separately investigate visible HUD recognition as an experimental
observation source. Neither is implemented in 0.8.0. HUD recognition would
depend on cockpit, camera, UI scale, language and occlusion. No automatic mode
switching should depend on unvalidated observations.

Current contract: provider connection and local enable are known; event
submission is known; game receipt and resulting state are unknown. Always show
requested actions as requests. Local remembered button presses are not telemetry.
