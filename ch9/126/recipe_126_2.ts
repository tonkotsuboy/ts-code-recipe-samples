const userIdBrand = Symbol();
const productIdBrand = Symbol();

// Branded Typeを適用した型定義
type UserId = string & { [userIdBrand]: unknown };
type ProductId = string & { [productIdBrand]: unknown };

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJwJIBMBCyCGZ0wC8MAygJ4C2ARiADYAUAlANwBQoksADsiOnMCgZseAsXLU6TNqwD0smCPyICAFTJdEgJIZAlgmAKV0DqDIH0GQNHqgLO1Alf6soGxDACqSNGJjRkASzABzGADIYAN4wANoIKMK4+AC6AFzwYADWYCAA7mAwAL5sNpowAAq8-IIYRK5QHt5+gSE8fAJCWJHosfFJqelZQA
