<h1 align='Center'>Configuration</h1>

<p>
	The <code>Configuration</code> directory is a central hub for managing and maintaining consistent configurations across The Design System. It contains individual workspaces dedicated to setting up tools and utilities that ensure code quality, styling, testing, and more. Each workspace in this directory has a specific purpose and can be easily shared or extended across different parts of the monorepo.
</p>

<h2>Purpose</h2>

<p>
	The <code>Configuration</code> folder is designed to:
</p>

<ul>
	<li>
		<strong>Centralize Configurations: </strong>
		Manage and maintain all essential tooling configurations in one place.
	</li>
	<br />
	<li>
		<strong>Ensure Consistency: </strong>
		Apply uniform settings across multiple projects or packages within the monorepo.
	</li>
	<br />
	<li>
		<strong>Simplify Setup: </strong>
		Provide pre-configured settings that can be reused or extended by other projects.
	</li>
</ul>

<h2>Workspaces</h2>

<p>
	Each subdirectory represents a specific configuration workspace tailored to a particular tool or utility.
</p>

<ol>
	<li>
		<h3>CommitLint-Config</h3>
		<a href='./CommitLint-Config/README.md'>Directory</a>
		<p>Contains rules for <a href='https://commitlint.js.org'>CommitLint</a>, which helps ensure that commit messages adhere to a specific format. This workspace enforces a consistent commit message style, making it easier to understand changes and automate versioning.</p>
	</li>
	<li>
		<h3>ESLint-Config</h3>
		<a href='./ESLint-Config/README.md'>Directory</a>
		<p>Contains configuration for <a href='https://eslint.org'>ESLint</a>, a tool for identifying and fixing problems in JavaScript/TypeScript code. This workspace sets up rules and extensions to maintain code quality and catch potential issues early.</p>
	</li>
	<li>
		<h3>Jest-Config</h3>
		<a href='./Jest-Config/README.md'>Directory</a>
		<p>Offers a pre-configured setup for <a href='https://jestjs.io'>Jest</a>, a testing framework used for unit and integration testing. This workspace simplifies setting up Jest for projects and ensures all testing is done with a consistent configuration.</p>
	</li>
	<li>
		<h3>Prettier-Config</h3>
		<a href='./Prettier-Config/README.md'>Directory</a>
		<p>This workspace provides configuration settings for <a href='https://prettier.io'>Prettier</a>, a code formatter that enforces a consistent style by parsing the code and reprinting it with its rules. This ensures all projects have a uniform code format.</p>
	</li>
	<li>
		<h3>StyleLint-Config</h3>
		<a href='./StyleLint-Config/README.md'>Directory</a>
		<p>Houses configuration for <a href='https://stylelint.io'>StyleLint</a>, a linter for CSS/SCSS. It helps enforce consistent styling rules across The Design System's stylesheets and ensures a clean and maintainable codebase for CSS and other pre-processors.</p>
	</li>
	<li>
		<h3>TypeScript-Config</h3>
		<a href='./TypeScript-Config/README.md'>Directory</a>
		<p>Provides a base <code>TSConfig</code> setup for <a href='https://typescriptlang.org'>TypeScript</a>. Ths ensures that all TypeScript projects have a consistent compiler configuration, which can be extended as needed by individual packages.</p>
	</li>
	<li>
		<h3>Vitest-Config</h3>
		<a href='./Vitest-Config/README.md'>Directory</a>
		<p>Sets up a configuration for <a href='https://vitest.dev'>Vitest</a>, a Vite-native test runner. This workspace provides testing utilities and configurations to ensure all tests are run consistently across projects using Vitest.</p>
	</li>
</ol>

<h2>Usage</h2>

<p>
	To use any of the configurations, refer to the `README` inside each workspace for detailed instructions on how to integrate and extend the settings within the project or package. The workspaces are designed to be easily customizable and extensible.
</p>
