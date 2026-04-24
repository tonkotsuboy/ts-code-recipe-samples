type NamedRecord = Record<"foo" | "bar" | "baz", string>;

const keywordTable: NamedRecord = {
  foo: "Hello",
  bar: "World",
  baz: "TypeScript",
};

console.log(keywordTable);
