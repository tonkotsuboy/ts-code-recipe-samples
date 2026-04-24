// 書籍では recipe_126_2.ts 〜 recipe_126_4.ts で定義したBranded Typeと関数を前提にしています。
// 単体で動かすため、必要な定義をこのファイルにも同梱します。
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

const apiResponseData = {
  userId: "userid-12345",
  productId: "productid-67890",
};

// APIレスポンスを型変換
const userId: UserId = createUserId(apiResponseData.userId);
const productId: ProductId = createProductId(apiResponseData.productId);

// 正しい型で関数を呼び出す
getUserById(userId); // 正常
getProductById(productId); // 正常
