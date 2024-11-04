import { RuleConfigSeverity } from '@commitlint/types'

import { CommitLintScopes, CommitLintTypes } from './Constants'
import type { Rules } from './Types'

/**
 * ## CommitLint Rules Configuration - `CommitLintRules`
 *
 * Define the rules for commit messages to enforce specific formats and content.
 *
 * This constant uses `Rules` to define its type, which matches CommitLint's rule configuration options and provides more detailed information about each rule option.
 *
 * @see {@link Rules}
 * @see {@link [CommitLint Rules Configuration](https://commitlint.js.org/reference/rules-configuration.html#rules-configuration)}
 */
const CommitLintRules: Rules = {
	'body-case': [RuleConfigSeverity.Error, 'always', 'sentence-case'],
	'body-empty': [RuleConfigSeverity.Error, 'never'],
	'body-full-stop': [RuleConfigSeverity.Error, 'always', '.'],
	'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
	'body-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
	'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
	'body-min-length': [RuleConfigSeverity.Error, 'always', 0],
	'footer-empty': [RuleConfigSeverity.Error, 'never'],
	'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],
	'footer-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
	'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
	'footer-min-length': [RuleConfigSeverity.Error, 'always', 0],
	'header-case': [RuleConfigSeverity.Error, 'always', 'start-case'],
	'header-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
	'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
	'header-min-length': [RuleConfigSeverity.Error, 'always', 0],
	'header-trim': [RuleConfigSeverity.Error, 'always'],
	'references-empty': [RuleConfigSeverity.Warning, 'never'],
	'scope-case': [RuleConfigSeverity.Error, 'always', 'start-case'],
	'scope-empty': [RuleConfigSeverity.Error, 'never'],
	'scope-enum': [RuleConfigSeverity.Error, 'always', CommitLintScopes],
	'scope-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
	'scope-min-length': [RuleConfigSeverity.Error, 'always', 0],
	'signed-off-by': [RuleConfigSeverity.Warning, 'always', 'Reviewed By: '],
	'subject-case': [RuleConfigSeverity.Error, 'always', 'start-case'],
	'subject-empty': [RuleConfigSeverity.Error, 'never'],
	'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
	'subject-max-length': [RuleConfigSeverity.Error, 'always', 100],
	'subject-min-length': [RuleConfigSeverity.Error, 'always', 0],
	'trailer-exists': [RuleConfigSeverity.Error, 'always', 'Reviewed By: '],
	'type-case': [RuleConfigSeverity.Error, 'always', 'start-case'],
	'type-empty': [RuleConfigSeverity.Error, 'never'],
	'type-enum': [RuleConfigSeverity.Error, 'always', CommitLintTypes],
	'type-max-length': [RuleConfigSeverity.Error, 'always', Infinity],
	'type-min-length': [RuleConfigSeverity.Error, 'always', 0],
}

export default CommitLintRules
