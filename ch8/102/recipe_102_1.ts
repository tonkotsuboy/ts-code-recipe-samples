// Recipe 102_1: Promise.all で複数の fetch を並行実行し、すべて成功した結果をまとめて扱う
const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const fetch2 = fetch("https://jsonplaceholder.typicode.com/users/1");

Promise.all([fetch1, fetch2])
  .then((responses) =>
    Promise.all(responses.map((response) => response.json())),
  )
  .then((data) => {
    console.log("POSTデータ:", data[0]);
    console.log("USERデータ:", data[1]);
  })
  .catch((error) => {
    console.log("エラー:", error);
  });
