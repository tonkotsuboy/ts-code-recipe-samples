const fruits = ["りんご", "バナナ", "みかん"];

// splice: 元の配列を変更する
const removed = fruits.splice(1, 1, "パイナップル");
console.log(fruits); // ["りんご", "パイナップル", "みかん"]
console.log(removed); // ["バナナ"]
