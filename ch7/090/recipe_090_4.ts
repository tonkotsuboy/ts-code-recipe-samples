function convertNumber(value: unknown): void {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log("数値型ではありません");
  }
}
