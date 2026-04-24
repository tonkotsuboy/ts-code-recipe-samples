// Recipe 103_5: fetchPost の戻り値を Promise<Post> で明示し、呼び出し側で型補完を効かせる
// 書籍との差分: Post 型の定義（recipe_103_4.ts 相当）を同一ファイルに同梱しています。
// 書籍では recipe_103_4 で Post を定義してから 103_5 で import なしに利用する構成ですが、
// 単体ファイルで実行・型チェックできるようまとめています。
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const post = (await response.json()) as Post;
  return post;
};

fetchPost(1)
  .then((post) => {
    console.log("取得したポスト:", post);
    console.log("タイトル:", post.title); // 型に基づいて補完が効く
  })
  .catch((error) => {
    console.error("取得に失敗しました:", error);
  });
