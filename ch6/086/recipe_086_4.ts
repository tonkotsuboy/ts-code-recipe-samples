function calculateTotal(price: number, tax: number): string {
  return `税込み${Math.round(price * tax)}円です`;
}

const total = calculateTotal(100, 1.1);
console.log(total); // 出力: 税込み110円です

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBAhgGwiNKoFMAqcU6AFAA4BOMEuAXImCALYBGuFANIsQB72Ot2ASnoBnKFTABzRAG8AUIkQVcUEBSQADQHBegHvjA-gwASWQFkcACwB0FOOAAm5KjUQAqbih5CAvoDDFQOYMgJoMmgDc8l7y8hAI4txE6IgAvMjomNh4hMRoJACMAAy5XNmW2UKhUWCicGi4lmhwUiRQcWiliAD0bYiAX4qA2Ur0evrZef4BQA
