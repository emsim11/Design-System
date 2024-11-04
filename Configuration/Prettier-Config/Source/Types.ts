import type { BuiltInParserName, LiteralUnion, Plugin } from 'prettier'

type PrettierConfig = {
	/**
	 * ## Arrow Function Parentheses - `arrowParens`
	 *
	 * Include parentheses around a sole arrow function parameter.
	 *
	 * ### Valid Options
	 * - `always` - Always include parentheses. Example: (X) => X
	 * - `avoid` - Omit parentheses when possible. Example: X => X
	 *
	 * ### Notes
	 * - When Prettier removes parentheses, it becomes harder to add type annotations, extra arguments, or default values as well as making other changes.
	 * - Consistent use of parentheses provides a better developer experience when editing real codebases, which justifies the default value for the option.
	 *
	 * @default 'always'
	 * @see {@link [Prettier Options Arrow Function Parentheses](https://prettier.io/docs/en/options.html#arrow-function-parentheses)}
	 */
	arrowParens?: 'always' | 'avoid'

	/**
	 * ## Bracket Same Line - `bracketSameLine`
	 *
	 * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
	 *
	 * ### Valid Options
	 * - `true` - Example:
	 * ```TypeScript
	 * 	<button
	 * 	  className='Prettier-Class'
	 * 	  id='Prettier-Id'
	 *	  	onClick={this.HandleClick}>
	 * 	Click Here
	 * 	</button
	 * ```
	 * - `false` - Example:
	 *  ```TypeScript
	 * 	<button
	 * 	  className='Prettier-Class'
	 * 	  id='Prettier-Id'
	 *	  	onClick={this.HandleClick}
	 *		>
	 * 	  Click Here
	 * 	</button
	 * ```
	 *
	 * @default false
	 * @see {@link [Prettier Options Bracket Line](https://prettier.io/docs/en/options.html#bracket-line)}
	 */
	bracketSameLine?: boolean

	/**
	 * ## Bracket Spacing - `bracketSpacing`
	 *
	 * Print spaces between brackets in object literals.
	 *
	 * ### Valid Options
	 * - `true` - Example: `{ foo: Bar }`.
	 * - `false` - Example: `{foo: bar}`.
	 *
	 * @default true
	 * @see {@link [Prettier Options Bracket Spacing](https://prettier.io/docs/en/options.html#bracket-spacing)}
	 */
	bracketSpacing?: boolean

	/**
	 * ## Embedded Language Formatting - `embeddedLanguageFormatting`
	 *
	 * Control whether Prettier formats quoted code embedded in the file.
	 *
	 * ### Valid Options
	 * - `auto` - Format embedded code if Prettier can automatically identify it.
	 * - `off` - Never automatically format embedded code.
	 *
	 * ### Notes
	 * - When Prettier identifies cases where code has been placed that it knows how to format within a string in another file, like in a tagged template in JavaScript with a tag named `html` or in code blocks in Markdown, it will by default try to format that code.
	 * - In cases where the string is not intended to be interpreted as code, this behavior may be undesirable. This options enables switching between the default behavior (`auto`) and disabling this feature entirely (`off`).
	 *
	 * @default 'auto'
	 * @see {@link [Prettier Options Embedded Language Formatting](https://prettier.io/docs/en/options.html#embedded-language-formatting)}
	 */
	embeddedLanguageFormatting?: 'auto' | 'off'

	/**
	 * ## End of Line - `endOfLine`
	 *
	 * There are two common flavors of line endings in text files: \n (or LF for Line Feed) and \r\n (or CRLF for Carriage Return + Line Feed). `\n` (LF) is common on Linux and macOS, while `\r\n` is prevalent on Windows.
	 *
	 * ### Valid Options
	 * - `auto` - Maintain existing line endings (mixed values within one file are normalized by looking at what's used after the first line).
	 * - `cr` - Carriage Return character only (\r), which is used very rarely.
	 * - `crlf` - Carriage Return + Line Feed characters (\r\n), which is common on Windows.
	 * - `lf` - Line Feed only (\n), which is common on Linux and macOS as well as inside Git repositories.
	 *
	 * ### Notes
	 * - Setting `end_of_line` in an {@link [.EditorConfig file](https://editorconfig.org/)} will configure Prettier's end of line usage, unless overridden.
	 *
	 * @default 'lf'
	 * @see {@link [Prettier Options End Of Line](https://prettier.io/docs/en/options.html#end-of-line)}
	 */
	endOfLine?: 'auto' | 'cr' | 'crlf' | 'lf'

	/**
	 * ## Experimental Ternaries - `experimentalTernaries`
	 *
	 * Try Prettier's {@link [new ternary formatting](https://github.com/prettier/prettier/pull/13183)} before it becomes the default behavior.
	 *
	 * ### Valid Options
	 * - `true` - Use curious ternaries with the question mark after the condition.
	 * - `false` - Retain the default behavior of ternaries and keep question marks on the same line as the consequent.
	 */
	experimentalTernaries?: boolean

	/**
	 * ## File Path - `filepath`
	 *
	 * Set the string for the file name to use to infer which parser to use.
	 *
	 * ### Example
	 * The following will use the CSS parser:
	 * ```TypeScript
	 * cat foo | prettier --stdin-filepath foo.css
	 * ```
	 *
	 * ### Notes
	 * - This option is only useful in the CLI and API.
	 * - It does not make sense to use this option in a configuration file.
	 *
	 * @default undefined
	 * @see {@link [Prettier Options File Path](https://prettier.io/docs/en/options.html#file-path)}
	 */
	filePath?: string

	/**
	 * ## HTML Whitespace Sensitivity - `htmlWhitespaceSensitivity`
	 *
	 * Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars files.
	 *
	 * ### Valid Options
	 * - `css` - Respect the default value of CSS display property. For Handlebars, treated the same as `strict`.
	 * - `ignore` - Whitespace (or the lack of it) around all tags is considered insignificant.
	 * - `strict` - Whitespace (or the lack of it) around all tags is considered significant.
	 *
	 * @default 'css'
	 * @see {@link [Whitespace Sensitive Formatting](https://prettier.io/blog/2018/11/07/1.15.0#whitespace-sensitive-formatting)} for more information.
	 * @see {@link [Prettier Options HTML Whitespace Sensitivity](https://prettier.io/docs/en/options.html#html-whitespace-sensitivity)}
	 */
	htmlWhitespaceSensitivity?: 'css' | 'ignore' | 'strict'

	/**
	 * ## Insert Pragma - `insertPragma`
	 *
	 * Prettier can insert a special `@format` marker at the top of files specifying that the file has been formatted with Prettier.
	 *
	 * This works well when used in tandem with the `--require-pragma` option
	 *
	 * ### Notes
	 * - If there is already a docblock at the top of the file, then this option will add a newline to it with the `@format` marker.
	 * - When `--insert-pragma` and `--require-pragma` are used simultaneously, `--require-pragma` has priority and `--insert-pragma` is ignored.
	 * - The idea is that during an incremental adoption of Prettier in a big codebase, the developers participating in the transition process use `--insert-pragma`, whereas `--require-pragma` is used by the rest of the team and automated tooling to process nly files already transitioned.
	 *
	 * @default false
	 * @see {@link [Prettier Options Insert Pragma](https://prettier.io/docs/en/options.html#insert-pragma)}
	 */
	insertPragma?: boolean

	/**
	 * ## JSX Quotes - `jsxSingleQuote`
	 *
	 * Use single quotes instead of double quotes in JSX.
	 *
	 * @default false
	 * @see {@link [Prettier Options JSX Quotes](https://prettier.io/docs/en/options.html#jsx-quotes)}
	 */
	jsxSingleQuote?: boolean

	/**
	 * ## Parser - `parser`
	 *
	 * Specify which parser to use. See the link below to view the list of valid parser options.
	 *
	 * ### Notes
	 * - Prettier automatically infers the parser from the input file path, so this setting shouldn't have to be changed.
	 * - Both the `babel` and `flow` parsers support the same set of JavaScript features (including Flow type annotations).
	 * - They may differ in some edge cases, in which case, try `flow` instead of `babel`.
	 * - Almost the same applies to `typescript` and `babel-ts`. `babel-ts` might support JavaScript features (proposals) not yet supported by TypeScript, but it's less permissive when it comes to invalid code and less battle-tested than the `typescript` parser.
	 *
	 * @default undefined
	 * @see {@link [Prettier Options Parser](https://prettier.io/docs/en/options.html#parser)}
	 */
	parser?: LiteralUnion<BuiltInParserName>

	/**
	 * ## Plugins - `plugins`
	 *
	 * Use plugins to add new languages or formatting rules to Prettier.
	 *
	 * The core `prettier` package contains JavaScript and other web-focused languages built in.
	 * For additional languages, a plugin will need to be installed.
	 *
	 * Strings provided to plugins are ultimately passed to {@link [import() expressions](https://nodejs.org/api/esm.html#import-expressions)}, so a module or package name, a path, or anything else that `import()` takes can be used as the provided string value.
	 *
	 * @default undefined
	 * @see {@link [Prettier Plugins](https://prettier.io/docs/en/plugins)}
	 */
	plugins?: Array<string | Plugin>

	/**
	 * ## Print Width - `printWidth`
	 *
	 * Specify the line length that prettier will wrap on.
	 *
	 * ### Notes
	 * - Setting `max_line_length` in an {@link [.EditorConfig file](https://editorconfig.org/)} will configure Prettier's print width, unless overridden.
	 * - To prevent line wrapping when formatting Markdown, set the {@link [Prose Wrap](https://prettier.io/docs/en/options.html#prose-wrap)} option to disable it.
	 *
	 * @default 80
	 * @see {@link [Prettier Options Print Width](https://prettier.io/docs/en/options.html#print-width)}
	 */
	printWidth?: number

	/**
	 * ## Prose Wrap - `proseWrap`
	 *
	 * By default, Prettier will wrap markdown text as-is since some services use a line-break-sensitive renderer, e.g. GitHub comment and BitBucket.
	 *
	 * To have Prettier wrap prose to the print width, change this option to `always`.
	 *
	 * To have Prettier force all prose blocks onto a single line and rely on editor/viewer soft wrapping instead, use `never`.
	 *
	 * ### Valid Options
	 * - `always` - Wrap prose if it exceeds the print width.
	 * - `never` - Unwrap each block of prose into one line.
	 * - `preserve` - Do nothing and leave prose as-is.
	 *
	 * @default 'preserve'
	 * @see {@link [Prettier Options Prose Wrap](https://prettier.io/docs/en/options.html#prose-wrap)}
	 */
	proseWrap?: 'always' | 'never' | 'preserve'

	/**
	 * ## Quote Props - `quoteProps`
	 *
	 * Change when properties in objects are quoted.
	 *
	 * ### Valid Options
	 * - `as-needed` - Only add quotes around object properties where required.
	 * - `consistent` - If at least one property in an object requires quotes, quote all properties.
	 * - `preserve` - Respect the input use of quotes in object properties.
	 *
	 * ### Notes
	 * - Prettier will never unquote numeric property names in Angular expressions, TypeScript, and flow because the distinction between string and numeric keys is significant in these languages (see {@link [Angular](https://codesandbox.io/s/hungry-morse-foj87?file=/src/app/app.component.html)}, {@link [TypeScript](https://www.typescriptlang.org/play?#code/DYUwLgBAhhC8EG8IEYBcKA0EBM7sQF8AoUSAIzkQgHJlr1ktrt6dCiiATEAY2CgBOICKWhR0AaxABPAPYAzCGGkAHEAugBuLr35CR4CGTKSZG5Wo1ltRKDHjHtQA)}, and {@link [Flow](https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoVBjOA7AzgFzAA8wBeMAb1TDAAYAuMARlQF8g)}).
	 * - Prettier does not unquote numeric properties for Vue (see the {@link [issue](https://github.com/prettier/prettier/issues/10127)} about that).
	 *
	 * @default 'as-needed'
	 * @see {@link [Prettier Options Quote Props](https://prettier.io/docs/en/options.html#quote-props)}
	 */
	quoteProps?: 'as-needed' | 'consistent' | 'preserve'

	/**
	 * ## Range End - `rangeEnd`
	 *
	 * Specify the end of a range to format only a segment of a file.
	 *
	 * ### Notes
	 * - `rangeStart` and `rangeEnd` can be used to format code starting and ending at a given character offset (inclusive and exclusive, respectively).
	 * - The range will extend:
	 * 	- Backwards to the start of the first line containing the selected statement.
	 * 	- Forwards to the end of the selected statement.
	 *
	 * @default Infinity
	 * @see {@link [Prettier Options Range](https://prettier.io/docs/en/options.html#range)}
	 */
	rangeEnd?: number

	/**
	 * ## Range Start - `rangeStart`
	 *
	 * Specify the start of a range to format only a segment of a file.
	 *
	 * ### Notes
	 * - `rangeStart` and `rangeEnd` can be used to format code starting and ending at a given character offset (inclusive and exclusive, respectively).
	 * - The range will extend:
	 * 	- Backwards to the start of the first line containing the selected statement.
	 * 	- Forwards to the end of the selected statement.
	 *
	 * @default 0
	 * @see {@link [Prettier Options Range](https://prettier.io/docs/en/options.html#range)}
	 */
	rangeStart?: number

	/**
	 * ## Require Pragma - `requirePragma`
	 *
	 * Prettier can restrict itself to only format files that contain a special comment, called a **pragma**, at the top of the file.
	 *
	 * This is very useful when gradually transitioning large, unformatted codebases to Prettier.
	 *
	 * ### Example
	 * A file with the following as its first comment will be formatted when `--require-pragma` is supplied:
	 * - `@prettier`
	 * - `@format`
	 *
	 * @default false
	 * @see {@link [Prettier Options Require Pragma](https://prettier.io/docs/en/options.html#require-pragma)}
	 */
	requirePragma?: boolean

	/**
	 * ## Semicolons - `semi`
	 *
	 * Print semicolons at the end of statements.
	 *
	 * ### Valid Options
	 * - `true` - Add a semicolon at the end of every statement.
	 * - `false` - Only add semicolons at the beginning of lines that {@link [may introduce ASI failures](https://prettier.io/docs/en/rationale#semicolons)}.
	 *
	 * @default true
	 * @see {@link [Prettier Options Semicolons](https://prettier.io/docs/en/options.html#semicolons)}
	 */
	semi?: boolean

	/**
	 * ## Single Attribute Per Line - `singleAttributePerLine`
	 *
	 * Enforce single attribute per line in HTML, Vue, and JSX.
	 *
	 * ### Valid Options
	 * - `true` - Enforce single attribute per line.
	 * - `false` - Do not enforce single attribute per line.
	 *
	 * @default false
	 * @see {@link [Prettier Options Single Attribute Per Line](https://prettier.io/docs/en/options.html#single-attribute-per-line)}
	 */
	singleAttributePerLine?: boolean

	/**
	 * ## Quotes - `singleQuote`
	 *
	 * Use single quotes instead of double quotes.
	 *
	 * ### Notes
	 * - JSX quotes ignore this option. See {@link [JSX-Single-Quote](https://prettier.io/docs/en/options.html#jsx-quotes)}.
	 * - If the number of quotes outweighs the other quote, the quote which is less used will be used to format the string.
	 * 	- Examples:
	 * 	  - `"I'm double quoted"` results in `"I'm double quoted"`
	 * 	  - `"This \"example\" is single quoted"` results in `'This "example" is single quoted'`.
	 *
	 * @default false
	 * @see {@link [Strings Rationale]} for more information.
	 * @see {@link [Prettier Options Quotes](https://prettier.io/docs/en/options.html#quotes)}
	 */
	singleQuote?: boolean

	/**
	 * ## Tab Width - `tabWidth`
	 *
	 * Specify the number of spaces per indentation-level.
	 *
	 * ### Notes
	 * - Setting `indent_size` or `tab_width` in an {@link [.EditorConfig file](https://editorconfig.org/)} will configure Prettier's tab width, unless overridden.
	 *
	 * @default 2
	 * @see {@link [Prettier Options Tab Width](https://prettier.io/docs/en/options.html#tab-width)}
	 */
	tabWidth?: number

	/**
	 * ## Trailing Commas - `trailingComma`
	 *
	 * Print trailing commas wherever possible in multi-line, comma-separated syntactic structures.
	 *
	 * For example, a single-line array never gets trailing commas.
	 *
	 * ### Valid Options
	 * - `all` - Trailing commas wherever possible (including {@link [function parameters and calls](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Trailing_commas_in_functions)}). To run, JavaScript code formatted this way needs an engine that supports ES2017 (Node.js 8+ or a modern browser) or {@link [downlevel compilation](https://babeljs.io/docs/en/index)}. This also enables trailing commas in type parameters in TypeScript.
	 * - `es5` - Trailing commas where valid in ES5 (objects, arrays, etc.) and in type parameters in TypeScript and Flow.
	 * - `none` - No trailing commas.
	 *
	 * @default 'es5'
	 * @see {@link [Prettier Options Trailing Commas](https://prettier.io/docs/en/options.html#trailing-commas)}
	 */
	trailingComma?: 'all' | 'es5' | 'none'

	/**
	 * ## Tabs - `useTabs`
	 *
	 * Indent lines with tabs instead of spaces.
	 *
	 * ### Notes
	 * - Setting `indent_style` in an {@link [.EditorConfig file](https://editorconfig.org/)} will configure Prettier's tab usage, unless overridden.
	 * - Tabs will be used for *indentation*, but Prettier uses spaces to *align* things, such as in ternaries. This behavior is known as {@link [SmartTabs](https://www.emacswiki.org/emacs/SmartTabs)}.
	 *
	 * @default false
	 * @see {@link [Prettier Options Tabs](https://prettier.io/docs/en/options.html#tabs)}
	 */
	useTabs?: boolean
}

export type { PrettierConfig as Config }
