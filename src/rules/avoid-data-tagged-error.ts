import type { CreateRule } from '@oxlint/plugins';
import { Rule } from 'effect-oxlint';

const rule: CreateRule = Rule.banMember('Data', 'TaggedError', {
	message:
		'Use `Schema.TaggedErrorClass` instead of `Data.TaggedError`. Schema-based errors integrate with decode/encode and carry structured metadata. (EF-1)'
});

export default rule;
