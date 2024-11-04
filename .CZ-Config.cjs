module.exports = {
	/**
	 * ## Allow Breaking Changes - `allowBreakingChanges`
	 *
	 * A list of commit types where the question `breaking change` is prompted.
	 *
	 * ### Example
	 * `['Feature', 'Fix']`
	 *
	 * @default None
	 */
	allowBreakingChanges: ['✨ Feature', '🐛 Fix'],

	/**
	 * ## Allow Custom Scopes - `allowCustomScopes`
	 *
	 * Add the option `custom` to scope selection to allow typing a scope if necessary.
	 *
	 * @default false
	 */
	allowCustomScopes: true,

	/**
	 * ## Messages - `messages`
	 *
	 * Override the default prompt messages.
	 */
	messages: {
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: 'List any BREAKING CHANGES:\n',
		confirmCommit: 'Ready to proceed with the commit above?',
		customScope: 'Denote the CUSTOM SCOPE of this change:',
		footer: 'List any ISSUES CLOSED by or ISSUE REFERENCES for this change (e.g. "ISSUES CLOSED: #31", "REFERENCES: #34"):\n',
		scope: 'Denote the SCOPE of this change:',
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		type: 'Select the TYPE of change for the commit:\n',
	},

	/**
	 * ## Scopes - `scopes`
	 *
	 * The scopes for the project.
	 *
	 * ### Example
	 * For Some Banking System: `['Accounts', 'Payments']`
	 *
	 * For Some Travel Application: `['Bookings', 'Profile', 'Search']`
	 */
	scopes: [
		'CommitLint Config',
		'ESLint Config',
		'Jest Config',
		'Prettier Config',
		'Root Directory',
		'Semantic Release Config',
		'StyleLint Config',
		'TypeScript Config',
		'Vitest Config',
	],

	/**
	 * ## Subject Limit - `subjectLimit`
	 *
	 * The subject length limit.
	 *
	 * ### Example
	 * `'This Is A New Feature'`
	 *
	 * `'Fix A Bug'`
	 *
	 * @default 100
	 */
	subjectLimit: 100,

	/**
	 * ## Subject Separator - `subjectSeparator`
	 *
	 * The subject separator.
	 *
	 * ### Example
	 * `'Feature: This Is A New Feature'`
	 *
	 * @default ': '
	 */
	subjectSeparator: ': ',

	/**
	 * ## Type Prefix - `typePrefix`
	 *
	 * The commit type prefix.
	 *
	 * ### Example
	 * For Type Prefix `[`:
	 *
	 * `[Feature: This Is A New Feature`
	 *
	 * @default ''
	 */
	typePrefix: '',

	/**
	 * ## Types - `types`
	 *
	 * The available commit types that are displayed in the prompt.
	 *
	 * ### Notes
	 * - **Commit types** help categorize commits according to their purpose, aligning with {@link [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)} or a custom scheme.
	 * - Each type entry includes a `value` (commit type) and `name` (description shown in the prompt).
	 */
	types: [
		{ value: '♿️ A11y', name: '♿️ A11y: Accessibility Improvements' },
		{ value: '➕ Add Dependencies', name: '➕Add Dependencies: Add New Dependencies' },
		{ value: '🧪 Add Test', name: '🧪 Add Tests: Add New Tests' },
		{ value: '🔬 Analytics', name: '🔬 Analytics: Add or Update Analytics Tracking' },
		{ value: '💥 Breaking Change', name: '💥 Breaking Change: Introduce Breaking Changes' },
		{ value: '📦 Build', name: '📦 Build: Changes That Affect the Build System or External Dependencies' },
		{ value: '♻️ Chore', name: '♻️ Chore: Changes to Build Process or Auxiliary Tools and Libraries' },
		{ value: '⚙️ CI', name: '⚙️ CI: Changes to Continuous Integration Configuration' },
		{ value: '👁️‍🗨️ Code Review', name: '👁️‍🗨️ Code Review: Code Review Changes' },
		{ value: '🔧 Config', name: '🔧 Config: Modify Configuration Files' },
		{ value: '💄 Cosmetic', name: '💄 Cosmetic: Small Visual or UI Changes' },
		{ value: '🚀 Deploy', name: '🚀 Deploy: Deploy Changes' },
		{ value: '📖 Docs', name: '📖 Docs: Documentation Only Changes' },
		{ value: '💡 Document Source Code', name: '💡 Document Source Code' },
		{ value: '⬇️ Downgrade Dependencies', name: '⬇️ Downgrade Dependencies' },
		{ value: '✨ Feature', name: '✨ Feature: A New Feature' },
		{ value: '🐛 Fix', name: '🐛 Fix: A Bug Fix' },
		{ value: '🎨 Format', name: '🎨 Format: Format Code' },
		{ value: '⚡️ General Update', name: '⚡️ General Update: General Updates or Minor Fixes' },
		{ value: '🚑 Hotfix', name: '🚑 Hotfix: Quick Fix for Critical Bug' },
		{ value: '🎉 Initial', name: '🎉 Initial: Initial Commit' },
		{ value: '👚 Lint', name: '👚 Lint: Linting Code Changes' },
		{ value: '🐧 Linux Fix', name: '🐧 Linux Fix: Linux-specific Fixes' },
		{ value: '🍎 MacOS Fix', name: '🍎 MacOS Fix: MacOS-specific Fixes' },
		{ value: '✅ Make Test Pass', name: '✅ Make Test Pass: Resolve Failing Tests' },
		{ value: '🔀 Merge Branches', name: '🔀 Merge Branches' },
		{ value: '📇 Metadata', name: '📇 Metadata: Update Metadata' },
		{ value: '🚚 Move/Rename Repository', name: '🚚 Move or Rename Repository' },
		{ value: '🐎 Performance', name: '🐎 Performance: A Code Change That Improves Performance' },
		{ value: '🔨 Refactor', name: '🔨 Refactor: A Code Change That Neither Fixes a Bug Nor Adds a Feature' },
		{ value: '🗑️ Revert', name: '🗑️ Revert: Revert to a Previous Commit' },
		{ value: '🔒 Security', name: '🔒 Security: Fix Security Issues' },
		{ value: '💎 Style', name: '💎 Style: Changes That Do Not Affect Meaning of the Code (Formatting, Whitespace, etc.)' },
		{ value: '🚨 Tests', name: '🚨 Tests: Add Missing Tests' },
		{ value: '🔤 Translate', name: '🔤 Translate: Add or Update Translations' },
		{ value: '⬆️ Upgrade Dependencies', name: '⬆️ Upgrade Dependencies' },
		{ value: '🔖 Version Tag', name: '🔖 Version Tagging: Tagging a Version' },
		{ value: '🪟 Windows Fix', name: '🪟 Windows Fix: Windows-specific Fixes' },
		{ value: '🚧 WIP', name: '🚧 WIP: Work in Progress' },
	],

	/**
	 * ## Type Suffix - `typeSuffix`
	 *
	 * The commit type suffix.
	 *
	 * ### Example
	 * For Type Prefix `[`, Type Suffix `]`, Subject Separator `' '`:
	 *
	 * `[Feature] This Is A New Feature`
	 *
	 * @default ''
	 */
	typeSuffix: '',
}
