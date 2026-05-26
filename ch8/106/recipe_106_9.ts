const userResponse = await fetch(
  "https://jsonplaceholder.typicode.com/users/1",
);
const user = await userResponse.json();
console.log("ユーザー情報:", user);

const postsResponse = await fetch(
  `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
);
const posts = await postsResponse.json();
console.log("ユーザーの投稿:", posts);

export {};
