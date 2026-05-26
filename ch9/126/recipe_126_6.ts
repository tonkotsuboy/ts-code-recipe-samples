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

function getUserById(id: UserId): void {
  console.log(`Fetching user with ID: ${id}`);
}

function getProductById(id: ProductId): void {
  console.log(`Fetching product with ID: ${id}`);
}

const userId: UserId = createUserId("userid-12345");
const productId: ProductId = createProductId("productid-67890");

getUserById(productId);
// エラー: 型 'ProductId' を 'UserId' に代入することはできません
getProductById(userId);
// エラー: 型 'UserId' を 'ProductId' に代入することはできません
