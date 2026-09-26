# Star Citizen set-batch evidence

Primary WP-011 remains ACTIVE. Mining/Salvage/Cargo slices (WP-012/013/014)
are in REVIEW. Current candidate **0.8.0** extends the dirty 0.7.1 worktree
over accepted WP-010 HEAD 8bc3d1e94346104a946933420065ebc09f9fa0c6.
The maintainer approved retaining the cockpit design and requested other sets.

## Automated evidence - 0.8.0

- tests/wp010/transport.cjs: initialization, normalized instance IDs, foreign
  signals, explicit enable, paired release, double tap, blur/navigation,
  disconnect, exceptions and missing host.
- tests/wp010/mode-switch.cjs: SCM slot 1 / NAV slot 17, explicit transitions,
  Combat target controls, no sends on ordinary navigation, failure blocks route.
- tests/wp010/flight-actions.cjs: all 16 original Flight actions on four pages;
  geometry at 2536x696, 1689x697 and 2560x720; trusted input, held-key repeat,
  preview/missing plugin, icon hashes and no unintended rearming.
- tests/wp010/all-sets.cjs: six sets / 24 pages at all three viewport sizes,
  exact independently specified slot pairs, page memory per set, page changes
  send nothing, explicit mode requests from every set, resize icon reentrancy,
  duplicate ready callback, resize failure and synchronous disconnect.
- All four test scripts PASS. All visible buttons >=96px, no overflow or JS
  errors, and all referenced icons load.
- Visually inspected representative Mining operation, Combat defense, Salvage
  beam tools and Cargo tractor at L; Cargo HULL/ship and Utility access at XL.
  All 48 XL/L task-page screenshots are local mock-provider UI evidence.
- SHA256 verifies retained 0.7.1 CSS is byte-identical. Forty-six original
  Lucide SVGs plus the upstream license match complete provenance.
- Manifest semantics: same ID, interactive=true, min_app_version=5.47,
  native Stream Deck provider. Runtime source scan has no added network input
  bridge, OS input injection, interval/replay loop or external assets.
- Official iCUE CLI **0.4.47**: validate and package PASS for 0.8.0.

Package: xeneon-edge-star-citizen-deck.icuewidget
SHA256: CA2DF0C156A7D3CF09E897DC581A4540F879F6EE29DBD9D1DC7C3D6A24505A69

Package/source comparison is recorded in the local delivery build-report.json.
Artifacts, screenshots and the prior dirty-source backup are outside Git.
No AI staging, commit, push, tag or release.

## Physical and configuration evidence

**Pending:** native 8x8 capacity, 5-column to 8-column profile migration,
new assignments in Star Citizen 4.10.1, ship/workplace applicability, all new
functions, physical touch/readability/low light and Smart Profiles regression.
A successful CLI package and browser mock do not validate native capacity or
prove game receipt. Only ATC has historical physical acceptance from WP-010.

Maintainer fleet is recorded in docs/flight/STAR_CITIZEN_SETS.md.
That document and STREAM_DECK_SLOTS.csv supply the joint acceptance checklist.
The telemetry question is recorded separately in TELEMETRY_OPTIONS.md;
no game-state source was integrated.

## Prior candidates

0.7.1 cockpit design candidate, retained for rollback with its matching profile:
D3E5AA369E72323089D2E52366DF71EAC0B7AF394392EABBF9EF81F9520F47FB.

0.7.0 function/page candidate:
713BF175A508A709A3D30FFE6EB3DA0E93DF85EEE02792B2E72FAD594163A536.

0.5/0.6 used an unverified short-B toggle. Do not reuse that slot-1 mapping.
0.7.x used a 5x4 device. Restore the matching profile as well as the old widget
for rollback. No physical acceptance is inferred for these superseded builds.
