function getValue<const T>(value: T): T {
  return value;
}

const result = getValue({ name: "鈴木" });
// resultの型: { readonly name: "鈴木" }

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwKZQGoEMA2JUA8ECAzlIgCoB8AFAG674BclAlCxYgN4BQiiAJ3QgBSBnlQBuHgF8ePYmDKDUJEDnIBeFOmwSaXRGCwBbVCwBEgFiTAFOYXEM1tID0zlWo2A7BkDR6i0NCsABMEHABPI1NzRGs7ByA
