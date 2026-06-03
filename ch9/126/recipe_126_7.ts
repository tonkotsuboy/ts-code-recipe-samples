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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJwJIBMBCyCGZ0wC8MAygJ4C2ARiADYAUAlANwBQoksADsiOnMCgZseAsXLU6TNlDJdEMAKpI0YmNGQBLMAHMYAMhgBvGAG0EKYbnwBdAFzwwAazAgA7mBgBfGXIUAFXn5BDCJ1KC1dA2MzHj4BISxrdHtHF3dPH1ZWADM4MEFNcBgdRChlFEwyDHpNdAcK1UYHADcQOuNWGBgOCDpEADpaEB16AAMAMTLgAAttPQtkGDdNKBmYVAARBwASIzqvMZZWL2y8gqgiz1KoQPjBKpq6hzvgxOaYNo6jLp7wPtog2Go0m0zmUTib2Wq3WW12+3Qh2Op1YN0aj3Q9AARNoWjhaHUALR1LHHAD0ZJggAqGQCXDIAfhgcgGj1GAAcg08xZMEASQysxoYTmAawZAMdygFNFQCaDIBohkAygyACwZAPYMgHMGQCyDIA-BkA2gyAZIZUWVXgkMdjcfiiSTyZTaQyYMy2REOdzWbqQuhBaLJbLFarNUA
