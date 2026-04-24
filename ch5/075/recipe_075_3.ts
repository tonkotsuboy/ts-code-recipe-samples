// オブジェクトのプロパティを変更
const product = { id: 1, name: "ノートPC", price: 100 };
const updatedProduct = { ...product, price: 200 };
console.log(updatedProduct); // {id: 1, name: "ノートPC", price: 200}

// 配列に要素を追加
const fruits = ["りんご", "バナナ"];
const moreFruits = [...fruits, "オレンジ"];
console.log(moreFruits); // ["りんご", "バナナ", "オレンジ"]
