const userIdBrand = Symbol();
const productIdBrand = Symbol();
type UserId = string & { [userIdBrand]: unknown };
type ProductId = string & { [productIdBrand]: unknown };

function getUserById(id: UserId): void {
  console.log(`Fetching user with ID: ${id}`);
}

function getProductById(id: ProductId): void {
  console.log(`Fetching product with ID: ${id}`);
}

getUserById("invalid-id");
// エラー: 型 'string' を 'UserId' に代入することはできません
getProductById("invalid-id");
// エラー: 型 'string' を 'ProductId' に代入することはできません
