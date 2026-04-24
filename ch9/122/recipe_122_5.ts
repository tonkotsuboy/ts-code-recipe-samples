const mixedArray = [1, "hello", true];

// mixedArrayから要素の型を抽出
type ElementType = (typeof mixedArray)[number];
// string | number | boolean
