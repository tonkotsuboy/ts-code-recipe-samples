// Generator<yield型, return型, next型>
function* typedGenerator(): Generator<string, void, unknown> {
  yield "1番目の値";
  yield "2番目の値";
  yield "3番目の値";
}

for (const v of typedGenerator()) {
  console.log(v);
}
// 1番目の値
// 2番目の値
// 3番目の値
