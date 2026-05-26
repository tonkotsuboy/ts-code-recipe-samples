fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  if (!response.ok) {
    throw new Error(
      `リクエストが失敗しました。ステータスコード：${response.status}`,
    );
  }
});
