// オーバーロードシグネチャ
function add(x: number, y: number): number;
function add(x: string, y: string): string;
// 実装
function add(x: unknown, y: unknown) {
  if (typeof x === "string" && typeof y === "string") {
    return `${x}, ${y}`;
  } else if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  throw new Error("不正な引数です");
}

const result1 = add(10, 20); // 30
const result2 = add("Hello", "world!"); // "Hello, world!"

console.log(result1); // 30
console.log(result2); // Hello, world!

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEiqGQfhkBYZMW4ZKEmGQ7QyAaGQswyEGGQxwwCgBmArgHYDGALgJYD2xoAhgCaMAUAHgFyjGEC2ARgFMATgBpQATy48BIgJTS+Q4QG4CJCjTpNWnUAGdywysQDm4qQaMnTCq8bNqQoQPnagUYj1ZKrQbN2XEgBrYmoAd2ILAOJgsOI5UABvXFBQSnxQFnIJAAdBanS2UABeEtAAIkMHUzLQADJa0Czc-Mli0orrMzL4pJSU4UFyQmE6AAMAEgS2AF9xSYlp0bUU6dBBABt9QVT0zJy8grai8pllGvrG-ZaJI5OlEW7E5L6BoZHQQoBqSWXQaefyAALYRhbiCUKgACiwhBwhYZUAsHKAY2tAFYMgFR9QAOpoBzBkAmgzdNT-XCkWiGUADfSEdbkACMxV8rGpAAZxAAmRlyFSgZwAZkZRJJ5DJggpVJZdJ08IAEht1tQyuIyqFqMJ1owAIT4rlgMrS9ay8RKlXqsq4fnEfTUdaCAB0stMLHJlJpHK1oF5ZotVtt1HtjtFLucuv1oENqrVQA
