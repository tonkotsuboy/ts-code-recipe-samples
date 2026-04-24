const fruits = ["りんご", "バナナ", "みかん"];

// toSpliced: 元の配列を変更しない
const newFruits = fruits.toSpliced(1, 1, "パイナップル");
console.log(newFruits); // ["りんご", "パイナップル", "みかん"]
console.log(fruits);    // ["りんご", "バナナ", "みかん"]
