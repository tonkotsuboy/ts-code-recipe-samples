// 書籍では recipe_126_2.ts で定義した UserId / ProductId を前提にしています。
// 単体で動かすため、同じBranded Typeの定義をこのファイルにも同梱します。
const userIdBrand = Symbol();
const productIdBrand = Symbol();
type UserId = string & { [userIdBrand]: unknown };
type ProductId = string & { [productIdBrand]: unknown };

// 関数で型を明確に定義
function getUserById(id: UserId): void {
  console.log(`Fetching user with ID: ${id}`);
}

function getProductById(id: ProductId): void {
  console.log(`Fetching product with ID: ${id}`);
}
