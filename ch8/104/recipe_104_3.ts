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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBACg9gZ2FAvFA3gKClArgiAJwEkATALigDtcBbAIyIG5soBLC6uxwlnYNsAA2ESkkJsqAcz5R6cUiDHAJ0lgF8WmAIYIQVAMZQAZrkMC4VExGAGAFvCQAKDpRoMiASkoxCcWmwEADyOwAB8GKwGlkhQhBAIYDHQaNoA7tqC1rZ2Tqw4AAZ2wMBgCOQA9BUAVgiWYELaBhB2cEKkRAB0oGBs0R2d0bQVSUgIFQAk6BzqBQA0rJ6ybMZQTgCE8YnJnXAA1p6ROPx2fmnUEOcAooR+hE4FABIAKs8wUER3lFNbSVQEnSQ2mA+FmS1Y6iiMWQo2QaCc6UyyF+O1qlicnkOulgiGAsniIMIVlhGkwOj0hhMZgMFispECDW0IFCGKOUBUIDZOGi-xhuNQUERWWMNnsLIAjODjlAeXURJ0hHApE4AESANeVAOn6gHUGQD6DIBdhkAnQyACYZyCq5lBYVKoOoZcD7GtPnBCIcsNLZW0IJ1HfcVYAKhkAlwyAH4ZADIMgC83QD4rlrAH4MutN5u9VshkMw9MSjWZuIxTCAA
