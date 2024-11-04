<!-- Heading -->
<div align='Center'>
	<h1>TypeScript Configuration For The Design System</h1>
	<a href="https://opensource.org/license/MIT">
		<img src="https://img.shields.io/badge/License-MIT-hotpink" alt="License" />
	</a>
</div>

<!-- Overview -->
<h2>Overview</h2>

<p>
	This workspace provides a comprehensive TypeScript configuration for The Design System. It includes a <a href='./TSConfig.Base.json'>base TypeScript configuration file </a>(<code>TSConfig.Base.json</code>), a <a href='./TSConfig.json'>project-specific TypeScript file</a>, and utility functions to handle TypeScript diagnostics and compiler options.
</p>

<!-- Table of Contents -->
<h2>Table of Contents</h2>

<ul>
	<li><a href='#Installation'>Installation</a></li>
	<br />
	<li><a href='#Configuration'>Configuration Files</a></li>
	<br />
	<li><a href='#Scripts'>Scripts</a></li>
	<br />
	<li><a href='#Usage'>Usage</a></li>
	<br />
	<li><a href='#License'>License</a></li>
</ul>

<!-- Installation -->
<h2 id='Installation'>Installation</h2>

<p>
	To set up this TypeScript configuration in a project, run the following command:
</p>

```Bash
yarn add typescript-config
```

<!-- Configuration Files -->
<h2 id='Configuration'>Configuration Files</h2>

<ol>
	<li>
		<h3>TSConfig.Base.json</h3>
		<a href='./TSConfig.Base.json'>File</a>
		<p>This file contains the base configuration settings for TypeScript. It serves as a foundational configuration that can be extended in other configuration files.</p>
	</li>
	<li>
		<h3>TSConfig.json</h3>
		<a href='./TSConfig.json'>File</a>
		<p>This project-specific configuration file extends <code>TSConfig.Base.json</code> and includes additional settings tailored to the needs of the project.</p>
	</li>
	<li>
		<h3>Index.ts</h3>
		<a href='./Index.ts'>File</a>
		<p>This file includes utility functions for handling TypeScript diagnostics and loading compiler options:</p>
		<ul>
			<li>
				<strong><code>DiagnosticToMessage</code>:</strong> Converts a TypeScript diagnostic object into a readable message string.
			</li>
			<br />
			<li>
				<strong><code>LoadBaseTSCompilerOptions</code>:</strong> Loads the base TypeScript compiler options from <code>TSConfig.Base.json</code>.
			</li>
			<br />
			<li>
				<strong><code>LoaTSCompilerOptions</code>:</strong> Loads TypeScript compiler options from a specified path and handles errors appropriately.
			</li>
		</ul>
	</li>
</ol>

<!-- Scripts -->
<h2 id='Scripts'>Scripts</h2>

<p>
	The following scripts are available in this workspace:
</p>

<ul>
	<li><strong><code>build</code>:</strong> Compiles the TypeScript files into JavaScript.</li>
	<br />
	<li><strong><code>clean</code>:</strong> Removes the <code>Build</code> directory.</li>
	<br />
	<li><strong><code>lint</code>:</strong> Lints the TypeScript files.</li>
	<br />
	<li><strong><code>format</code>:</strong> Formats the TypeScript files.</li>
	<br />
	<li><strong><code>prepare</code>:</strong> Runs linting, formatting, cleaning, and building in sequence.</li>
</ul>

<p>
	To run a script, use:
</p>

```Bash
yarn run <script-name>
```

<!-- Usage -->
<h2 id='Usage'>Usage</h2>

<p>
	Once the package is installed, import the utility functions into TypeScript files:
</p>

```TypeScript
import { DiagnosticToMessage, LoadBaseTSCompilerOptions } from 'typescript-config`
```

<p>
	Use the functions as needed to handle TypeScript diagnostics and configurations.
</p>

<!-- License -->
<h2 id='License'>License</h2>

<p>
	This project is licensed under the MIT License.
</p>

<p>
	See the <a href='../../LICENSE'>LICENSE</a> file for details.
</p>
