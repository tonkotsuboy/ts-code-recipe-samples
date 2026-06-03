function add(a: number, b: number): number {
  return a + b;
}

// @ts-expect-error ts(2345) number 型の引数に string を渡すとエラーになることを示すデモ
const result = add(10, "2");
// コンパイルエラー
console.log(result);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAQwCaoBTIFyLCAWwCMBTAJwBpEjd9jyBKWw0sxAbwChFEySoQZJMkQBqagG5OAX06cA9PMQABKAGcAtCQAeABxLQtZMnDbqMAJgDMAFgCsDPC3KJA0eqA7BkCo+oAdTQNYMiNSgyGDAAc0RAJIZAQjtATQZACwZACoZAS4ZAH4ZfQCsGQGiGQGUGOIjALk8YwHGGQCOGTggEQN4SNRAAGyhEAF4UdAwARgAGKgAiCx6GKUVEQGaGQGeGQEWGQBKGQGuGZJTyyrg6kgA6OrhQjD5ahsGgA
