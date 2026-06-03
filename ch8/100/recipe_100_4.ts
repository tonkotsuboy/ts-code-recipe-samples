fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  if (!response.ok) {
    throw new Error(
      `リクエストが失敗しました。ステータスコード：${response.status}`,
    );
  }
});

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYUwLgxgFgFARFMYAOBnAXAekwK1QewDtkAbAQwhCnxIBMQAnAOjAE9kBLCfep7gW0zJ8qMKkwBGOAEoWUEIRgwGIVMMKoQ0gAQBeAHzaA3gCht2jsG0wAhCrVFNTfAGsdp8+bBQG+AO7ahCABAKIMvgwwZp7mAAaAVwyA9QyAFQyAnQyAEwyAMgyAjJqA6qaA6gyAfgz5gPoMgEAMqYBjDIA-DID9DKmAzQzVgJMMgFj-ACRG9upOomRgAK6oAL6xADTR5tIA3NHDJsMzQA
