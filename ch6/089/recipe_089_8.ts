// 書籍の紙面では while ループ内の分岐が省略されているため、drafts/chapter6/6-23.md の完全版を採用している
function* myGenerator(): Generator<string, void, number> {
  let count = 0;
  while (true) {
    const increment = yield `現在の値: ${count}`;
    if (typeof increment === "number") {
      count += increment;
    } else {
      count++;
    }
  }
}

const gen = myGenerator();
console.log(gen.next().value); // 現在の値: 0
console.log(gen.next(10).value); // 現在の値: 10
gen.next("Hello"); // 型エラー
