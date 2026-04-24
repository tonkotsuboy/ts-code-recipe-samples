const original = { name: "MDN" };
original.itself = original; // 循環参照

const clone = structuredClone(original);
console.log(clone.itself === clone); // 出力: true（循環参照も保持される）
