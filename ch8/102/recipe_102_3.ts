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
