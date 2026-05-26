function setDefaultValue(input?: number) {
  input ||= 999;
  console.log(`結果: ${input}`);
  return input;
}

setDefaultValue(); // 結果: 999（undefinedはfalsy）
setDefaultValue(0); // 結果: 999（0はfalsy）
setDefaultValue(42); // 結果: 42（truthyなので変更されない）
