const message = "外側のメッセージ";

if (true) {
  const message = "内側のメッセージ"; // 外側のmessageを隠蔽
  console.log(message); // "内側のメッセージ"
}

console.log(message); // "外側のメッセージ"
