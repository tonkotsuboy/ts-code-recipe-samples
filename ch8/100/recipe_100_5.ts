fetch("https://jsonplaceholder.typicode.com/posts/100").then((response) => {
  if (response.status === 404) {
    console.log("リソースが見つかりませんでした");
  }
});
