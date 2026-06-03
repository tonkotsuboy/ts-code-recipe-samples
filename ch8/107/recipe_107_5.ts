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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsIwLbFRACgEoYBvAKBhikxGWs2QCd0AbVgUyZgF4YIOAdxgBBAEbomyAMKMW7LsQDclGMzBlVVYILz04HZFAAWBAEQB6YAAdUFph2uTkZgDRkYIVAHMIwVgBcDBDMbJxMAHRevv4wAL5EKlRx1MBGxjAEXCxMJBRUVKhwmdmSMPh0wNAc6MUAokw5MABkzTClkX7YHLw8fGbizg05ZnlaBTQQIGwcEazo3uaAVwyA9QyAFQyAnQyAEwyAMgyAtQyAxwyAzwyA3QyA1wyAqgyAMQyAfgyA6gyA+gyjSQUpHKwgPfkFVJPTnBEOuY1oBLhkAPww7QBeboB8Vzu9weATc7UakkS4ziqgxGPIuHwyiAA
