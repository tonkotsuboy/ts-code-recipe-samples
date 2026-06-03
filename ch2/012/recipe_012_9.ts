const message = "外側のメッセージ";

if (true) {
  const message = "内側のメッセージ"; // 外側のmessageを隠蔽
  console.log(message); // "内側のメッセージ"
}

console.log(message); // "外側のメッセージ"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBAtgUwhAhgcwTAvDARINE1AXBUDsGQQ4ZBhhkG6GQH4ZAOhlwG4AoJgSwDMYAKKAJwFcEAShgBvJjBihIsRMnSYcuQKGKJCjXoMYAem0wixOagyAkhkAFaYF5QiVPAQQAGwQA6eyDRcjCoVt15VZKjpcJgBfFmk7Rxc3DyRjYR89AjVA+iA
