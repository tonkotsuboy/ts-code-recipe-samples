const numberArray = [1, 2, 3, 4, 5];

// numberArrayから要素の型を抽出
type ElementType = (typeof numberArray)[number];
