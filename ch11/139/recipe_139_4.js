// 条件を満たさないときにエラーを投げる関数の例。
// 書籍では2つ目の呼び出し（checkPositive(-1)）でプロセスが落ちるため、
// 単体実行できるよう呼び出し側を try/catch でラップしています。
function checkPositive(number) {
  if (number <= 0) {
    throw new Error("数値は正である必要があります");
  }
  console.log("数値は正です");
}

try {
  checkPositive(5); // 数値は正です
} catch (error) {
  console.error(error);
}

try {
  checkPositive(-1); // Error: 数値は正である必要があります
} catch (error) {
  console.error(error);
}
