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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEDiYFsCmBlJAXdBLAdgcxgG8AoaaAEywDMqtgBXEdATwC5oJ0AnXPAbmgB6QdEBYCYA49QHYMgdYZAtwyBFhkBjDIGKGYqWjAA9jk5d6wdJq4AKSjTqMW7XbwCU0EmTLoAFlggA6M7QZNm0AF4Kah9LZj51AF9iaOItHXQODGx8CABGQOgcJAB3OERUZN4IYwAiADkjBDAQUtsI+M4kzGKAJkzsvPhkNBbUssquatr6tUbNECQPEE08Ywgi1LSvEIs-eqERQC-FQGyldkHhuO0ICamZuYW+glaV818WDeFoXf2qmrUnuSVlQCSGQBezQANpoBNBkA0QzES4pAjLbxrFiZUoAUUgzFKDWOp2ms3miyht1C6wETxe0CREGYRx0GPO2KuEBuMPuzEe2z20AONUAEP+ASE0-oBVBkAMQyAKwZACIMgEh-oA
