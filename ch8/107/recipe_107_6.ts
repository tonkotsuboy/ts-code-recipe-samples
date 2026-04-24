// Recipe 107_6: AbortSignal.timeout() で簡潔にタイムアウトを実装する
async function fetchWithTimeout() {
  try {
    // 5秒でタイムアウトするシグナルを作成
    const response = await fetch("https://api.example.com/data", {
      signal: AbortSignal.timeout(5000),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      console.error("タイムアウト: 5秒以内に応答がありませんでした");
    } else if (error instanceof Error && error.name === "AbortError") {
      console.error("リクエストがキャンセルされました");
    } else {
      console.error("エラーが発生しました:", error);
    }
  }
}

fetchWithTimeout();
