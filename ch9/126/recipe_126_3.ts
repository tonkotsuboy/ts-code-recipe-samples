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
