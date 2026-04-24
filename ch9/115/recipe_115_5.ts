type A = { type: "A"; a: number };
type B = { type: "B"; b: number };

function isA(x: A | B) {
  return x.type === "A";
}

function check(foo: A | B) {
  if (isA(foo)) {
    // OK！
    console.log(foo.a);
  }
}

check({ type: "A", a: 1 });
