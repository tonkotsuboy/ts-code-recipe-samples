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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAZgUysAFgRhgXnk1AKAIhSigAcIAuAeioCsJxSAbAQ2ARRCYBMEAnAHRQAnqQCWoXgNABbKqRDQIVNAQCUAbgBQoSLETIUAJiw5DhYmUo16jVu049+Q0RJBTZ8xVGVH12rQAFPhAZMQgEAT42BDwAbQNUNAAaM1QjAF01LRgYIRQEMDw8PgQIBUgENSwAPhhS8vAIgVsitWzc-MLi7hYoFmrMOoBvHNyYXQYmSKYQAHNCQAlFQGsGQBjtQDC5QHUGQH0GQCuGQHqGQAqGQE6GQAmGQDsGQHGGQB+GQH6GCgJU3v7NMYBfDrzgPvw8fhC+IMRmNcpMuDN5oRDoBLhmuD1S-xAgO0uQ+GiAA
