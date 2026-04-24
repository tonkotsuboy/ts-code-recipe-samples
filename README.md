# ts-code-recipe-samples

書籍『TypeScript コードレシピ』（仮）のサンプルコードです。

## 構成

章ごとにフォルダが分かれており、その中にレシピ番号ごとのコードが置かれています。

```
ch1/    第1章
ch2/    第2章
...
ch14/   第14章
```

各レシピは `recipe_<番号>_<連番>.ts` のファイル名で配置されています。

## 実行方法

TypeScript ファイルは `tsc --noEmit` で型チェックできます。

```sh
npx tsc --noEmit ch1/001/recipe_001_1.ts
```

一部のレシピには固有の `package.json` / `tsconfig.json` が同梱されており、それらはレシピフォルダ内で個別にセットアップして動作確認してください。
