type IsNumber<T> = T extends number ? true : false;

type A = IsNumber<number>; // true
type B = IsNumber<string>; // false

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAkgzgOQK4FsBGEBOAeAKgPigF4pcoIAPYCAOwBM4obUNMoB+KYTJaALigAzAIYAbOBADcAKGmhIUAILFYiFlmzN0WfJKgB6fVx4Q54aACEV8ZNpxxuASxoBzXQaMjxEIA
