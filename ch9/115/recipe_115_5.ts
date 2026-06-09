type A = { type: "A"; a: number };
type B = { type: "B"; b: number };

function isA(x: A | B) {
  return x.type === "A";
}

function check(foo: A | B) {
  if (isA(foo)) {
    // OK！
    console.log(foo.a);
  }
}

check({ type: "A", a: 1 });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAglC8UDeVSQFxQEQywbigENMA7AVwFsAjCAJygF88AoNaAIQWVXAky3b4oVUpRr0mzZgDMyJAMbAAlgHsSUJQGcYACgAemOAB8o7AJTJmUKLQjAytdXoB0bBPEQ58zBlNkLlNSh5AAsIeQBrHWkVFUMoE3NLayVpKB0tXRiVMwskK2soAHoiqAB5AGlAQH+C63k1TRUAGwhnJpUAc2jY50IzFmtfX2ZQ8KiUNn5cABoiTABGRn6gA
