// Recipe 104_3: fetch と async/await を組み合わせて API から型付きデータを取得する
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const post = (await response.json()) as Post;
  return post;
}

async function displayPost() {
  try {
    const post = await fetchPost(1);
    console.log("取得したポスト:", post);
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

displayPost();
