// 書籍では recipe_126_2.ts で定義した UserId / ProductId を前提にしています。
// 単体で動かすため、同じBranded Typeの定義をこのファイルにも同梱します。
const userIdBrand = Symbol();
const productIdBrand = Symbol();
type UserId = string & { [userIdBrand]: unknown };
type ProductId = string & { [productIdBrand]: unknown };

function createUserId(id: string): UserId {
  return id as UserId;
}

function createProductId(id: string): ProductId {
  return id as ProductId;
}
