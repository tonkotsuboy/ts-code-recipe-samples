const products = [
  { name: "りんご", category: "果物" },
  { name: "にんじん", category: "野菜" },
  { name: "バナナ", category: "果物" },
];
// reduceでグループ化（冗長）
const grouped = products.reduce((acc, p) => {
  (acc[p.category] ??= []).push(p);
  return acc;
}, {});
console.log(grouped);
// Object.groupByを使う（簡潔）
const grouped2 = Object.groupBy(products, (p) => p.category);
console.log(grouped2);
