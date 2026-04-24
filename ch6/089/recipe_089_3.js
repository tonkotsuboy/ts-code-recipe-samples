function* fruitGenerator() {
  yield "りんご";
  yield "バナナ";
  yield "チェリー";
}

for (const fruit of fruitGenerator()) {
  console.log(fruit);
}
// りんご, バナナ, チェリー
