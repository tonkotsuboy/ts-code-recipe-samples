type A = {
  name: string;
  age: number;
};
type B = {
  age: string;
};
type C = A & B;

const c1: C = {
  name: "太郎",
  age: 30, //  エラー: number型はnever型に代入できません
};

const c2: C = {
  name: "太郎",
  age: "三十", // エラー: string型はnever型に代入できません
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAglC8UDeAoKUB2BDAthAXFAM7ABOAlhgOYDcaUWVBmArjgEYSl0C+dokKACEEyeo2YkK1Xv3DQAwqLgAyYXRQBjAPYYSUTQEZCSxKnTY8hAESAqTUBzCdYA04poQDMABidQA9L-RACoZAS4ZAH4ZCDDZOUkBo9UB7BgwIADcuGMBrBkBjuUBTRUBzBkBZBkA-BkBtBkBkhhQ+FC1dfU0AJhNRc0xcZjtHF3QJG0BIOUBBZWc-AJDw4jJKKnjElNjM3MLS8pogA
