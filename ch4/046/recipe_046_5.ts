function add(a: number, b: number): number | bigint {
  if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
    const sum = a + b;
    if (Number.isSafeInteger(sum)) {
      return sum;
    }
  }
  return BigInt(a) + BigInt(b);
}
console.log(add(Number.MAX_SAFE_INTEGER, 1));
// 9007199254740992n（安全値の範囲外なのでBigIntを返す）
console.log(add(Number.MAX_SAFE_INTEGER, 2));
// 9007199254740993n（BigIntにフォールバック）
