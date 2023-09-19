// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "workspacebug" is now active!');


	// open a folder
	if (vscode.workspace.workspaceFile !== undefined && vscode.workspace.workspaceFolders === undefined
		|| vscode.workspace.workspaceFile === undefined && vscode.workspace.workspaceFolders !== undefined) {
		vscode.window.showErrorMessage(
			`workspaceFile and workspaceFolders are not both 'undefined when no workspace has been opened`
			+ `\nworkspaceFile: ${JSON.stringify(vscode.workspace.workspaceFile)}`
			+ `\nworkspaceFolders: ${JSON.stringify(vscode.workspace.workspaceFolders)}`)
	} else {
		vscode.window.showInformationMessage("Both workspaceFile and workspaceFolders are 'undefined when no workspace has been opened'")
	}

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('workspacebug.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from workspaceBug!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
