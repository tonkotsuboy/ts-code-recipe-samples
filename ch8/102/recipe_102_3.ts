// Recipe 102_3: Promise.race で最初に完了した Promise の結果を処理する
const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const fetch2 = fetch("https://jsonplaceholder.typicode.com/posts/2");

Promise.race([fetch1, fetch2])
  .then((response) => response.json())
  .then((data) => {
    console.log("先に完了したリクエストのデータ:", data);
  })
  .catch((error) => {
    console.log("エラー:", error);
  });
