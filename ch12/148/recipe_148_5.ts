class GameSettings {
  static difficulty = "Normal";
}

console.log(GameSettings.difficulty); // 出力: Normal

// 静的プロパティの値を変更する
GameSettings.difficulty = "Hard";
console.log(GameSettings.difficulty); // 出力: Hard
