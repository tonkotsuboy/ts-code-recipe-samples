function add(a: number, b: number) {
  return a + b;
}

// プログラムを実行するときに
const result = add(24, "後藤"); // エラー: string型はnumber型に代入できません
console.log(result);
