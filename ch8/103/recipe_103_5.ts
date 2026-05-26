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
