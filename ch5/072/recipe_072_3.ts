const user: {
  name: string;
  age: number;
} = {
  age: 24, // nameプロパティがないためコンパイルエラー
};
console.log(user);
