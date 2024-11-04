import type { Config } from './Types'

/**
 * ## Prettier Configuration - `PrettierConfig`
 *
 * Define Prettier options for code formatting.
 *
 * This constant uses `Config` to define its type, which matches Prettier's configuration options and provides more detailed information about each configuration option.
 *
 * @see {@link Config}
 * @see {@link [Prettier Configuration File](https://prettier.io/docs/en/configuration.html)}
 */
const PrettierConfig: Config = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'off',
	endOfLine: 'lf',
	experimentalTernaries: false,
	insertPragma: false,
	jsxSingleQuote: true,
	printWidth: Infinity,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	rangeEnd: Infinity,
	rangeStart: 0,
	requirePragma: false,
	semi: false,
	singleAttributePerLine: false,
	singleQuote: true,
	trailingComma: 'all',
}

export default PrettierConfig
