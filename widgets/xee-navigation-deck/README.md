# XENEON Edge Navigation Deck 0.3.1

XEE-WP-007 native candidate; physical-device acceptance PENDING.
Separate widget ID: com.kaykaspers.xee.navigation. It coexists with the accepted
com.kaykaspers.xee.basedeck 0.2.0 instead of replacing its interaction demo.
Name in iCUE: XENEON Edge Navigation Deck. Import at horizontal XL for full width (official content area 2536x696).
The panel is 2560x720; iCUE owns the surrounding margin. L remains supported.
interactive=true; min_app_version=5.47; remaining platform/device requirements
are inherited from the validated base manifest. No settings controls are exposed:
this candidate deliberately uses the reviewed palette and has no subscriptions.
iCUE callbacks are no-ops and do not reset the selected route.

Home: Star Citizen, OBS Studio, Discord, System. Star Citizen page 1 contains
Flight, Combat, Mining (pickaxe), Salvage (recycle); page 2 contains Cargo (boxes)
and Ship Utility. Back returns to the canonical parent and retains the SC page.
Home resets the page. Reload starts Home. No restart/route storage is claimed.
Destinations explicitly say NOT CONNECTED. No app actions, telemetry or shortcuts.

CSS and navigation JavaScript derive from the accepted browser prototype.
Lucide original SVGs, upstream LICENSE and pinned source hashes are local assets.
The packaged resources/icon.svg is reused byte-for-byte from the accepted base
widget; it is not a new logo. See ASSETS.md for the Lucide provenance policy.

Rollback: retain the original Base Deck widget and its v0.2.0 package. Remove
this separate candidate from the iCUE slot and select the Base Deck again.
No replacement import or downgrade is required. WP-006 source is unchanged.

Validate and package in a temporary copy using the official icuewidget CLI.
Never store generated .icuewidget artifacts inside the repository.
