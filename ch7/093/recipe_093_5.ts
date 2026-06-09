function greet(): void {
  console.log("Hello!");
  // この関数は暗黙的に undefined を返す
}

const result = greet();
console.log(result); // undefined が出力される

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwE4FN1QBQEoBciAbnDACaIDeAUIohAgM5wA26AdC3MtgEQAS6FlwCEvXAG5aiAPQzEgZQZAdgyAi1MAOpoHsGQOlmgTbzAIW6BrBkTgy6YDDDoKgJIZAK-GBNBmoBfatQZhGURBkYgWXgF4UDCw8KXdmNk5ubB8-KElZeRMzCytEQBkGQC-FQGylQFUGQBiGQGiGIA
