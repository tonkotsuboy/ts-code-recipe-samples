const str = "apple: 100円, banana: 200円, orange: 150円";
const newStr = str.replace(/(\w+): (\d+)円/g, (match, fruit, price) => {
  const priceNum = parseInt(price, 10);
  return `${fruit}: ${Math.round(priceNum * 1.1)}円 (税込)`;
});
console.log(newStr);
// "apple: 110円 (税込), banana: 220円 (税込), orange: 165円 (税込)"
