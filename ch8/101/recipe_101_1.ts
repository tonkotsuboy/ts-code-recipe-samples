fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data: { userId: number }) => {
    console.log("最初のデータ:", data);
    // 最初のデータを使って次のリクエストを行う
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${data.userId}`,
    );
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((userData) => {
    console.log("ユーザーデータ:", userData);
  })
  .catch((error) => {
    console.log("エラー:", error);
  });
