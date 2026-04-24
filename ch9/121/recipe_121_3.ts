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
