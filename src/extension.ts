import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.openUrl', async (url?: string) => {
        if (!url) {
            url = await vscode.window.showInputBox({ prompt: '開きたいURLを入力してください' });
        }
        if (!url) {
            vscode.window.showErrorMessage('URLが指定されていません');
            return;
        }
        if (url.startsWith('javascript:')) {
            vscode.window.showErrorMessage('無効なURLです: javascriptスキームは許可されていません');
            return;
        }
        if (!/^https?:\/\//.test(url)) {
            vscode.window.showErrorMessage('無効なURLです: http(s)のみ許可されています');
            return;
        }
        try {
            await vscode.env.openExternal(vscode.Uri.parse(url));
        } catch (err) {
            vscode.window.showErrorMessage(`URLを開く際にエラーが発生しました: ${err}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
