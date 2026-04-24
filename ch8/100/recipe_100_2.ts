// Recipe 100_2: POST リクエストで JSON ボディを送信する
async function createPost(title: string, body: string) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ title, body, userId: 1 }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const created = await response.json();
  console.log("サーバーが受け付けた内容:", created);
}

createPost("タイトル", "本文").catch((error) => {
  console.error("送信に失敗しました:", error);
});
