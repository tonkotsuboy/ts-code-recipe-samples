type ElementType<T> = T extends (infer U)[] ? U : T;

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAogNhAthAdsAKuCAedA+KAXinSggA9hUATAZygAoBLFAMwgCcoBVASgG0AulAD8PKAC4SAbiA
