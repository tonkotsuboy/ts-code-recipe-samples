// 書籍ではこのスニペットのみだが、単体実行のため numberGenerator の定義を同梱している
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const myGenerator = numberGenerator();
console.log(myGenerator.next()); // { value: 1, done: false }
console.log(myGenerator.next()); // { value: 2, done: false }
console.log(myGenerator.next()); // { value: 3, done: false }
console.log(myGenerator.next()); // { value: undefined, done: true }
