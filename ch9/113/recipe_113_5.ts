function isNumber(value: number | string): value is number {
  // valueを文字列だと判定しているが、エラーにならない
  return typeof value === "string";
}
