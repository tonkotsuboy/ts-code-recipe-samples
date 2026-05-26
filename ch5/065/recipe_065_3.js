const products = [
  { id: 101, name: "パソコン", price: 1000 },
  { id: 102, name: "マウス", price: 50 },
  { id: 103, name: "キーボード", price: 80 },
];

const product = products.find((product) => product.id === 102);
console.log(product);
// { id: 102, name: "マウス", price: 50 }
