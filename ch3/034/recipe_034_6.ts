type User = {
  name: string;
};

// エラー: 同じ名前の型を複数回宣言するとエラーになる
type User = {
  age: number;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBuTAX0cwHo2pAKhkEuGQH4YygGBVAGgyBYFUCySoDsGQNHqgJIZA4JGAHU0B7aoGLtQABRgTQZA0QyALBl59A1gyArBm2ZQkWAmRosOfLVJ4AroQBGSRiyA
