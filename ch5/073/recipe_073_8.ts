type CustomerInfo = {
  customerId: string;
  name: string;
  shippingAddress?: string; // 配送先住所はオプショナル
  billingAddress?: string; // 請求先住所もオプショナル
};

const customer: CustomerInfo = {
  customerId: "12345",
  name: "田中",
};

// 後から配送先住所を追加する
customer.shippingAddress = "東京都港区";
console.log(customer);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAwgrgZ2AewLYQE4EkB2AzZKAXigG8AoKKAY0RXWwBMAuKJDASxwHMBuSqDgCG6Vuy58BCABYcwYCQEFGjDBAQIA-GOCcevKAHpDUQLKJgQATAEoqB5eUACRoHsGQFUMgdYZA7QyBzhkBTDIGuGAQCMOABtApRU1DW02XQkDYyhAaajAIRsbW0AghhcPH3IAX35yamQcJBo6NExWeCQy7HxCEgoqWiqGLBYoACIARgAmAGYAFgBWdoAaAWFRDsAGV0BaOVGcvLjAGP1AaQZASIYLFMAkhkBf+MACpUBNBkBohnzShgA6GTkFHmVVdQRiDsBHc0AauUBfhMB6O0AuZXb+AqKyECEHOgWQ3AAFE16JgAJS8IA
