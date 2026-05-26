const apiResponseData = {
  userId: "userid-12345",
  productId: "productid-67890",
};

function getUserById(id: string): void {
  console.log(`Fetching user with ID: ${id}`);
}

function getProductById(id: string): void {
  console.log(`Fetching product with ID: ${id}`);
}

// 商品情報用の関数にユーザーIDを渡しても、コンパイルエラーにならない
getProductById(apiResponseData.userId);

// ユーザー情報用の関数に商品IDを渡しても、コンパイルエラーにならない
getUserById(apiResponseData.productId);
