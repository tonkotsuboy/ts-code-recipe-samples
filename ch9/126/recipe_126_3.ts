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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJwJIBMBCyCGZ0wC8MAygJ4C2ARiADYAUAlANwBQoksADsiOnMCgZseAsXLU6TNlDJdEMAKpI0YmNGQBLMAHMYAMhgBvGAG0EKYbnwBdAFzwwAazAgA7mBgBfGXIUAFXn5BDCJ1KC1dA2MzHj4BISxrdHtHF3dPH1ZWADM4MEFNcBhgZEQcKERlS3R6TXQHDW0dRgdq1WNWGBgyqDhkT3qYHAglFQw2L2y8gqgiz1LyysD4kNr6xojm1pgV4MTO7t7+wYIR3aCEidYvIA
