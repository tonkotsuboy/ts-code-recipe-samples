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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEiqGQ1hkDoZHKGR6hkBMMg7BkCwagIFQFAGMD2A7AZwBdQBXQgUwCdQBeUAb01FAEMBzSgLlAEYAHO0Kg8RYgBoWofGwC2PUACJADK6BaOSVSAvgG5MxAJ4AHSqACCXACrHTDABSGTuAGbkq1AJQBtJZ0pKAXR1QEH4BTExQwFlEwHQlNCwxEhkyOQAjGjNqajYDelAvPglQACYigGYigBYigFYA4VECEj1HUwBRABtKBXxiaxM8hxsXZLSMrJzvfBT06iDIsD5QAB8SldAy9cr1mqA
