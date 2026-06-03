const originalObject = {
  name: "鈴木",
  address: { city: "Tokyo", zip: "123-4567" },
};
const clonedObject = structuredClone(originalObject);
clonedObject.address.city = "Osaka";

console.log(clonedObject.address.city); // 出力: Osaka
console.log(originalObject.address.city); // 出力: Tokyo

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBCBOBLA5osBDANgeQEYCsBTYWAXhgG8AoGGDAW0IC4YAiQFiTAKc1YBoaZ0AE0HxCECCwoxgiKAE8WrACogA1nJC8YAL0QAHRQEYATAGYAtABYArADYA7KxgBfPs4DcVUJFjBM4QkE8IhIYcmh4AFcSSNFBAGF-MEIACgQUNCxg4igASk8-AKCCHIA6IRExCFKZeTC2bAh0VXRWTy9wCBBMQlL-ZBTC5OKQqHLhUXEa2Tl8mAB6eZhAL8VAbKUWRub0Dshu3v60pFQMHBKSccqp2tn3BaW1lhV1ECA
