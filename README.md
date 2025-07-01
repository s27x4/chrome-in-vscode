# chrome-in-vscode

VS Code から Chrome を起動するサンプル拡張機能です。

コマンド `Launch Chrome` を実行すると `google-chrome --remote-debugging-port=9222` を起動します。
起動時のコマンドラインやエラーは `CodingAgent` という出力チャンネルに記録され、
エラーが発生した場合はチャンネルが自動的に表示されます。
