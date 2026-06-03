const products = [
  { name: "りんご", category: "果物" },
  { name: "にんじん", category: "野菜" },
  { name: "バナナ", category: "果物" },
];
// reduceでグループ化（冗長）
const grouped = products.reduce((acc, p) => {
  (acc[p.category] ??= []).push(p);
  return acc;
}, {});
console.log(grouped);
// Object.groupByを使う（簡潔）
const grouped2 = Object.groupBy(products, (p) => p.category);
console.log(grouped2);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBADgJxAEwK7ChGBeGBtAKBhgG8YwBDAWwFMAuGAIkCiGQZIZAVBkYBoZgKoaAcxAIAng0aAc80CWToxgBfLkVLlq9JoGsGVoA0GVt178hI8U0BziYB3guYuVlKtCYAWGQFMMT-XwHCxEmVaUBdAG4CAHpgmAQaNGAaQHMGQAaGQGuGQB+GQHWGQDRlQAh-wHTFQHdUwEh-glBIWEEkVDhInHgkKMwAOgiomgAKZopgYB44AEocAD5SZTaOvDg69yMxPxgAfhncPD9uurhUCAALZp6g4gioVAQwGHbgIMVSeW6googQABsaOruQQWbSkHLIq5CwgHkAIwAVjQMHV3uUAEKiQBJDIB-eUAYgwZQCEPoAVewKNxKZQqyAATFUAcDQeC4FCtjV0JgeFtetgBmMJp5RN8bvdHs9XsTIjirkA
