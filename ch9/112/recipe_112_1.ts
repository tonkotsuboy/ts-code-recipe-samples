type A = {
  type: "a-type";
  foo: string;
};

type B = {
  type: "b-type";
  bar: string;
};

const objA: A = { type: "a-type", foo: "hello" };
const objB: B = { type: "b-type", bar: "world" };

console.log(objA.type); // "a-type"
console.log(objB.type); // "b-type"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAglC8UDeAoKVSQFxQEQEMBaTCXAbjSgDMB7GnAZ2ACcBLAOwHMKBfClElABCCZJRI5cAI2LhSFdFPzNGLDtxR8UKAMY12TKDSkArGDjiIkGOZKIlcAGmp1JACwgAbTzVxQtegbARqZCOCJWNth4Mg7OSip4AO40zJ4AJn5auvoMNJ4QAHQ+nAAUxmaFJACUZFAA9PV49nK4OQb5RSXloVVytQ1N0rKQuEA
