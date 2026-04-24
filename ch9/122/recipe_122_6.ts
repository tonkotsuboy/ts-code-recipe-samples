// オブジェクトの場合
const user = {
  age: 18 as const,
  name: "田中",
};
type AgeType = (typeof user)["age"]; // 18

// 配列の場合
const numberArray = [1, 2, 3, 4, 5] as const;
type ElementType = (typeof numberArray)[number];
// 1 | 2 | 3 | 4 | 5
