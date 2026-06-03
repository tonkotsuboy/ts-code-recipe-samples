function processValue(value: number | string) {
  if (typeof value === "string") {
    // このブロック内では、valueはstring型として扱われます
    console.log(value.toUpperCase());
  } else {
    // このブロック内では、valueはnumber型として扱われます
    console.log(value.toFixed(2));
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABABwE5wgUwM7YGoCGANiJgBQBuxpAXImCALYBGmqiAPotlKjGAHMAlIgDeAKESIYwRGSgBPZJjiyqJTIgC8OxACIefQXpESpUgPQXEgZQZAdgyA1hkC3DIGGGQPUMgUMVA5gyB7BkCADOqkPob8AoDR6oAWDIDqDIBmDICORoDxDIAxDIB+DICaDJLmEAjYcESYAHREcAKU1IVQcACqyMqoAMIE2ORCQgDcmQC+iJhEzWKZltb2zu7e-oGYPgwsbJGxiakZ5ojZYLn5RSVlGgWVAGIwAB6YACZkAEytHVKd4p1AA
