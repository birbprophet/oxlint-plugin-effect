import { describe, expect, it } from '@effect/vitest';

import rule from '../../src/rules/prefer-schema-class.ts';
import * as Testing from 'effect-oxlint/testing';

describe('prefer-schema-class', () => {
	it('flags Schema.Struct', () => {
		expect(
			Testing.runRule(
				rule,
				'MemberExpression',
				Testing.memberExpr('Schema', 'Struct')
			)
		).toHaveLength(1);
	});
	it('allows Schema.Class', () => {
		expect(
			Testing.runRule(
				rule,
				'MemberExpression',
				Testing.memberExpr('Schema', 'Class')
			)
		).toHaveLength(0);
	});
	it('allows Schema.String', () => {
		expect(
			Testing.runRule(
				rule,
				'MemberExpression',
				Testing.memberExpr('Schema', 'String')
			)
		).toHaveLength(0);
	});
});
