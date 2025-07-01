# chrome-in-vscode

## パッケージの作成

以下の手順で `.vsix` ファイルを生成できます。

```bash
npm install -g @vscode/vsce
npm run package
```

これにより `vsce` が実行され、`chrome-in-vscode-<version>.vsix` というファイルが生成されます。

## VSCode へのインストール

生成した `.vsix` ファイルは以下の方法でインストールできます。

- コマンドパレットで **"Extensions: Install from VSIX..."** を選択し、生成したファイルを指定する
- もしくは CLI から次のコマンドを実行する

```bash
code --install-extension chrome-in-vscode-<version>.vsix
```
