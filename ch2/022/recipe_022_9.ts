// 注: 書籍では recipe_022_8.ts で定義された getUserConfig 関数の呼び出しのみを掲載。
//     単体で動くよう、このファイル内に関数定義を同梱しています。
type UserConfig = {
  theme?: string;
  language?: string;
};
function getUserConfig(config?: UserConfig): void {
  const theme = config?.theme ?? "light";
  const language = config?.language ?? "ja";
  console.log(`テーマ: ${theme}, 言語: ${language}`);
}

getUserConfig({ theme: "dark", language: "en" });
// テーマ: dark, 言語: en
