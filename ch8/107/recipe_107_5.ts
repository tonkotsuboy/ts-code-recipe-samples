// Recipe 107_5: AbortError を error.name で判定して他のエラーと区別する
// 書籍との差分: 書籍のコードは async 関数内の try/await 形のみを抜粋しているため、
// 単体で型チェックできるよう async 関数でラップしています。また、
// トップレベルの controller を宣言しています。
async function main() {
  const controller = new AbortController();
  try {
    await fetch("/api/report", { signal: controller.signal });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("リクエストがキャンセルされました");
    } else {
      console.error("エラーが発生しました:", error);
    }
  }
}

main();
