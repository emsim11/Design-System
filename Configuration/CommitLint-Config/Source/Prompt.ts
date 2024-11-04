const CommitLintPrompt = {
	messages: {
		emptyWarning: 'Commit message cannot be empty. Please provide a meaningful message.',
		lowerLimitWarning: 'The commit message is below the required character limit.',
		max: 'The commit message exceeds the maximum length of %d characters.',
		min: 'The commit message must be at least %d characters long.',
		skip: 'This commit message is skipped from linting.',
		upperLimitWarning: 'The commit message is over the allowed character limit.',
	},
	questions: {
		header: {
			description: 'Write a BRIEF header summarizing the change:/n',
		},
		type: {
			description: 'Select the TYPE of change for the commit:',
			enum: {
				'♿️ A11y': {
					description: 'Accessibility Improvements',
					emoji: '♿️',
					title: 'Accessibility',
				},
				'➕ Add Dependencies': {
					description: 'Add New Dependencies',
					emoji: '➕',
					title: 'Add Dependencies',
				},
				'🧪 Add Test': {
					description: 'Add New Tests',
					emoji: '🧪',
					title: 'Add Test',
				},
				'🔬 Analytics': {
					description: ' Add or Update Analytics Tracking',
					emoji: '🔬',
					title: 'Analytics',
				},
				'💥 Breaking Change': {
					description: 'Introduce Breaking Changes',
					emoji: '💥',
					title: 'Breaking Change',
				},
				'📦 Build': {
					description: 'Changes That Affect the Build System or External Dependencies',
					emoji: '📦',
					title: 'Build',
				},
				'♻️ Chore': {
					description: 'Changes to Build Process or Auxiliary Tools and Libraries',
					emoji: '♻️',
					title: 'Chore',
				},
				'⚙️ CI': {
					description: 'Changes to Continuous Integration Configuration',
					emoji: '⚙️',
					title: 'Continuous Integration',
				},
				'👁️‍🗨️ Code Review': {
					description: 'Code Review Changes',
					emoji: '👁️‍🗨️',
					title: 'Code Review',
				},
				'🔧 Config': {
					description: 'Modify Configuration Files',
					emoji: '🔧',
					title: 'Configuration',
				},
				'💄 Cosmetic': {
					description: 'Small Visual or UI Changes',
					emoji: '💄',
					title: 'Cosmetic',
				},
				'🚀 Deploy': {
					description: 'Deploy Changes',
					emoji: '🚀',
					title: 'Deployment',
				},
				'📖 Docs': {
					description: 'Documentation Only Changes',
					emoji: '📖',
					title: 'Documentation',
				},
				'💡 Document Source Code': {
					description: 'Document Source Code',
					emoji: '💡',
					title: 'Document Source Code',
				},
				'⬇️ Downgrade Dependencies': {
					description: 'Downgrade Dependencies',
					emoji: '⬇️',
					title: 'Downgrade Dependencies',
				},
				'✨ Feature': {
					description: 'A New Feature',
					emoji: '✨',
					title: 'Feature',
				},
				'🐛 Fix': {
					description: 'A Bug Fix',
					emoji: '🐛',
					title: 'Bug Fix',
				},
				'🎨 Format': {
					description: 'Format Code',
					emoji: '🎨',
					title: 'Format',
				},
				'⚡️ General Update': {
					description: 'General Updates or Minor Fixes',
					emoji: '⚡️',
					title: 'General Update',
				},
				'🚑 Hotfix': {
					description: 'Quick Fix for Critical Bug',
					emoji: '🚑',
					title: 'Hotfix',
				},
				'🎉 Initial': {
					description: 'Initial Commit',
					emoji: '🎉',
					title: 'Initial Commit',
				},
				'👚 Lint': {
					description: 'Linting Code Changes',
					emoji: '👚',
					title: 'Lint',
				},
				'🐧 Linux Fix': {
					description: 'Linux-specific Fixes',
					emoji: '🐧',
					title: 'Linux Fix',
				},
				'🍎 MacOS Fix': {
					description: 'MacOS-specific Fixes',
					emoji: '🍎',
					title: 'MacOS Fix',
				},
				'✅ Make Test Pass': {
					description: 'Resolve Failing Tests',
					emoji: '✅',
					title: 'Make Test Pass',
				},
				'🔀 Merge Branches': {
					description: 'Merge Branches',
					emoji: '🔀',
					title: 'Merge Branches',
				},
				'📇 Metadata': {
					description: 'Update Metadata',
					emoji: '📇',
					title: 'Metadata',
				},
				'🚚 Move/Rename Repository': {
					description: 'Move or Rename Repository',
					emoji: '🚚',
					title: 'Move/Rename Repository',
				},
				'🐎 Performance': {
					description: 'A Code Change That Improves Performance',
					emoji: '🐎',
					title: 'Performance',
				},
				'🔨 Refactor': {
					description: 'A Code Change That Neither Fixes a Bug Nor Adds a Feature',
					emoji: '🔨',
					title: 'Refactor',
				},
				'🗑️ Revert': {
					description: 'Revert to a Previous Commit',
					emoji: '🗑️',
					title: 'Revert',
				},
				'🔒 Security': {
					description: 'Fix Security Issues',
					emoji: '🔒',
					title: 'Security',
				},
				'💎 Style': {
					description: 'Changes That Do Not Affect Meaning of the Code (Formatting, Whitespace, etc.)',
					emoji: '💎',
					title: 'Style',
				},
				'🚨 Tests': {
					description: 'Add Missing Tests',
					emoji: '🚨',
					title: 'Tests',
				},
				'🔤 Translate': {
					description: 'Add or Update Translations',
					emoji: '🔤',
					title: 'Translate',
				},
				'⬆️ Upgrade Dependencies': {
					description: 'Upgrade Dependencies',
					emoji: '⬆️',
					title: 'Upgrade Dependencies',
				},
				'🔖 Version Tag': {
					description: 'Tagging a Version',
					emoji: '🔖',
					title: 'Version Tag',
				},
				'🪟 Windows Fix': {
					description: 'Windows-specific Fixes',
					emoji: '🪟',
					title: 'Windows Fix',
				},
				'🚧 WIP': {
					description: 'Work in Progress',
					emoji: '🚧',
					title: 'WIP',
				},
			},
		},
		scope: {
			description: 'Denote the SCOPE of this change:',
		},
		subject: {
			description: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		},
		body: {
			description: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		},
		isBreaking: {
			description: 'Are there any BREAKING CHANGES?',
			messages: {
				yes: 'Yes',
				no: 'No',
			},
		},
		breaking: {
			description: 'List any BREAKING CHANGES:\n',
		},
		breakingBody: {
			description: 'A BREAKING CHANGE commit requires a body. Provide a LONGER description of the commit itself:\n',
		},
		isIssueAffected: {
			description: 'Does this change affect any OPEN ISSUES?',
			messages: {
				yes: 'Yes',
				no: 'No',
			},
		},
		issues: {
			description: 'List any ISSUES CLOSED by or ISSUE REFERENCES for this change (e.g. "ISSUES CLOSED: #123", "REFERENCES: #123"):\n',
		},
		issuesBody: {
			description: 'If this change causes any ISSUES CLOSED, the commit requires a body. Provide a LONGER description of the commit itself:\n',
		},
	},
	settings: {
		enableMultipleScopes: true,
		scopeEnumSeparator: ', ',
	},
}

export default CommitLintPrompt
