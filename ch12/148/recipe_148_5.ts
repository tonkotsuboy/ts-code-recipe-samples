class GameSettings {
  static difficulty = "Normal";
}

console.log(GameSettings.difficulty); // 出力: Normal

// 静的プロパティの値を変更する
GameSettings.difficulty = "Hard";
console.log(GameSettings.difficulty); // 出力: Hard

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEDiYFsCmBlJAXdBLAdgcxgG8AoaaCdMbYaAEywDMGtgBXEdAT2gF5oAiAHIB7AE4IwIfgG5iAX2LFgwnBGEgkAOhDC8ACnjI0mXAU30mLdlwCU06AHoH0QF+KgbKUAXNBHjJip9CAmumAIW6A6wyAtwyAiwyAYwyAxQyAdgyAJAqASQyAkJqAL2aAmgyA0QzEhqgY2PgQ5ozMbBzcfPwAEmCitDJKKmoa2roGiAUmxaWWFbb2Ae5edQ1AA
