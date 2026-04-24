function isNumber(value: number | string) {
  return typeof value === "number";
}

function main(value: number | string) {
  if (isNumber(value)) {
    // valueはnumber型に絞り込まれる
    value.toFixed(2);
  }
}

main(3.14);
