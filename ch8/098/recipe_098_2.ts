// タイマーIDを保存（ブラウザーではnumber、Node.jsではTimeoutオブジェクト）
const timerId = setTimeout(() => {
  console.log("5秒経過しました");
}, 5000);

// 必要に応じてタイマーをキャンセル
clearTimeout(timerId);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEn6GQShkPYZB+GBJAIoJIZC78oDW1AQ-4NYZCXDIMoZA2hlkHMGQewYA7AVwFsAjAUwCdBABgDkB7AEwYDoArAM7kAKgEsaDDlQAugKoZsgDoZA5QyB6hkATDIEh-gFABjDhUEzQMic3hdQAXlCCGM8ZOkyAFC4CU1gHygA3ttBQfUMOABs+UI4AcxcAIgBWQCXPQBlfQDkEwHUGQD8GdMB9Blj3AG5tAF8AGlB4gAZqwu1tEFBAUf1AQMjAawZAHf1ADQZAMwYoOGRAWoZAY4ZAZ4ZAboZAa4Y9cIBDJkcpWRdTSSYLQqA
