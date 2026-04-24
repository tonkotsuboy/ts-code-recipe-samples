import { API_URL, type User } from "./users";

// 下記は取り込んだ値と型を使っている様子を示すデモです（書籍には記載されていません）。
const user: User = { name: "Taro", age: 18 };
console.log(API_URL, user);
