// URIError を発生させる例。単体実行できるよう try/catch でラップしています。
try {
  decodeURIComponent("%E0%"); // URIError: URI malformed
} catch (error) {
  console.error(error);
}
