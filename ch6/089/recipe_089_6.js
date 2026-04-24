function* numbers() {
  yield 1;
  yield 2;
}

function* letters() {
  yield "A";
  yield "B";
}

function* combined() {
  yield* numbers();
  yield* letters();
}

const result = [...combined()];
console.log(result); // [1, 2, "A", "B"]
