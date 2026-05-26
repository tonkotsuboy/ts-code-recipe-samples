fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  console.log(
    "レスポンスのヘッダー情報:",
    response.headers.get("Content-Type"),
  );
});
