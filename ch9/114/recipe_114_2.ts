function assertTruthy(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function getFirst<T>(values: readonly T[]) {
  assertTruthy(values.length > 0, "配列が空です");
  // ここではvalues.length > 0が真であることが保証される
  return values[0];
}

console.log(getFirst([1, 2, 3])); // 1
