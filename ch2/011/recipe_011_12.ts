let value; // evolving any

value = "hello";
value.toUpperCase(); // OK: string型として扱われる

value = 42;
value.toFixed(2); // OK: number型として扱われる
value.toUpperCase(); // エラー: number型にtoUpperCaseは存在しない
