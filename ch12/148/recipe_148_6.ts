class GameSettings {
  difficulty: string; // 通常のプロパティ

  constructor(difficulty: string) {
    this.difficulty = difficulty;
  }
}

const settings1 = new GameSettings("Normal");
const settings2 = new GameSettings("Normal");

console.log(settings1.difficulty); // 出力: Normal
console.log(settings2.difficulty); // 出力: Normal

// プロパティを更新する
settings1.difficulty = "Easy";
console.log(settings1.difficulty); // 出力: Easy
console.log(settings2.difficulty); // 出力: Normal（変更されない）
