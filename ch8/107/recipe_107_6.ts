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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/IYZwngdgxgBAZgV2gFwJYHsLwKbKgCwHVVl8AVVAW23QWQAoBKGAbwCgYZkAnMVjzjAD0QmAFZAS56BzBkD9DIBKGQAcMgIoZAZQyAJhkCaDIGiGQO0MgBoZAUwyBrhkBJDIB15QAhGAzlEwhkMbthAAHO9hgBeGMADuwEhw8fHoAInxkZBcQAC4RYBdUADpsAA9gShcAG2wk20ohABNgZGBQgBp+QUEQVABzCGAsmJgAQQAjdG5kAGV6xqyktGpaBjEABknGcusYAF9GAG5Z2wh7GGLSrx9-QKdXdySAKxBMJmXq1dOcpKz0OvpN4CWBOZgoEoIYemxubi7mOxqqg4N9fv9uDBUGtStAaKCAKJ-LowABkqJg4K6SUa1C8nm8oQoIzoSIhoUBsxsdnQNyx3DC8mU6hakkAp3KAUMVANYMgB39QAq3oAZBkAQgyAKIZAH4MgG0GQDJDFJAOoMgH0GCkXQRvbBZEAeEFg5GQ6H2YBw9CInVojH0nEZDwEwkdLrIMldClVarvGl0nVhQBXDIB6hkAFQyAToY1ALALUMgGOGQDPDIBuhiMgFUGQAxDGKFUrZqr1R4gS6rrTcvSwr7AJcMgB+GAWALzdAPiussT8piFUxOpe1TmrzYTbYcFwBGIpGJNDo5yAA
