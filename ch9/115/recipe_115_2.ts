function isString(value: unknown) {
  return typeof value === "string";
}
// ホバーすると: function isString(value: unknown): value is string

function isNumber(value: number | string) {
  return typeof value === "number";
}
// ホバーすると:
// function isNumber(value: number | string): value is number
