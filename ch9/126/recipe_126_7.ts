// このファイルは意図的なコンパイルエラーデモです（TS2345）。
// 書籍では recipe_126_2.ts 〜 recipe_126_4.ts の定義を前提にしています。
// 単体で動かすため、必要な定義をこのファイルにも同梱します。
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
