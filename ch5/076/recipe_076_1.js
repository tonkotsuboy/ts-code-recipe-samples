const originalObject = {
  name: "鈴木",
  address: { city: "Tokyo", zip: "123-4567" },
};

// シャローコピー
const shallowCopy = { ...originalObject };
shallowCopy.address.city = "Osaka";

console.log(shallowCopy.address.city); // 出力: Osaka
console.log(originalObject.address.city);
// 出力: Osaka（元のデータも変更される）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBCBOBLA5osBDANgeQEYCsBTYWAXhgG8AoGGDAW0IC4YAiQFiTAKc1YBoaZ0AE0HxCECCwoxgiKAE8WrACogA1nJC8YAL0QAHRQEYATAGYAtABYArADYA7KxgBfPs4DcVKgHpvMQO0MgMcMgLcMgD8MgM0MgCsMoVSgkLAQABZYmCAA7gDCIHpyMORSAHRFCChoWHhEJC6eSSnpWTkFQiJiEAUy8nls2BDoquisnrHgECCYhAWpyAAUtZipmdlyTcKi4u2ycgCU7jC+MIBfioDZSiw9fejDkGMTU9MlqBg4BMRQKy3rHdue+8envf2ACH-AMKKgDsGQDjDKFAP0MgCCGQCQmoAXs0AqgyAGIZANEMgEh-oA
