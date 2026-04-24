// Recipe 105_1: 型注釈だけでは response.json() の戻り値を実行時に保証できない例
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
  const data = await response.json();
  return data; // dataは実際にはany型、型の保証はない
};

// 関数参照未使用を避けるための呼び出し
fetchPost(1);
