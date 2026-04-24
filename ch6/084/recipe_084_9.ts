function calculateTaxIncluded(amount: number | string = 0) {
  const value =
    typeof amount === "string" ? parseFloat(amount) : amount;
  return value * 1.1; // 税込み金額を計算
}

// 各ケースで使用可能
console.log(calculateTaxIncluded(1000)); // 1100.0000000000002
console.log(calculateTaxIncluded("2000")); // 2200
console.log(calculateTaxIncluded()); // 0（初期値が使われる）
