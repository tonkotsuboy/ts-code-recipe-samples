// Recipe 106_9: トップレベル await で API から複数リソースを直列取得する実例
// 実行には tsconfig.json / package.json をモジュール扱いに設定する必要があります（recipe_106_7, 106_8 参照）。
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
