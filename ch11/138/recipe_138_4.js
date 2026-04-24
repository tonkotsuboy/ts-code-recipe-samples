// 未定義の変数にアクセスして ReferenceError を発生させる例。
// 単体実行できるよう try/catch でラップしています。
try {
  console.log(unknownVariable);
  // ReferenceError: unknownVariable is not defined
} catch (error) {
  console.error(error);
}
