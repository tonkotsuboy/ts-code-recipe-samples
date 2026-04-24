type Product = {
  id: number;
  name: string;
  price: number;
};

// Productオブジェクトからidとnameの型を抽出して新しい型を定義
type ProductPreview = {
  id: Product["id"]; // number
  name: Product["name"]; // string
};
