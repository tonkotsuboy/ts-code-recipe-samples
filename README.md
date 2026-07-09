# TypeScriptコードレシピ集 サンプルコード

[![TypeScriptコードレシピ集](https://github.com/user-attachments/assets/1979f1d7-8d8c-47ed-9606-dcb76ec87164)](https://gihyo.jp/book/2026/978-4-297-15628-2)

書籍『TypeScriptコードレシピ集』（技術評論社）のサンプルコードです。本書で紹介しているコードを、章とレシピ番号ごとに収録しています。手元で実際に動かし、値を書き換えながら読み進めると、理解が深まります。

- 書籍ページ: https://gihyo.jp/book/2026/978-4-297-15628-2
- 著者による紹介記事: https://kano.codes/entry/ts-code-recipe

このリポジトリは書籍と併せて使うことを前提にしています。各コードが「何を学ぶためのものか」は、書籍の対応するレシピをご覧ください。


## コードの簡単な動かし方

サンプルのファイル末尾には、次のようなコメントを付けています。クリックするだけで、TypeScriptやJavaScriptのコードをオンラインで確認できます。
TypeScriptを学ぶのに環境構築がネックに感じるかもしれませんが、このツールを使えばコードをすぐに確認できます。

例

```ts
// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxgEsATALhgEYAaGMAQwFtFKAiQBXlAT0LZgF8aeQiQowATHUYt2gFiTAFOa8BOALoBuHDlCQQAG0QA6KAwBGegBQIUEAJSqgA
```

TypeScript公式のオンラインエディタの「[TypeScript Playground](https://www.typescriptlang.org/play/)」を使っており、これを使うとエディタやNode.jsの準備をしなくても、「Run」ボタンを押すだけで`console.log`の出力を「Logs」タブで確認でき、型エラーも赤い波線で表示されます。



## フォルダー構成

サンプルは3階層で並べています。章ごとのフォルダーの中にレシピ番号のフォルダーがあり、そのなかにコードファイルが入っています。

▼ フォルダーの全体像

```
ts-code-recipe-samples
├ ch1/    第1章
│  ├ 001/
│  ├ 002/
│  └ …
├ ch2/    第2章
│  ├ 009/
│  └ …
└ ch14/   第14章
   └ …
```

レシピ番号は、書籍のレシピ番号（001〜177）とそのまま対応しています。たとえば書籍のレシピ048「文字列を表現したい」のコードは`ch4/048/`フォルダーに入っています。各ファイルは`recipe_<レシピ番号>_<連番>.<拡張子>`という名前です。


▼ レシピ048のファイル例

```
ch4/048/
├ recipe_048_1.js   ← JavaScriptの例
├ recipe_048_2.ts   ← TypeScriptの例
└ …
```


## 本格的に動かしたい場合

コードを手軽に確認するには、冒頭で紹介したTypeScript Playgroundを使うのが便利です。[Visual Studio Code](https://code.visualstudio.com/)などの手元のエディターで動かしたい場合は、次の手順にしたがいます。環境構築について詳しくは第一章を参照してください。


### `.ts`（TypeScript）ファイル

TypeScriptのサンプルは、まずエディタで開いて型を確認するのが基本です。実行は、出力を見て確かめたいときに行いましょう。

1. エディタで開いて型を確認する（おすすめ）

VS CodeなどのTypeScript対応エディタでファイルを開き、変数や関数にマウスカーソルを乗せる（ホバーする）と、推論された型が表示されます。型に誤りがあれば、赤い波線で示されます。書籍の解説と見比べながら「どんな型が付くか」をその場で確認できるので、本書の学習にはこの方法がもっとも手軽です。

![VS Codeで変数にホバーし、推論された型を確認している様子](https://github.com/user-attachments/assets/c91b2dfb-5c0e-4b79-9d0d-9ff085572345)

たとえば`ch3/027/recipe_027_10.ts`の`user`にホバーすると、`as const`によって`{ readonly name: "鈴木"; readonly age: 30 }`という型に推論されているのが分かります。

2. コマンドで型チェックする

ファイルを実行せず、型エラーの有無だけを調べたいときは、TypeScriptの型チェッカー`tsc`を使います。

▼ ファイル単体の型チェック

```sh
npx -p typescript tsc --noEmit --ignoreConfig ch2/009/recipe_009_1.ts
```

`--ignoreConfig`は、リポジトリルートの`tsconfig.json`を読み込まずにファイル単体を検査するためのオプションです。付けないと`tsc`はエラー`TS5112`で停止します。

### `.js`（JavaScript）ファイル

そのまま`node`で実行できます。

▼ JavaScriptの実行

```sh
node ch1/001/recipe_001_1.js
```

`.js`ファイルにも、`.ts`と同じくTypeScript Playgroundの実行リンクを付けています。リンクはJavaScriptモード（型チェックなし）で開くので、JavaScriptそのものの挙動を確認できます。

### `.html`ファイル / `index.html`を含むフォルダー

ブラウザの動作を扱うサンプルです。HTMLファイルをブラウザで開いて確認しましょう。読み込みや通信をともなうサンプルなど、一部はローカルサーバー上で開く必要があります。

### `tsconfig.json`や`package.json`を含むフォルダー

主に第14章（TypeScript設定）のサンプルです。設定そのものを示すデモなので、フォルダー内の`tsconfig.json`を読んで確認しましょう。`tsconfig.json`を同梱したフォルダーは、そこに移動して`npx -p typescript tsc`を実行すると、その設定での型チェックを試せます。同梱の`package.json`は依存パッケージを持たないため、`npm install`は不要です。
