function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for (const n of numberGenerator()) {
  console.log(n);
}
// 1
// 2
// 3
