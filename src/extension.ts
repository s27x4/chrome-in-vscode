import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('chrome-in-vscode.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from chrome-in-vscode!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
