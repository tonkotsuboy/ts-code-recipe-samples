// 意図的な型エラーデモ: 「支店」で終わらない文字列はShopName型に代入できない (期待エラー: TS2322)
type ShopName = `${string}支店`;
const shopName3: ShopName = "福岡"; // エラー
const shopName4: ShopName = "くまもと"; // エラー
