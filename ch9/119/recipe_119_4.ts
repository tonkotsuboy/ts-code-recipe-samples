type MyReturnType<T>
  = T extends (...args: any[]) => infer R ? R : never;

type A = MyReturnType<() => string>; // string
type B = MyReturnType<(x: number) => boolean>; // boolean
type C = MyReturnType<number>; // never（関数ではないため）

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiBKFgFcBOA7AKuCAeTAfAFBRQC8UmUEAHsBOgCYDOUAFAHRcCGqA5swBcUbuhABtALoBKcgSgBLdADMIqKPCgB+DVGHoIANzUBuIkVCQoAQXKwESNFhy42ssvObBUSvgRNQAPSBUF4+6HwWOFAAQnZwiCgY2JCuNPrIALYARmru8tkA9oUANhCi-kEhRaXl6FFWAMLxDknOqehZuaiVwVAGxqiAEP+ARamADqaA5gyA9gyAVgyAIgyA+gyAgQyAkP9AA
