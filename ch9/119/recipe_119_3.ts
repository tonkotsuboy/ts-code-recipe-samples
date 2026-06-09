type ElementType<T> = T extends (infer U)[] ? U : T;

type C = ElementType<boolean>; // boolean

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAogNhAthAdsAKuCAedA+KAXinSggA9hUATAZygAoBLFAMwgCcoBVASgG0AulAD8PKAC4SAbgBQs0JCgBhIrATI0mSNgBGAe30IAhijzSoAektQDRiKaA
