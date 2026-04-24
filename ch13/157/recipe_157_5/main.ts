// types.tsで定義された型をindex.ts経由で使用
import type { User, Post } from "./index";

// 下記は取り込んだ型を使っている様子を示すデモです（書籍には記載されていません）。
const user: User = { name: "Taro", age: 18 };
const post: Post = { title: "hello", content: "world" };
console.log(user, post);
