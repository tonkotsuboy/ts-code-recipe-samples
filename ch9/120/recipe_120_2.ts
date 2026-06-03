// 文字列リテラル型のユニオンから新しい型を生成
type Status = "loading" | "success" | "error";
type StatusFlags = { [K in Status]: boolean };
// { loading: boolean; success: boolean; error: boolean; }

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEnDTR1bUdCVCuGQxhkJcMhrhkNHqg7BkGcMhphkFUMhnhkGkGQSIZAG00HUGQEQZVAkhkHxXQBCMAoAFwE8AHAU1AGUWAhiwCuAZ1ABeUACIANgHsBAEwCWAOwDm00AB8Zo4QGNDXUaO17pXAE7X516QG5WnHvyFiAYrIEbxUgG9QAG0AaVB1PkERUQBdAC5QACN5eVkuATVQAF9nEFAghWV1DUSUtIy1R1ADY1NRMtT0zOqbO2tGipacoA
