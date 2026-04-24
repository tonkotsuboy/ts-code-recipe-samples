const userIdBrand = Symbol();
const productIdBrand = Symbol();

// Branded Typeを適用した型定義
type UserId = string & { [userIdBrand]: unknown };
type ProductId = string & { [productIdBrand]: unknown };
