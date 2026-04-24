// 破壊的メソッド: 元の配列が変更される
const nums1 = [10, 2, 30];
nums1.sort((a, b) => a - b);
console.log(nums1); // [2, 10, 30]（元の配列が変更されている）

// 非破壊メソッド: 元の配列は変更されない
const nums2 = [10, 2, 30];
const sorted = nums2.toSorted((a, b) => a - b);
console.log(sorted); // [2, 10, 30]
console.log(nums2); // [10, 2, 30]（元の配列は変更されない）
