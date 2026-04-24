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
