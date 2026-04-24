function* simpleGenerator() {
  const value1 = yield "A";
  console.log("受け取った値:", value1);
  const value2 = yield "B";
  console.log("受け取った値:", value2);
}
const gen = simpleGenerator();
console.log(gen.next().value);
// "A" (最初のnext()の引数は無視される)
console.log(gen.next("Hello").value);
// "受け取った値: Hello" が出力 → "B"
console.log(gen.next("World").value);
// "受け取った値: World" が出力 → undefined
