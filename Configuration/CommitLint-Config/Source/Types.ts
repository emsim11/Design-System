import type { CaseRuleConfig, EnumRuleConfig, LengthRuleConfig, ParserPreset, Plugin, RuleConfig, RuleConfigQuality, RulesConfig, UserPromptConfig } from '@commitlint/types'

type CommitLintConfig = {
	defaultIgnores?: boolean
	extends?: string | string[]
	formatter?: string
	helpUrl?: string
	ignores?: ((Commit: string) => boolean)[]
	parserPreset?: string | ParserPreset | Promise<ParserPreset>
	plugins?: (string | Plugin)[]
	prompt?: UserPromptConfig
	rules?: Partial<RulesConfig>
	[Key: string]: unknown
}

type CommitLintRules<V = RuleConfigQuality.User> = {
	/**
	 * ## Body Case - `body-case`
	 *
	 * Set the case `value` for the `body`.
	 *
	 * ### Valid Options
	 * - `lower-case` - lowercase
	 * - `upper-case` - UPPERCASE
	 * - `camel-case` - camelCase
	 * - `kebab-case` - kebab-case
	 * - `pascal-case` - PascalCase
	 * - `sentence-case` - Sentence case
	 * - `snake-case` - snake_case
	 * - `start-case` - Start Case
	 *
	 * @default 'always', 'lower-case'
	 * @see {@link [CommitLint Rules Body Case](https://commitlint.js.org/reference/rules.html#body-case)}
	 */
	'body-case': CaseRuleConfig<V>

	/**
	 * ## Body Empty - `body-empty`
	 *
	 * Set whether the `body` is empty.
	 *
	 * @default 'never'
	 * @see {@link [CommitLint Rules Body Empty](https://commitlint.js.org/reference/rules.html#body-empty)}
	 */
	'body-empty': RuleConfig<V>

	/**
	 * ## Body Full Stop - `body-full-stop`
	 *
	 * Set the `value` which the `body` must end with.
	 *
	 * @default 'never', '.'
	 * @see {@link [CommitLint Rules Body Full Stop](https://commitlint.js.org/reference/rules.html#body-full-stop)}
	 */
	'body-full-stop': RuleConfig<V, string>

	/**
	 * ## Body Leading Blank - `body-leading-blank`
	 *
	 * Set whether the `body` begins with a blank line.
	 *
	 * @default 'always'
	 * @see {@link [CommitLint Rules Body Leading Blank](https://commitlint.js.org/reference/rules.html#body-leading-blank)}
	 */
	'body-leading-blank': RuleConfig<V>

	/**
	 * ## Body Maximum Length - `body-max-length`
	 *
	 * Set the maximum `value` for the `body` characters.
	 *
	 * @default 'always', Infinity
	 * @see {@link [CommitLint Rules Body Maximum Length](https://commitlint.js.org/reference/rules.html#body-max-length)}
	 */
	'body-max-length': LengthRuleConfig<V>

	/**
	 * ## Body Maximum Line Length - `body-max-line-length`
	 *
	 * Set the maximum `value` for the `body` characters per line.
	 *
	 * @default 'always', Infinity
	 * @see {@link [CommitLint Rules Body Maximum Line Length](https://commitlint.js.org/reference/rules.html#body-max-line-length)}
	 */
	'body-max-line-length': LengthRuleConfig<V>

	/**
	 * ## Body Minimum Length - `body-min-length`
	 *
	 * Set the minimum `value` for the `body` characters.
	 *
	 * @default 'always', 0
	 * @see {@link [CommitLint Rules Body Minimum Length](https://commitlint.js.org/reference/rules.html#body-min-length)}
	 */
    'body-min-length': LengthRuleConfig<V>

	/**
	 * ## Footer Empty - `footer-empty`
	 *
	 * Set whether the `footer` is empty.
	 *
	 * @default 'never'
	 * @see {@link [CommitLint Rules Footer Empty](https://commitlint.js.org/reference/rules.html#footer-empty)}
	 */
	'footer-empty': RuleConfig<V>

	/**
	 * ## Footer Leading Blank - `footer-leading-blank`
	 *
	 * Set whether the `footer` begins with a blank line.
	 *
	 * @default 'always'
	 * @see {@link [CommitLint Rules Footer Leading Blank](https://commitlint.js.org/reference/rules.html#footer-leading-blank)}
	 */
	'footer-leading-blank': RuleConfig<V>

	/**
	 * ## Footer Maximum Length - `footer-max-length`
	 *
	 * Set the maximum `value` for the `footer` characters.
	 *
	 * @default 'always', Infinity
	 * @see {@link [CommitLint Rules Footer Maximum Length](https://commitlint.js.org/reference/rules.html#footer-max-length)}
	 */
	'footer-max-length': LengthRuleConfig<V>

	/**
	 * ## Footer Maximum Line Length - `footer-max-line-length`
	 *
	 * Set the maximum `value` for the `footer` characters per line.
	 *
	 * @default 'always', Infinity
	 * @see {@link [CommitLint Rules Footer Maximum Line Length](https://commitlint.js.org/reference/rules.html#footer-max-line-length)}
	 */
	'footer-max-line-length': LengthRuleConfig<V>

	/**
	 * ## Footer Minimum Length - `footer-min-length`
	 *
	 * Set the minimum `value` for the `footer` characters.
	 *
	 * @default 'always', 0
	 * @see {@link [CommitLint Rules Footer Minimum Length](https://commitlint.js.org/reference/rules.html#footer-min-length)}
	 */
	'footer-min-length': LengthRuleConfig<V>

	/**
	 * ## Header Case - `header-case`
	 *
	 * Set the case `value` for the `header`.
	 *
	 * ### Valid Options
	 * - `lower-case` - lowercase
	 * - `upper-case` - UPPERCASE
	 * - `camel-case` - camelCase
	 * - `kebab-case` - kebab-case
	 * - `pascal-case` - PascalCase
	 * - `sentence-case` - Sentence case
	 * - `snake-case` - snake_case
	 * - `start-case` - Start Case
	 *
	 * @default 'always', 'lower-case'
	 * @see {@link [CommitLint Rules Header Case](https://commitlint.js.org/reference/rules.html#header-case)}
	 */
    'header-case': CaseRuleConfig<V>

	/**
	 * ## Header Full Stop - `header-full-stop`
	 *
	 * Set the `value` which the `header` must end with.
	 *
	 * @default 'never', '.'
	 * @see {@link [CommitLint Rules Header Full Stop](https://commitlint.js.org/reference/rules.html#header-full-stop)}
	 */
	'header-full-stop': RuleConfig<V, string>

	/**
	 * ## Header Maximum Length - `header-max-length`
	 *
	 * Set the maximum `value` for the `header` characters.
	 *
	 * @default 'always', 72
	 * @see {@link [CommitLint Rules Header Maximum Length](https://commitlint.js.org/reference/rules.html#header-max-length)}
	 */
	'header-max-length': LengthRuleConfig<V>

	/**
	 * ## Header Minimum Length - `header-min-length`
	 *
	 * Set the minimum `value` for the `header` characters.
	 *
	 * @default 'always', 0
	 * @see {@link [CommitLint Rules Header Minimum Length](https://commitlint.js.org/reference/rules.html#header-min-length)}
	 */
	'header-min-length': LengthRuleConfig<V>

	/**
	 * ## Header Trim - `header-trim`
	 *
	 * Set whether the header must not have initial and / or trailing whitespace.
	 *
	 * @default 'always'
	 * @see {@link [CommitLint Rules Header Trim](https://commitlint.js.org/reference/rules.html#header-trim)}
	 */
    'header-trim': RuleConfig<V>

	/**
	 * ## References Empty - `references-empty`
	 *
	 * Set whether `references` must have at least one entry.
	 *
	 * @default 'never'
	 * @see {@link [CommitLint Rules References Empty](https://commitlint.js.org/reference/rules.html#references-empty)}
	 */
    'references-empty': RuleConfig<V>

	/**
	 * ## Scope Case - `scope-case`
	 *
	 * Set the case `value` for the `scope`.
	 *
	 * ### Valid Options
	 * - `lower-case` - lowercase
	 * - `upper-case` - UPPERCASE
	 * - `camel-case` - camelCase
	 * - `kebab-case` - kebab-case
	 * - `pascal-case` - PascalCase
	 * - `sentence-case` - Sentence case
	 * - `snake-case` - snake_case
	 * - `start-case` - Start Case
	 *
	 * @default 'always', 'lower-case'
	 * @see {@link [CommitLint Rules Scope Case](https://commitlint.js.org/reference/rules.html#scope-case)}
	 */
    'scope-case': CaseRuleConfig<V>

	/**
	 * ## Scope Empty - `scope-empty`
	 *
	 * Set whether the `scope` is empty.
	 *
	 * @default 'never'
	 * @see {@link [CommitLint Rules Scope Empty](https://commitlint.js.org/reference/rules.html#scope-empty)}
	 */
	'scope-empty': RuleConfig<V>

	/**
	 * ## Scope Enum - `scope-enum`
	 *
	 * Set the `value` which the `scope` must be found in.
	 *
	 * ### Notes
	 * - This rule always passes if no scopes are provided in the message or the `value` is an empty array.
	 * - When set to `always`, all message scopes must be found in the `value`.
	 * - When set to `never`, none of the message scopes can be found in the `value`.
	 *
	 * @default 'always', []
	 * @see {@link [CommitLint Rules Scope Enum](https://commitlint.js.org/reference/rules.html#scope-enum)}
	 */
	'scope-enum': EnumRuleConfig<V>

	/**
	 * ## Scope Maximum Length - `scope-max-length`
	 *
	 * Set the maximum `value` for the `scope` characters.
	 *
	 * @default 'always', Infinity
	 * @see {@link [CommitLint Rules Scope Maximum Length](https://commitlint.js.org/reference/rules.html#scope-max-length)}
	 */
	'scope-max-length': LengthRuleConfig<V>

	/**
	 * ## Scope Minimum Length - `scope-min-length`
	 *
	 * Set the minimum `value` for the `scope` characters.
	 *
	 * @default 'always', 0
	 * @see {@link [CommitLint Rules Scope Minimum Length](https://commitlint.js.org/reference/rules.html#scope-min-length)}
	 */
    'scope-min-length': LengthRuleConfig<V>

	/**
	 * ## Signed Off By - `signed-off-by`
	 *
	 * Set the `value` for the `message`.
	 *
	 * @default 'always', 'Signed-off-by:'
	 * @see {@link [CommitLint Rules Signed Off By](https://commitlint.js.org/reference/rules.html#signed-off-by)}
	 */
    'signed-off-by': RuleConfig<V, string>

	/**
	 * ## Subject Case - `subject-case`
	 *
	 * Set the case `value` for the `subject`.
	 *
	 * ### Valid Options
	 * - `lower-case` - lowercase
	 * - `upper-case` - UPPERCASE
	 * - `camel-case` - camelCase
	 * - `kebab-case` - kebab-case
	 * - `pascal-case` - PascalCase
	 * - `sentence-case` - Sentence case
	 * - `snake-case` - snake_case
	 * - `start-case` - Start Case
	 *
	 * @default 'always', 'sentence-case'
	 * @see {@link [CommitLint Rules Subject Case](https://commitlint.js.org/reference/rules.html#subject-case)}
	 */
    'subject-case': CaseRuleConfig<V>

	/**
	 * ## Subject Empty - `subject-empty`
	 *
	 * Set whether the `subject` is empty.
	 *
	 * @default 'never'
	 * @see {@link [CommitLint Rules Subject Empty](https://commitlint.js.org/reference/rules.html#subject-empty)}
	 */
	'subject-empty': RuleConfig<V>

	/**
	 * ## Subject Full Stop - `subject-full-stop`
	 *
	 * Set the `value` which the `subject` must end with.
	 *
	 * @default 'never', '.'
	 * @see {@link [CommitLint Rules Subject Full Stop](https://commitlint.js.org/reference/rules.html#subject-full-stop)}
	 */
	'subject-full-stop': RuleConfig<V, string>

	/**
	 * ## Subject Maximum Length - `subject-max-length`
	 *
	 * Set the maximum `value` for the `subject` characters.
	 *
	 * @default 'always', Infinity
	 * @see {@link [CommitLint Rules Subject Maximum Length](https://commitlint.js.org/reference/rules.html#subject-max-length)}
	 */
	'subject-max-length': LengthRuleConfig<V>

	/**
	 * ## Subject Minimum Length - `subject-min-length`
	 *
	 * Set the minimum `value` for the `subject` characters.
	 *
	 * @default 'always', 0
	 * @see {@link [CommitLint Rules Subject Minimum Length](https://commitlint.js.org/reference/rules.html#subject-min-length)}
	 */
	'subject-min-length': LengthRuleConfig<V>

	/**
	 * ## Trailer Exists - `trailer-exists`
	 *
	 * Set the trailer `value` for the `message`.
	 *
	 * @default 'always', 'Signed-off-by:'
	 * @see {@link [CommitLint Rules Trailer Exists](https://commitlint.js.org/reference/rules.html#trailer-exists)}
	 */
    'trailer-exists': RuleConfig<V, string>

	/**
	 * ## Type Case - `type-case`
	 *
	 * Set the case `value` for the `type`.
	 *
	 * ### Valid Options
	 * - `lower-case` - lowercase
	 * - `upper-case` - UPPERCASE
	 * - `camel-case` - camelCase
	 * - `kebab-case` - kebab-case
	 * - `pascal-case` - PascalCase
	 * - `sentence-case` - Sentence case
	 * - `snake-case` - snake_case
	 * - `start-case` - Start Case
	 *
	 * @default 'always', 'lower-case'
	 * @see {@link [CommitLint Rules Type Case](https://commitlint.js.org/reference/rules.html#type-case)}
	 */
    'type-case': CaseRuleConfig<V>

	/**
	 * ## Type Empty - `type-empty`
	 *
	 * Set whether the `type` is empty.
	 *
	 * @default 'never'
	 * @see {@link [CommitLint Rules Type Empty](https://commitlint.js.org/reference/rules.html#type-empty)}
	 */
    'type-empty': RuleConfig<V>

	/**
	 * ## Type Enum - `type-enum`
	 *
	 * Set the `value` which the `type` must be found in.
	 *
	 * @default 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
	 * @see {@link [CommitLint Rules Type Enum](https://commitlint.js.org/reference/rules.html#type-enum)}
	 */
    'type-enum': EnumRuleConfig<V>

	/**
	 * ## Type Maximum Length - `type-max-length`
	 *
	 * Set the maximum `value` for the `type` characters.
	 *
	 * @default 'always', Infinity
	 * @see {@link [CommitLint Rules Type Maximum Length](https://commitlint.js.org/reference/rules.html#type-max-length)}
	 */
	'type-max-length': LengthRuleConfig<V>

	/**
	 * ## Type Minimum Length - `type-min-length`
	 *
	 * Set the minimum `value` for the `type` characters.
	 *
	 * @default 'always', 0
	 * @see {@link [CommitLint Rules Type Minimum Length](https://commitlint.js.org/reference/rules.html#type-min-length)}
	 */
    'type-min-length': LengthRuleConfig<V>
}

export type {
	CommitLintConfig as Config,
	CommitLintRules as Rules,
}
