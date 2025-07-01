# Chrome in VSCode

## プロジェクト概要

このプロジェクトは、VSCode 上で Chrome ブラウザを起動し、拡張機能として動作させることで、Coding Agent を利用できるようにするサンプルです。VSCode の拡張機能と連携し、ブラウザを直接起動してエージェントを操作する基本機能を提供します。

## 基本機能

- VSCode コマンド `Coding Agent: Open` により、Chrome ブラウザを起動し、指定された URL でエージェントを開きます。
- VSCode の設定を通じて、Chrome の実行パスやエージェント URL を指定できます。

## インストール

1. リポジトリをクローンします。
2. `npm install` を実行して依存パッケージをインストールします。
3. VSCode で本リポジトリを開き、デバッグ実行または拡張機能としてインストールします。

## 使用例

VSCode のコマンドパレットで `Coding Agent: Open` を実行すると、設定した Chrome パスとエージェント URL を用いてブラウザが起動します。以下は実行イメージです。

```
> Coding Agent: Open
```

## VSCode 設定

設定 (`settings.json`) で以下のパラメータを指定できます。

- `codingAgent.chromePath`: Chrome の実行ファイルパスを設定します。
- `codingAgent.agentUrl`: 起動時に開くエージェントの URL を設定します。

適切に設定することで、`Coding Agent: Open` コマンドが期待通り動作します。
