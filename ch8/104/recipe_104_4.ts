// Recipe 104_4: async/await を使わず Promise チェインで同等の処理を書いた比較
// 書籍との差分: 書籍では recipe_104_3 の Post 型を続けて使う前提ですが、
// 単体で型チェックできるよう Post 型を同ファイルに同梱しています。
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
