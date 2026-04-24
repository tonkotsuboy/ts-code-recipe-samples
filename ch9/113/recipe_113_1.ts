function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // ここでvalueはstring型として扱われる
    console.log(value.toUpperCase());
  }
}

processValue("hello"); // "HELLO"が出力される
processValue(123); // 何も出力されない
