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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYUwLgxgFgFARFMYAOBnAXAekwK1QewDtkAbAQwhCnxIBMQAnAOjAE9kBLCfep7gW0zJ8qMKkwBGOAEoAUAAJ5LKCEIwYDEKmGFUIafIC8APnkBvBYvkdg8mAEJN2onqb4A1gYtWrYKA3wAd3lCEGCAUQYAhhgAAwAJABVEgAV5Rmj0eQASMycdV1EyMABXVABfWOkAbktFcrr5TVKGQiatApAmPCIYGstyuUVlVXVaYrIDE3NG7l0aLpJ8AHMYcbBJ6vlseUA15UB0-UB1BkB9BkBxhkAfhkB+hkAZBkAvxUBspUBVBkAYhkBohgGhpQhi6HUM-AYU1M3iscwIJEWK3ggAqGQCXDOdroAvN0A+K6HQB+DCd0HAADTpKIA-r1GpAA
