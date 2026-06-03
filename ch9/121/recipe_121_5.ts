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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBACgTgewCYFcDGwoF4oG8BQUUAlkgFxQB2KAtgEYRwDchVAhjRBQM7BzGUA5iyJh+aLlVoNm+AL4t8AeiWxEqDICqGQGsMgDoZA5QyB6hkATDIGkGQJEMpQBYMlDhEB2DIGj1QEkMgXqNAX4qB1BkBmDIAbTT4AiDC6AWdqAlf74oJBqyOjA8BAAbsQQAO7YeKykFPAxGADaAESkBQC6TFAqUvSMrLac2eqxhXUQpeWVvPxC8kxAA
