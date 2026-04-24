function getValue<T>(value: T): T {
  return value;
}

const result = getValue({ name: "鈴木" } as const);
// resultの型: { readonly name: "鈴木" }
