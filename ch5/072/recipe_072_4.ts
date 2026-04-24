const user: {
  name: string;
  age: string | number;
} = {
  name: "田中",
  age: 24,
};

// ageは文字列もしくは数値のどちらかを代入できる
user.age = "二十四歳";
console.log(user);
