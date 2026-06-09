type ProductList = {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  };
}[];

// ネストしたプロパティの型を取得
type ProductId = ProductList[number]["id"]; // number
type CategoryName = ProductList[number]["category"]["name"];
// string

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBACgTgewCYFcDGwAyBLAzsKAXigG8AoKKbJALigDsUBbAIwjgG4KGBDJiOvjjZ6Acy6U0PYBFEI4IOuUqVqdRq3YSV9PgKhCR47gF8uJgNoBdLmQD0dqIFmGQJ0MgCYZA6gyB9BkDrDIFuGQEWGQDGGQGKGQDsGQGj1QCSGQDXlQHT9MlBIWERUDABJJCIU5HQsPGALDTY4KwsAImpymygHBmYSxPBoAGFpWXkQADk9bPhcjBx8Iob2MvKpGTkFaordfmquOsMxIA
