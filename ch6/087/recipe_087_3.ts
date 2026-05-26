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
