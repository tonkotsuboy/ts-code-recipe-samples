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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJwJIBMBCyCGZ0wC8MAygJ4C2ARiADYAUAlANwBQoksADsiOnMCgZseAsXLU6TNlDJdEMAKpI0YmNGQBLMAHMYAMhgBvGAG0EKYbnwBdAFzwwAazAgA7mBgBfGXIUAFXn5BDCJ1KC1dA2MzHj4BISxrdHtHF3dPH1ZWAHocmEAi1MAHU0BzBkBo9UAkhkA4M0Auj0BrBkAs7UBK-1YAMzgwQU1wGB1EKGUUTDIMek10B0HVRgcANxBx41YYGA4IOkQAOloQHXoAAwAxfuAAC209C2QYN00oU5hUABEHABIjca99llYvbPbOlBup4+lBAvFBMNRuMHODgokZjB5osjMtVuB1rQtjs9kcTuconF4Tc7g9nm8Pugvj8vEA
