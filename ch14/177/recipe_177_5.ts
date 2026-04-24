// After: 定数オブジェクトとas constで enum の代わりに使う
const MyEnum = {
  A: 0,
  B: 1,
  C: 2,
} as const;
type MyEnum = (typeof MyEnum)[keyof typeof MyEnum];
