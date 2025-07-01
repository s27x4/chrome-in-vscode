const vscode = require('vscode');
const child_process = require('child_process');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const channel = vscode.window.createOutputChannel('CodingAgent');

    let disposable = vscode.commands.registerCommand('chrome-in-vscode.launchChrome', () => {
        const command = 'google-chrome';
        const args = ['--remote-debugging-port=9222'];
        channel.appendLine(`Starting Chrome: ${command} ${args.join(' ')}`);

        const proc = child_process.spawn(command, args, { shell: true });
        proc.on('error', (err) => {
            channel.appendLine(`Error: ${err.message}`);
            channel.show();
        });
    });

    context.subscriptions.push(disposable, channel);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
