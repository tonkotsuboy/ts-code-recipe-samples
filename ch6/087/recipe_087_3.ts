// オーバーロードシグネチャ（引数が1つ）
function format(value: string): string;
// オーバーロードシグネチャ（引数が2つ）
function format(value: number, currency: string): string;

// 実装
function format(value: string | number, currency?: string): string {
  // 文字列の場合
  if (typeof value === "string") {
    return value.trim().toUpperCase();
  }
  // 数値と通貨記号の場合
  if (typeof value === "number" && currency) {
    return `${currency}${value.toFixed(2)}`;
  }
  throw new Error("不正な引数");
}

// 使用例
console.log(format("  hello  ")); // "HELLO"
console.log(format(1234.5, "$")); // "$1234.50"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEiqGQfhkBYZMW4ZKEmGQ7QyAaGQswyEGGQxwyAh-wqPqAOpoDIMAjICYMgkP8BQAZgK4B2AxgC4CWA9o6LZwE4BbAIasAFADdhAG3oBTAFygAzq37tGAcwCUS1eq0BuaiAgx4SNFjxFiAJip0mbLjz5DRkmfKWN6ggCM5fgAaUGZ6fn45FgBPPTUNHQSDTWMTMEB87UBRiKcWDm5eARFxKVlFFUStUAAfUD9A4LCIqJjmWIB+FKTdStTQAG9qUFBTQHDTQHVtQHQlQDsGQBYNQAgVYdB2WlAxVliABzlONbL5UABeE9AAIn0ks+1B5ZHo1kieA7kAOkTBMW13zgBVLZ2-AAwsJlHIvsYRgBfZamQiAEgVABYMgCwEwAVMYAMKMA78rzJYjVbrTY7PagF7HU5nBpBfhnUAAMlp4Ui0TiNyGI3ucke-B4AAMACQDFrM9pQgUvH4AMXYAA85AATMR2bRQnmQ0AwkasAAW-E4AHd6nIDQBRKICMRnQCwcoBja0AVgxEa7GGEZUCAf3lABSugGj5ajMbjKTjSN7STiaMTuEoWkZauTSYMja7aQyjMBnAASxoAMhmAPJnH1+gNBkNh4qeUh2ADMABZXgBWMJnPkJpOmRvl6t1gAMZyAA
