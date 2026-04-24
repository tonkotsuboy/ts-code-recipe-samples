function greet(): void {
  console.log("Hello!");
  // この関数は暗黙的に undefined を返す
}
const result = greet();
console.log(result); // undefined が出力される
