type IsNumber<T> = T extends number ? true : false;

type C = IsNumber<123>; // true

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAkgzgOQK4FsBGEBOAeAKgPigF4pcoIAPYCAOwBM4obUNMoB+KYTJaALigAzAIYAbOBADcAKGmhIUAMLFYiFlmwBGAEwBmfJKgB6I1x4QgA
