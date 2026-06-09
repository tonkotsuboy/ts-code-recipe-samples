fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // 取得したデータが出力される
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYUwLgxgFgFARFMYAOBnAXAekwK1QewDtkAbAQwhCnxIBMQAnAOjAE9kBLCfep7gW0zJ8qMKkwBGOAEoAUAAJ5LKCEIwYDEKmGFUIafIC8APnmbtRPUzxEY0uYuWr1tMmDIGT8gN4LF87l0aECYSfABzGFd3aQBueWx5QDXlQHT9QHUGQH0GQHGGQB+GQH6GQBkGQC-FQGylQFUGQBiGQGiGPwBfOKA
