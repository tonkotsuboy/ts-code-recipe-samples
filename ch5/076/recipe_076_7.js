const original = { name: "MDN" };
original.itself = original; // 循環参照

// エラー
try {
  const clone = JSON.parse(JSON.stringify(original));
  console.log(clone);
} catch (error) {
  console.log(error instanceof Error ? `${error.name}: ${error.message}` : error);
  // TypeError: Converting circular structure to JSON ...
}
