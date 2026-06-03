const originalObject = {
  name: "鈴木",
  address: { city: "Tokyo", zip: "123-4567" },
};
const clonedObject = structuredClone(originalObject);
console.log(clonedObject);
// 出力: { name: "鈴木", address: { city: "Tokyo", zip: "123-4567" } }

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBCBOBLA5osBDANgeQEYCsBTYWAXhgG8AoGGDAW0IC4YAiQFiTAKc1YBoaZ0AE0HxCECCwoxgiKAE8WrACogA1nJC8YAL0QAHRQEYATAGYAtABYArADYA7KxgBfPs4DcVUJFjBM4QkE8IhIYcmh4AFcSSNFBAGF-MEIACgQUNCxg4igASk9vCBBMQgA6f2QUvwCgghz8qgB6RphAL8VAbKVJOnRGRS4tIRExCUppWQU2FXVNHh19IzMrO0cXFyA
