// types.tsで定義された型をindex.ts経由で使用
import type { User, Post } from "./index";

const user: User = { name: "Taro", age: 18 };
const post: Post = { title: "hello", content: "world" };
console.log(user, post);
