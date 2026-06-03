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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJwJIBMBCyCGZ0wC8MAygJ4C2ARiADYAUAlANwBQoksADsiOnMCgZseAsXLU6TNlDJdEMAKpI0YmNGQBLMAHMYAMhgBvGAG0EKYbnwBdAFzwwAazAgA7mBgBfGXIUAFXn5BDCJ1KC1dA2MzHj4BISxrdHtHF3dPH1ZWADM4MEFNcBhgZEQcKERlS3R6TXQHDW0dRgdq1WNWGBgyqDhkT3qYHAglFQw2L2y8gqgiz1LyysD4kNr6xojm1pgV4MTO7t7+wYIR3aCEidYp3PzC4p1EKHbMMgw6hrGanYA3ECGRi6JXAEDoiAAdLQQDp6AADABiz2AAAtmvAVDA3JooCiYKgACIOAAkRnqXjhLBu03uc0ezz2CTeHw2F1WiT+AIIQO6HDBtEh0NhiORaKicX2WJxeMJJLJ6ApVNufNgFlUbXGakWFSqmvoACI1fUALQARgATABmAAsAFZ9VSVTAJVcvoy1mFtctLmsDS7CuhjQA2ADsAA4AJwABgdbFYTxeKmZtX9HLYAHp0zBABUMgEuGQA-DA5ANHqMAA5O7EqWYIAkhjL7QwVcA1gyAY7lAKaKgE0GQDRDIBlBkAFgyAewZAOYMgFkGQB+DIBtBkAyQzxhk+qDJ+hqjBUzM5gvFuuaqu18tzhswFsdnsDkcTydAA
