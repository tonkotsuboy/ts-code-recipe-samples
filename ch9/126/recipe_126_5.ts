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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJwJIBMBCyCGZ0wC8MAygJ4C2ARiADYAUAlANwBQoksADsiOnMCgZseAsXLU6TNlDJdEMAKpI0YmNGQBLMAHMYAMhgBvGAG0EKYbnwBdAFzwwAazAgA7mBgBfGXIUAFXn5BDCJ1KC1dA2MzHj4BISxrdHtHF3dPH1ZWADM4MEFNcBhgZEQcKERlS3R6TXQHDW0dRgdq1WNWGBgyqDhkT3qYHAglFQw2L2y8gqgiz1LyysD4kNr6xojm1pgV4MTO7t7+wYIR3aCEidYp3PzC4p1EKHbMMgw6hrGanYA3ECGRi6JXAEDoiAAdLQQDp6AADABiz2AAAtmvAVDA3JooCiYKgACIOAAkRnqXjhLBu03uc0ezz2CTeHw2F1WiT+AIIQO6HDBtEh0NhiORaKicX2WJxeMJJLJ6ApVNufNgOC4mgASogIFxQYgCRUcGEeRiag4AEQWLToAC0AEYAEwAZgALABWc0AGmBEquX3NvsKtoAbAB2AAcAE4AAxem5sVgAekTMAAgv5UIAbhkAnQyAXYZAM8M2cASQyAaPVAJCagG3jdig2BWjBtcZqRYVKqN+hqzXa3WQfWGiF19BUlUwQOJByMtZhZvLS5rdvqrU6vUGqA4CGjjBUpMpwDG1oB1BkAIgwlwDmDIAi1MADqZFwA+KoBnBkAX4qATQZWE8XipmbUBywYMmYDvABx6z4MrOUDvvQG6Dsw367n+QA
