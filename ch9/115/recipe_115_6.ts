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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBACgTgewCYFcDGwoF4oG8BQUUAlkgFxQB2KAtgEYRwDchVAhjRBQM7BzGUA5iyJh+aLlVoNmrXgjQBrCtXqMWAXxb4A9DqiAxVUCDKoBxLQES+gBV9AOeaAIf8AAcoAuEwHYMxwOMMgH4ZA-QyAZBkBryoHT9QHMGQFkGQCsGQBEGQBYNQAgVb0AhBkBohkBIf-w0BEpeKG4INjg0AAsAJQhuFAAbYG4KAAp4ZHRMAB8pMrKoZpRKJAgAMwEIJABKAG0AXWwoYdZcEnIoAEYAGnZOCgAiQDmGd0AJhhgAYTXlsWIJCgAOAAYri+X5JQoAVigNRdZqVuW9KA9PAMAKhkAlwzuaazCgAJmWlA4kjWgD2GQBlDIBOhkOUGOpygYOut2ACmUUAuz1eRE63T6lAGn30xm8gA1tQAU6oB1BgiINIFAAzJDoetALUM7kAOwzuQCTDCi0ZIHlisjj7gsCS98KNtF9AJDmgE6lUJuLxOQD+DIAkhkAvUaAL8VUulMgA3NhlUh1VAYbgTbK5ArFUoVbisAB0fQqjGq1TE9Qwg2wAD5UYgbZgAIQ4d5lQYer3AH1+8MNINYUP+iPuu6KKChi6DJhQL6AVQZAJEMgGsGOmAar04oAohhcRm1+F0+kA0eqASO1ABaKleMgEL5QA8Fk5ooAIKJ1o8A6d7GjKYHHAC3wE7QHDmy1Ia0NbjuuADdAQaqsaqlGhHVOBkNZWhQADUYYDwHdoqJ+NeRZnmTYpsYbEEECXEjYKwa5WuelTumUEBCMA+T5viUAAPxQPOi7iNA+ggRuYHbpB0GwRQFzaGkGQIJBEEIII1QAAa1sYgAOphQAAkuCYZutoQVBggwRoVFFiW+hgh+pEQORlFUYAznqAOLqQ5MbgX4-n+AEiTiAAyCgWhAADKfACJRgwaIAYYq8cWXxrFJMlQAALBC4oXAZaxAA
