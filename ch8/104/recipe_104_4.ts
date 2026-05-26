type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function fetchPostWithoutAsync(id: number): Promise<Post> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    },
  );
}

function displayPostWithoutAsync() {
  fetchPostWithoutAsync(1)
    .then((post) => {
      console.log("取得したポスト:", post);
    })
    .catch((error) => {
      console.error("エラーが発生しました:", error);
    });
}

displayPostWithoutAsync();
