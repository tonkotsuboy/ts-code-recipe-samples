const numbers = [1, 2, 3];
// 1番目の引数（要素）は使わず、2番目の引数（インデックス）のみ利用する例
const doubledIndex = numbers.map((_item, index) => index * 2);
console.log(doubledIndex); // [0, 2, 4]
