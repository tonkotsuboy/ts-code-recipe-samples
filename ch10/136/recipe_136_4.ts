type NestedPromise = Promise<Promise<string>>;
type Result = Awaited<NestedPromise>; // string型が抽出される

const sample: Result = "hello";
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAchDOwIBMAKAnA9gWwJb2gF4oMd8IAeUvAixdXAOwHMA+VgbgChRIoAlBAFcANsCjEAggHcAhriTIKcRCmrlOUAPRao9Js0DR6oBkGQL1GgL8VAqgyAYhkDRDFy4BjTI0R7Z2MCIgAuAcLEJKAAiAAsIERFMYO5nV0xvADoo5gAKeA8vCABKDiA
