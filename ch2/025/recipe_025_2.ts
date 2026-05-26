function processValue(value?: number) {
  value &&= 999;
  console.log(`結果: ${value}`);
  return value;
}

processValue(1); // 結果: 999（1はtruthy）
processValue(0); // 結果: 0（0はfalsy、代入されない）
processValue(); // 結果: undefined（undefinedはfalsy、代入されない）
