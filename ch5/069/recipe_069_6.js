// 破壊的メソッド: 元の配列が変更される
const nums1 = [10, 2, 30];
nums1.sort((a, b) => a - b);
console.log(nums1); // [2, 10, 30]（元の配列が変更されている）

// 非破壊メソッド: 元の配列は変更されない
const nums2 = [10, 2, 30];
const sorted = nums2.toSorted((a, b) => a - b);
console.log(sorted); // [2, 10, 30]
console.log(nums2); // [10, 2, 30]（元の配列は変更されない）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/PTAEhYPQpjUELdEOGRehkMMMhJhgFykMKKg7BkLKJh0JUBkGQSE1AXs0FUGQGIZBohgCgBjAewDsBnAF1CYFcBbFgRlABeUAG1+ABgA0oAEwyAzBIC6Abhrc+-AHQsGAJzYAKIwEMZAIwCUwgHyhToALShr6xqwYAbAKbavDADmRpoCVqqgIGLyoJKKKoAQ-9j4xOQUgGYMgCIMVICQ-zQ0UYB66VAIKOjJeID2DKSUgFYMmfTM7Jy8LLLCYnFy8WqNrBx6hj4AJh2hstpsDADKBmwjJuauNkL2ji5ufXq+-kFGg-PD4ZFgojFdSspb3n4BwePHUeLS3aCXSbhVNRT1OUA
