// オブジェクトのプロパティを変更
const product = { id: 1, name: "ノートPC", price: 100 };
const updatedProduct = { ...product, price: 200 };
console.log(updatedProduct); // {id: 1, name: "ノートPC", price: 200}

// 配列に要素を追加
const fruits = ["りんご", "バナナ"];
const moreFruits = [...fruits, "オレンジ"];
console.log(moreFruits); // ["りんご", "バナナ", "オレンジ"]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEiqGQ1hkDoZHKGR6hkBMMg7BkOsMhbhkIsMgxhkMUMgkhkEhNQF7MAoAYwHsA7AZwBdQAHAJ0oBMBXcxgXlADeoAJbsAXKACMAGlDUAhgFsAphIBEgOYZAPwyIACgGE1s1sPKqpABgugAvgG4KNBqE5N28+sva62XHqH4hADoQ1g5uemMWU3MAJitbByo6SgAbZSDUygBzAApXd09vXwiASjtQEEFRCRk5JXNNHQMjZmizCXiLG1JSKsBZRMB0JUBrBkBAyMACX3xAX-jAAqVHOkYAMxZOYXpaANAAbTVAKIZAZIZAFQZWtUAFhkAphnO1AF0kp0ZFShZlADEVtY3+LZCg5dX12RqcCAG4ZAM8M0BudxS6UyOVyj2eb3+tHKlTAOwOx0BFyugJB4JuQA
