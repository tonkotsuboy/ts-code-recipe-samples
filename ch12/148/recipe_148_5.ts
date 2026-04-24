// 書籍の当該コードブロックはクラス定義と出力例が別位置に掲載されていますが、
// 配布コードでは1つの実行単位にまとめています。
class GameSettings {
  static difficulty = "Normal";
}

console.log(GameSettings.difficulty); // 出力: Normal

// 静的プロパティの値を変更する
GameSettings.difficulty = "Hard";
console.log(GameSettings.difficulty); // 出力: Hard
