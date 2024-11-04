import CommitLintRules from './Rules'
import type { Config } from './Types'

/**
 * ## CommitLint Configuration - `CommitLintConfig`
 *
 * Define CommitLint options for commit message linting.
 *
 * @see {@link [CommitLint Configuration](https://commitlint.js.org/reference/configuration.html)}
 */
const CommitLintConfig: Config = {
	extends: ['@commitlint/config-conventional'],
	rules: CommitLintRules,
}

export default CommitLintConfig
