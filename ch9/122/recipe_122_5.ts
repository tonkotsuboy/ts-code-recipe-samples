const mixedArray = [1, "hello", true];

// mixedArrayから要素の型を抽出
type ElementType = (typeof mixedArray)[number];
// string | number | boolean

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAtgSwB4FMAmBBATlghgTxgF4YBtARgBoYAiACxQBtGQbqosBXFAXQG4AUAID0w+MnTY8+QNIMgSIZAgZGACX0B2DIGj1QEkMgXqNAX4oCo+AA4oYAUUYo4KMFAAqRkyQAUB4yABm41JhwEAlKRgnHAARihY-CJi0FgIYADmMAA+MEGh4ckwISAgFrhgQA
