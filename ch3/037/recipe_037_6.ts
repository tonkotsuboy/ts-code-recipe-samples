// エラー: Required type parameters may not follow optional type parameters.
// (必須の型パラメーターは、オプショナルな型パラメーターの後に記述できません)
type MyType<T = string, U> = {
  a: T;
  b: U;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEgqGRLhkH4YC5QEoFMCOBXAlgJyQE1AC4CeADkqCQIZaUC2SBSWAzqLZUaAHYD2BoAMx4AbYTwDuoHiQIYeXSsMKlyVGvUYsAdACgQoABSBR-UAQGYDsGQNHqgRYZIgQ4ZogfoZogewZAgAyAqhkDrDIHaGQOcMgKYZAa4ZAKwZrO0doM0AY-UBrBkAMKMAH+MBzBkBZBkA-BkBtBkBkhgBKHWIyUABZIgAVFQAeUtAAXlBmAiwMLgBzABpQAFUAPlrQAG8dUFBKeFKAbiHQACN4TsmAX3GgA
