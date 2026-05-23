/**
 * Pattern use-http-client-service / EF-9b.
 *
 * Bans `http` / `https` / `node:http` / `node:https` imports. Effect's
 * `HttpClient`, `HttpClientRequest`, and `HttpClientResponse` from
 * `effect/unstable/http` give typed errors, composable request builders,
 * declarative retry/timeout, and layer-based testing.
 */
import type { CreateRule } from '@oxlint/plugins';

import * as Schema from 'effect/Schema';

import { Rule } from 'effect-oxlint';

const HttpImportSource = Schema.Literals([
	'http',
	'https',
	'node:http',
	'node:https'
]).annotate({
	title: 'HttpImportSource',
	description:
		'Node `http` / `https` module import specifiers. Use `HttpClient` from `effect/unstable/http` with a platform layer (`BunHttpClient.layer` / `NodeHttpClient.layer`) instead.'
});

const isHttpImportSource = Schema.is(HttpImportSource);

const rule: CreateRule = Rule.banImport(isHttpImportSource, {
	message:
		'Avoid importing `http` / `https` / `node:http` / `node:https`. Use `HttpClientRequest`, `HttpClientResponse`, and `HttpClient` from Effect for typed errors, composable HTTP, and testable layer substitution. See the `effect-http-api` skill. (EF-9b)'
});

export default rule;
