// Recipe 102_4: Promise.any で最初に成功した結果だけを受け取る
const mirrors = [
  fetch("https://mirror1.example.com/status"),
  fetch("https://mirror2.example.com/status"),
  fetch("https://mirror3.example.com/status"),
];

Promise.any(mirrors)
  .then((response) => response.json())
  .then((data) => {
    console.log("最初に成功したミラーのレスポンス:", data);
  })
  .catch((error: AggregateError) => {
    console.error("すべてのリクエストが失敗しました", error.errors);
  });
