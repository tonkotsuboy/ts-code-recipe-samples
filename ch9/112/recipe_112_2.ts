type A = {
  type: "a-type";
  foo: string;
};

type B = {
  type: "b-type";
  bar: string;
};

function myFunction(arg: A | B): void {
  if (arg.type === "a-type") {
    console.log(arg.foo); // argはA型
  } else {
    console.log(arg.bar); // argはB型
  }
}

myFunction({ type: "a-type", foo: "myFoo" }); // 「myFoo」と出力される
myFunction({ type: "b-type", bar: "myBar" }); // 「myBar」と出力される

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAglC8UDeAoKVSQFxQEQEMBaTCXAbjSgDMB7GnAZ2ACcBLAOwHMKBfClElABCCZJRI5cAI2LhSFdFPzNGLDtxR8UKKgFd2AY2Csa7KAFsQAMX1GT7ABTLOOOAB9hAShwA3GqwATMXRWKignZk4AOkF4OLwiElxPYPQoA1MGGgAbCCjsmk4I6NoaTzIoAHpKqGdAewYYQGj1Sh4oCGyGaFQ09MycvIKi5yilZnKqmvqhZvQeTW1LG0NjUwckDDlJRLlcABpqOklFulwoHnHqqEAYBmOaQFgGQAsGQC-FQGylQFUGQBiGQGiGFEXbFcc6wkeBkSX2oyOICEylO5wqlxuUOUj1eny+QA
