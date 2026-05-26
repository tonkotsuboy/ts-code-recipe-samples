type User = {
  name: string;
  age: number;
  address?: string;
};

const user2: User = {
  name: "田中",
  age: 24,
};

const { address: rawAddress } = user2;
const printableAddress = rawAddress ?? "住所未登録";
console.log(printableAddress); // 住所未登録
