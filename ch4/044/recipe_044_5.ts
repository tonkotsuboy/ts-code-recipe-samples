function rollDice(): number {
  // 1から6までの整数を生成
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice()); // 例: 4
console.log(rollDice()); // 例: 1
