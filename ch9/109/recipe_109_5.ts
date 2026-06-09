const isObject = (value: unknown) =>
  value !== null && typeof value === "object";

console.log(isObject(null)); // false
console.log(isObject({ name: "田中" })); // true
console.log(isObject([1, 2, 3])); // true（配列もobjectになる）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAlhA8gIwFYFNiwLwwBQBuAhgDYCu6AXDGWANZggDuYAlDNgHwBQMMx5dDACE2XGDIkSMAGQyYUAJ4AHdCABm-UhQ5iYAIhBpMUfQG5u3UJBAl0AOhIgA5ngQoMWPBKmtWZmAB6QJh1Ugh0K3AIWwcnV3djLwBvGDAiAFsqA0AGV0BaOX0YAF8-AOCFACcKKJs7Rxc3JCSoPABtAEYAGhgAJm6AZgBdUqCQqCr0QAh-wFlEwHQlQCCGI08oQGsGQCsGQGiGQEh-oA
