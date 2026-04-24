const fruits = ["りんご", "バナナ"] as const;
// fruits.push("みかん"); // エラー：配列の変更はできない
// fruits[0] = "ぶどう"; // エラー：要素の変更はできない
const settings = { theme: "dark" } as const;
// settings.theme = "light"; // エラー：プロパティの変更はできない
