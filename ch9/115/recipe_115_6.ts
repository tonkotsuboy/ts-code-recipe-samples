type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

// 商品検索結果（一部の商品データが取得できない場合がある）
const searchResults: (Product | null | undefined)[] = [
  { id: 1, name: "ノートPC", price: 80000, stock: 5 },
  null, // データ取得エラー
  { id: 2, name: "マウス", price: 2000, stock: 0 },
  undefined, // 商品が存在しない
  { id: 3, name: "キーボード", price: 5000, stock: 10 },
];

// 有効な商品データのみを抽出
const validProducts = searchResults
  .filter((product) => product != null)
  .filter((product) => product.stock > 0); // さらに在庫ありの商品のみ

// 型安全に商品価格の合計を計算
const totalPrice = validProducts.reduce(
  (sum, product) => sum + product.price,
  0,
);
const averagePrice =
  validProducts.length > 0 ? totalPrice / validProducts.length : 0;

console.log(`在庫商品数: ${validProducts.length}`); // 2
console.log(`平均価格: ${averagePrice.toLocaleString()}円`); // "平均価格: 42,500円"
