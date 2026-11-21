# Changelog

All notable changes to this project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Unreleased

### Added

- Backup step after registration, and a Home Screen or backup choice before registration on iPhone and iPad
- Passwordless device sync in Settings, with a sync link QR code
- Authenticator hints in the registration dialog and Settings, read from WebAuthn capabilities
- Root error boundary (`src/app/global-error.tsx`) and a "browser too old" or "loading failed" screen instead of an endless spinner
- Translations for every new string in all 10 languages
- `templateVersion` in `package.json`, recording the genji template release this project is on (3.5.0)
- `/montpellier` and `/chansons` pages, linked from the menu

### Changed

- Updated `w3pk` from 0.8.8 to 0.12.4. Wallets stored by 0.8.x can't be read: login opens `/settings#sync-import` to restore from a backup or a sync file.
- Registration needs a passkey with WebAuthn PRF
- Login button follows genji's flow: it opens registration when no passkey exists on the device, and its copy is translated
- Updated `next` 16.4.6, `react` 19.3.1, `@chakra-ui/react` 3.38.0, `typescript` 6 and `prettier` 3.10; Node.js `>=24.22.1` is required
- `/montpellier` lists our saved places in French, with search and category filters
- French settings say « Réglages » instead of « Paramètres »

### Removed

- `/naissance` and `/bibs` pages, their API routes and menu items
- Neon database client, `DATABASE_URL` and `ALLOWED_ADDRESSES`, and the `@neondatabase/serverless` and `jspdf` dependencies

### Security

- HTTP security headers on every route: Content-Security-Policy, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy`
- pnpm overrides for transitive dependencies with known advisories, and `pnpm-workspace.yaml` with a 3-day minimum release age
