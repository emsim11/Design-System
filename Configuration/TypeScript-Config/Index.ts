import path from 'path'
import { CompilerOptions, convertCompilerOptionsFromJson, Diagnostic, flattenDiagnosticMessageText, readConfigFile, sys } from 'typescript'

/**
 * Represents the file path to the {@link [Base TypeScript Configuration File](./TSConfig.Base.json)}.
 *
 * Use this constant to refer to the `TSConfig.Base.json` file when loading or accessing TypeScript compiler options.
 * The path is generated dynamically based on the current directory, ensuring compatibility across different environments.
 *
 * #### Example
 * ```TypeScript
 * console.log(TSConfigFile); // Output: /Absolute/Path/To/TSConfig.Base.json
 * ```
 *
 * #### Notes
 * - This path is relative to the current directory (`__dirname`) and will change based on where the script is executed.
 * - Make sure the file exists at the specified path to avoid runtime errors when accessing it.
 */
const TSConfigurationFile: string = path.join(__dirname, 'TSConfig.Base.json')

/**
 * Converts a TypeScript diagnostic object into a readable message string.
 *
 * This function extracts the filename and diagnostic message from the provided TypeScript diagnostic object, formats it by including the filename (if available) as a prefix, and returns a string that can be easily logged or displayed.
 *
 * The function uses `flattenDiagnosticMessageText` to handle multi-line messages gracefully.
 *
 * #### Example
 * ```TypeScript
 * const Diagnostic: ts.Diagnostic = {
 * 	file: { fileName: 'Example.ts' }, // Example File
 * 	messageText: 'File Not Found',
 * };
 * console.log(DiagnosticToMessage(Diagnostic)); // Output: "Example.ts: File Not Found"
 * ```
 *
 * #### Notes
 * - If the diagnostic contains a file, the filename will be prefixed to the message.
 * - The function flattens multi-line diagnostic messages into a single string with line breaks.
 *
 * @param Diagnostic - The diagnostic object containing details about the TypeScript error or warning.
 *
 * @returns The formatted diagnostic message as a string.
 */
export const DiagnosticToMessage = (Diagnostic: Diagnostic): string => {
	const { file: File, messageText: MessageText } = Diagnostic
	const FilePrefix = File ? `${File.fileName}: ` : ''
	const Text = flattenDiagnosticMessageText(MessageText, '\n')
	return `${FilePrefix}${Text}`
}

/**
 * Loads the TypeScript compiler options from the {@link [Base TypeScript Configuration File](./TSConfig.Base.json)}.
 *
 * This function reads and returns the compiler options defined in the base TypeScript configuration file, using the `LoadTSCompilerOptions` helper function to handle file reading and error handling.
 *
 * #### Example
 * ```TypeScript
 * const CompilerOptions = LoadBaseTSCompilerOptions();
 * console.log(CompilerOptions);
 * ```
 *
 * #### Notes
 * - This function specifically loads options from `TSConfig.Base.json` located in the same directory.
 *
 * @returns The TypeScript compiler options extracted from the base configuration file.
 */
export const LoadBaseTSCompilerOptions = (): CompilerOptions => {
	return LoadTSCompilerOptions(TSConfigurationFile)
}

/**
 * Loads TypeScript compiler options from a specified configuration file.
 *
 * This function reads a TypeScript configuration file, extracts its compiler options, and handles any errors that may occur during the process.
 *
 * If errors are found, they are logged and an exception is thrown.
 *
 * #### Example
 * ```TypeScript
 * const CompilerOptions = LoadTSCompilerOptions('Path/To/TSConfig.json');
 * console.log(CompilerOptions);
 * ```
 *
 * #### Notes
 * - The function reads the configuration using `ts.readConfigFile`.
 * - If there are errors, it logs each diagnostic message and throws an error.
 *
 * @param Path - The path to the TypeScript configuration file.
 *
 * @returns The TypeScript compiler options extracted from the specified file.
 * @throws Will throw an error if the configuration file contains errors or cannot be read.
 */
export const LoadTSCompilerOptions = (Path: string): CompilerOptions => {
	const { config: Configuration, error: TypeScriptError } = readConfigFile(Path, sys.readFile)

	if (TypeScriptError) {
		throw new Error(DiagnosticToMessage(TypeScriptError))
	}

	const Options = convertCompilerOptionsFromJson(Configuration.compilerOptions, '')

	const { errors: Errors } = Options

	if (Errors.length > 0) {
		Errors.forEach((Diagnostic) => {
			console.log(DiagnosticToMessage(Diagnostic))
		})

		throw new Error('Errors Found In Base TypeScript Configuration File')
	}

	return Options.options
}
