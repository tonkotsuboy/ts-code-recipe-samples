// Recipe 105_2: 型ガード関数で実行時にデータの型を検証する
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function isPost(data: unknown): data is Post {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  return (
    typeof obj.userId === "number" &&
    typeof obj.id === "number" &&
    typeof obj.title === "string" &&
    typeof obj.body === "string"
  );
}

const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();

  if (!isPost(data)) {
    throw new Error("Invalid data structure");
  }

  return data; // ここでdataはPost型として扱える
};

fetchPost(1)
  .then((post) => {
    console.log("取得したポスト:", post);
    console.log("タイトル:", post.title);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });
