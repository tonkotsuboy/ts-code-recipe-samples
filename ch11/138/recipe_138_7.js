// SyntaxError を発生させる書籍掲載例。書籍と一致させるためのデモであり、
// 本番コードで eval を使うことは推奨されません。
try {
  eval("const x ="); // SyntaxError: Unexpected end of input
} catch (error) {
  console.error(error);
}
