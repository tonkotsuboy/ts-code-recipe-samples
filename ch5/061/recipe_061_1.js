//
//   ([要素], [インデックス], [元配列]) => {
//     // 処理
//   };
//
const numbers = [1, 2, 3];
numbers.map((要素, インデックス, 元配列) => {
  console.log({ 要素, インデックス, 元配列 });
});
// { 要素: 1, インデックス: 0, 元配列: [ 1, 2, 3 ] }
// { 要素: 2, インデックス: 1, 元配列: [ 1, 2, 3 ] }
// { 要素: 3, インデックス: 2, 元配列: [ 1, 2, 3 ] }

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/PTBQIAigKBtRAyMAS+BdANBWgShkM8MhxhkMMMg9QyCdDGhoMKKgsomDoSsgJQQC8AfBAN7jBTeSBnioGAunbgF8A3J1ABjAPYA7AM4AXCLICuAWwBGAUwBO8phgCM6AEzoAzMnFqte+QDp1AQwAO0aEnQ4CJdFWoGFnZQKBkFaQAbbQdI6QBzaDYILwgfImJ-GghhOnFc8UhkpAAuCBM0vAyygAYs6jLYcrNLCGQcoWLEMvNK32IyioDG5oheizaOopTuiAtvKpIe+pGK8cnhIA
