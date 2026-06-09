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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAhgBwJYCUCmEHgmgInKOGAXhgG8AoGGAVxwCcBJAEwC4YAiOtepZgWgCMAJgDMAFgCsHADRUYCeiGY1gUFuw6LlqqH34A2AOwAOAJwAGWRQC+AbgoUAZjTBqk4GAHM0UAKoMAEIAniwAFHzs0LxgXgCU7ABuIHzk8qCQIAA2aAB0WSBeYQAGAGK+wAAWSLG0DDAA7khQlTCMuOwAJGR8NsVxDjaOLm56nj5QAApKKmoh4ZEw0TXxSSnMadQZENl5BUVlFdW12rOwTS1tHTDdvf2DjgD0jzCAYqqAgyqAowaAjBqAFK6AdgyAItTAA6mgGsGQBnDIAfhkAbQyQ9qAJIZAIR2gHUGQBmDIAghkAgAyAZoZAM8MgEWGQAlDIBrhkAFQyAS4ZIaDAFYMgEiGamAEQYKBNpjo5qFmGFEKgMFhIHgCHBctwmMwBk8XlDYT8ASDQR8ESiMTiCSSKVS6Yzmb4Ajx5pzuehMNgBYRcqddCwBkA
