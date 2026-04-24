function getValue<T>(value: T): T {
  return value;
}

const result = getValue({ name: "鈴木" });
// resultの型: { name: string }
