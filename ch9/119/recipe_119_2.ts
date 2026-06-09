type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<number[]>; // number

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAogNhAthAdsAKuCAedA+KAXinSggA9hUATAZygAoBLFAMwgCcoBVASgG0AulAD8PKAC4SAbgBQs0JCgBBIrATI0mSNhQBXRACNOQvNKgB6C1H1HOQA
