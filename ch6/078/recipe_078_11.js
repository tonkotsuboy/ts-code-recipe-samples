function calculateTax(price) {
  return price * 0.1;
}

const tax1 = calculateTax(1000);
const tax2 = calculateTax(2000);

console.log(tax1); // 100
console.log(tax2); // 200
