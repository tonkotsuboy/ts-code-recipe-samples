fetch("https://jsonplaceholder.typicode.com/posts/100").then((response) => {
  if (response.status === 404) {
    console.log("リソースが見つかりませんでした");
  }
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYUwLgxgFgFARFMYAOBnAXAekwK1QewDtkAbAQwhCnxIBMQAnAOjAE9kBLCfep7gW0zJ8qMKkwBGAAxS4AShZQQhGDAYhUwwqhByABAF4AfHoDeAKD16OwPWo1adTUWTABXVIYMG9AFim++hZWVtzaNCBMJPgA5vCAVwyAvQyAPwyAnQyAMgyA0ZGAJgyA0gyAUQyAfgyA2gyAyQyA5gyA6gyA+gzyANyWegC+5k1ydUA
