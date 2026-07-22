# Changelog

## 0.4.0 - Effect beta.100 compatibility

### Changed

- Updated Effect tooling to `effect@4.0.0-beta.100`, `effect-oxlint@0.3.3`, and current supporting tool versions.
- Removed `prefer-schema-class`; `Schema.Struct` remains appropriate for named structural schemas.
- Updated `throw-in-effect-gen` to allow throws captured by direct `Effect.try` and `Effect.tryPromise` thunks.
- Aligned rule diagnostics and recognized API names with Effect beta.100, including `Schema.isSchemaError` and the current timeout APIs.

### Fixed

- Corrected documentation to reference `Effect.validate` and the current total of 58 rules.
- Synchronized the npm and JSR package versions.

## 0.3.0 — Rule migration from Foldkit

### Added

- Added five Effect-generic rules moved from `@mpsuesser/oxlint-plugin-foldkit`: `prefer-array-fromoption-over-option-match-empty`, `no-length-comparison`, `no-effect-ignore-then-as`, `require-is-prefix-for-boolean-schema-field`, and `maybe-prefix-requires-option`.

## 0.2.3 — Effect 4.0.0-beta.78

### Changed

- Updated `effect` (and `@effect/vitest`) to `4.0.0-beta.78` and `effect-oxlint` to `^0.3.2`.
- Switched the npm publish workflow to OIDC trusted publishing (no `NPM_TOKEN`): Node 24 plus `npm@latest` for npm >= 11.5.1.

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
