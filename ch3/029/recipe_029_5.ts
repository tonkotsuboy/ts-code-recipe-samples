function processValue(value: number | string) {
  if (typeof value === "string") {
    // このブロック内では、valueはstring型として扱われます
    console.log(value.toUpperCase());
  } else {
    // このブロック内では、valueはnumber型として扱われます
    console.log(value.toFixed(2));
  }
}
