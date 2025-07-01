import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('codingAgent.openChrome', async () => {
        const config = vscode.workspace.getConfiguration('codingAgent');
        const chromePath = (config.get<string>('chromePath') || '').trim();
        const agentUrl = (config.get<string>('agentUrl') || '').trim();

        if (!chromePath) {
            const open = '設定を開く';
            const selected = await vscode.window.showErrorMessage('Chrome のパスを設定してください', open);
            if (selected === open) {
                vscode.commands.executeCommand('workbench.action.openSettings', 'codingAgent.chromePath');
            }
            return;
        }

        if (!agentUrl) {
            const open = '設定を開く';
            const selected = await vscode.window.showErrorMessage('Agent URL を設定してください', open);
            if (selected === open) {
                vscode.commands.executeCommand('workbench.action.openSettings', 'codingAgent.agentUrl');
            }
            return;
        }

        vscode.window.showInformationMessage(`Chrome path: ${chromePath}, Agent URL: ${agentUrl}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
