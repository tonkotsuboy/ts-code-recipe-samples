import { z } from "zod";

// Zodスキーマを定義
const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

// スキーマから型を生成
type Post = z.infer<typeof PostSchema>;

const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  // 実行時に型を検証
  return PostSchema.parse(data);
};

fetchPost(1)
  .then((post) => {
    console.log("取得したポスト:", post);
    console.log("タイトル:", post.title);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });
