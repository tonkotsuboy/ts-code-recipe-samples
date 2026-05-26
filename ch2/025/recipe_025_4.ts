function setDefaultWithNullish(value?: number | null) {
  value ??= 999;
  console.log(`結果: ${value}`);
  return value;
}

setDefaultWithNullish(); // 結果: 999（undefinedなので代入される）
setDefaultWithNullish(null); // 結果: 999（nullなので代入される）
setDefaultWithNullish(0); // 結果: 0（nullでもundefinedでもないので保持される）
