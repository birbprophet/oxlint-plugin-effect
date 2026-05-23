import type { CreateRule } from '@oxlint/plugins';
import { Rule } from 'effect-oxlint';

const rule: CreateRule = Rule.banMember('process', 'env', {
	message:
		'Avoid direct `process.env` access in domain code. Use `Config.string`, `Config.int`, `Config.redacted`, etc. for typed, testable configuration loading. (EF-28)'
});

export default rule;
