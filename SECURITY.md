# Security Policy — XENEON Edge Control Deck

## Public repository boundary

This repository is intentionally public.

Public visibility means every committed file, image, log, export and historical revision must be treated as potentially permanent public information.

## Never commit

Do not commit:

- passwords
- API keys
- authentication tokens
- OAuth credentials
- Discord tokens or webhooks
- OBS stream keys
- private certificates or private keys
- browser/session data
- personal email addresses unless intentionally public
- private hostnames or internal network details unless deliberately sanitised
- screenshots containing personal, account or credential information
- logs containing secrets or unique authentication material
- configuration exports that have not been inspected for sensitive values

## Evidence and screenshots

Before adding evidence:

1. inspect the full image or file;
2. remove or redact unrelated personal information;
3. verify that redaction is irreversible in the exported artifact;
4. prefer cropped evidence over full-desktop screenshots;
5. do not rely on filenames or folders being "private" inside a public repository.

```text
PUBLIC != SAFE BY DEFAULT
SANITISED != VERIFIED
EVIDENCE != AUTHORITY
```

## Configuration exports

Vendor or application exports may contain values that are not visible in their normal UI.

An export is therefore **not safe by assumption**. It must be reviewed before commit.

Where practical, publish:

- documentation;
- templates;
- examples with placeholders; or
- sanitised export variants,

instead of raw production configuration.

## Local automation

Automation added later must:

- default to local operation where practical;
- avoid embedding credentials;
- document required permissions;
- avoid destructive actions without explicit safeguards;
- fail closed when required state is unknown.

## Reporting a security issue

Until a dedicated reporting channel is established, do not publish a suspected secret or exploitable security issue as a public example.

The Human Maintainer decides the appropriate disclosure path.

## Git authority

AI roles may prepare and review content but do not stage, commit, push, tag or release.

The Human Maintainer retains publication authority.
