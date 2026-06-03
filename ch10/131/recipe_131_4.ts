type WithoutFunction = Exclude<"a" | "b" | (() => void), Function>; // "a" | "b"

const sample: WithoutFunction = "a";
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBA6glsAFgewK7AGKoHYGNhzLZQC8UAogB64A2qAJhADwBEAhi1AD5QsBGnHgAohASlIA+KADdkceqIA0ULHgJEJAbigB6Hbw7deAgFAncRAM7AoltgFswNCAC5YCFOlX5CxMuxZNcytkZwA6GmQAcyE7R2dRTSA
