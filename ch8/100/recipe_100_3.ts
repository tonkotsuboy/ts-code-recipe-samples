// Recipe 100_3: response.json() でレスポンスボディを JSON としてパースする
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // 取得したデータが出力される
  });
