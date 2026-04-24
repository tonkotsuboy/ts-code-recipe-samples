// 注: 末尾の value.toUpperCase() は evolving any の挙動説明のための
//     意図的な型エラー（TS2339: Property 'toUpperCase' does not exist on type 'number'）。
let value; // evolving any
value = "hello";
value.toUpperCase(); // OK: string型として扱われる
value = 42;
value.toFixed(2); // OK: number型として扱われる
value.toUpperCase(); // エラー: number型にtoUpperCaseは存在しない
