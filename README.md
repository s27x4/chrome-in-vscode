# chrome-in-vscode

VSCode 上で URL を開くサンプル拡張機能です。

## 使い方

1. コマンドパレットで `Open URL in Chrome` を実行します。
2. 表示された入力ボックスに URL を入力します。
3. 入力された URL が `javascript:` で始まっている場合や `http(s)` 以外の形式の場合、エラーメッセージを表示して処理を中止します。
4. 正常な URL の場合は既定のブラウザで開きます。
