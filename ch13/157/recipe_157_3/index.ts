import { type User, type Post } from "./types";

// 下記は型を使っている様子を示すデモです（書籍には記載されていません）。
const user: User = { name: "Taro", age: 18 };
const post: Post = { title: "hello", content: "world" };
console.log(user, post);
