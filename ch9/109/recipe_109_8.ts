function processValue(value: string | number) {
  if (typeof value === "string") {
    // この中ではvalueがstring型に絞り込まれている
    console.log(value.toUpperCase());
  } else {
    // この中ではvalueがnumber型に絞り込まれている
    console.log(value.toFixed(2));
  }
}

processValue("hello"); // HELLO
processValue(3.14159); // 3.14
