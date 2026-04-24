// Recipe 100_1: fetch で GET リクエストし、response.ok チェック後に json() で受け取る
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // 取得したデータが出力される
  })
  .catch((error) => {
    console.log("エラーが発生しました:", error);
  });
