// 関数ではない値を呼び出して TypeError を発生させる例。
// 単体実行できるよう try/catch でラップしています。
const message = "こんにちは";
try {
  message(); // TypeError: message is not a function
} catch (error) {
  console.error(error);
}
