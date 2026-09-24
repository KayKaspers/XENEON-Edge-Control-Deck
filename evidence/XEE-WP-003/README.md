# Evidence — XEE-WP-003 Hardware Baseline

This directory is the public evidence index for XEE-WP-003.

## Evidence policy

Evidence may be:

- `PUBLIC` — safe to commit as-is;
- `SANITISED SUMMARY` — original evidence is not committed, but a public-safe description is recorded;
- `PRIVATE-ONLY` — retained by the Human Maintainer and not published.

## Never publish

Do not commit evidence containing:

- serial numbers;
- unique device identifiers;
- QR codes that encode unique identifiers;
- purchase/order numbers;
- account information;
- private room/environment details that the Human Maintainer does not want public;
- unrelated screens containing personal data;
- credentials, tokens or application secrets.

## Recommended physical evidence

Useful evidence can include:

1. front/installed-device view;
2. rear/port view;
3. cable-path view;
4. adapter/hub/dock view if present;
5. written observation notes.

Photos are not mandatory if the same fact can be truthfully documented by the Human Maintainer without publishing sensitive imagery.

## Evidence naming

If public evidence files are added later, use stable names such as:

```text
XEE-WP-003/
├── README.md
├── hw-obs-001-front-view.jpg
├── hw-obs-002-port-view.jpg
└── hw-obs-003-cable-path.jpg
```

Do not encode serial numbers, usernames, dates of purchase or other personal identifiers in filenames.

## Review rule

Evidence supports a claim but does not create authority.

```text
EVIDENCE != AUTHORITY
PHOTO != COMPLETE VERIFICATION
PHYSICAL CONNECTION != FUNCTIONAL VERIFICATION
```
