const str = "apple: 100円, banana: 200円, orange: 150円";
const newStr = str.replace(/(\w+): (\d+)円/g, (match, fruit, price) => {
  const priceNum = parseInt(price, 10);
  return `${fruit}: ${Math.round(priceNum * 1.1)}円 (税込)`;
});
console.log(newStr);
// "apple: 110円 (税込), banana: 220円 (税込), orange: 165円 (税込)"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBNBOMC8MBEBDADpgNgUwC4YBGABlMDDFAGhgCN0wH0iAmc6mEeBgc0JICslVAG4AUKEiwweAO4BlKIhQIAdPDy50wPAAoA9LoA6sgNQBKIsYAmFivp41dAW3RRgACxoAzeAFcASygaTHgAnXNkAD4YAG8xGBhJaBhQ8LwAOT9nZFT0eAg8AEkwKF00nRoyc3FEjSg-eDAYAAMAEljfQKgAXyIOgFk3D3UQPzBrcrCdLJyAKhJVYnMeihhdQDgvQB748xbxHpqJcAgQfFUcEB5dGQUlQ-19NCxcfmIyNc2dmnpGRlY2D7bcw0Li8V4ANgEgJ2qCAA
