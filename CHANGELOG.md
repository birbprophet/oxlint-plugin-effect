# Changelog

## Unreleased

## 0.2.2 — JSR default export docs

### Fixed

- Attached JSR symbol documentation to the exported plugin value so the generated docs no longer show the default export as undocumented.

## 0.2.1 — JSR score improvements

### Changed

- Removed JSR slow-type diagnostics by giving each rule module an explicit `CreateRule` export boundary.
- Documented the default plugin export for generated JSR symbol docs.
- Updated the JSR publish workflow to pass fast-check and rely on GitHub Actions provenance without `--allow-slow-types`.

## 0.2.0 — Generated config presets

### Changed

- Published package exports now point at built `dist/` files instead of raw TypeScript source, so oxlint can load the plugin from `node_modules` without Node type-stripping failures.
- Added a generated `configs.recommended` config for `oxlint.config.ts`; importing the plugin and extending this config now registers the JS plugin and enables all 54 rules at `error` severity.
- Replaced the old native-plugin-style `plugins` / `categories.recommended` documentation with oxlint JS plugin configuration using `jsPlugins` and explicit rule IDs.
- Updated to `effect-oxlint@0.3.0`, Effect `4.0.0-beta.70`, Bun `1.3.14`, and current supporting tool versions.

## 0.1.0 — Initial Release

Opinionated oxlint plugin enforcing Effect-first development conventions.

54 rules covering statement bans, import bans, member expression bans, call expression rules, type-level rules, complex contextual rules, and pattern enforcement rules. All rules ship in the generated `configs.recommended` config for `oxlint.config.ts`.

See the [README](./README.md) for the full rule list with examples.
