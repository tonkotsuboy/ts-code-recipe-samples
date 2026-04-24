// Recipe 100_5: response.status で具体的なステータスコード（404 など）を判定する
fetch("https://jsonplaceholder.typicode.com/posts/100").then((response) => {
  if (response.status === 404) {
    console.log("リソースが見つかりませんでした");
  }
});
