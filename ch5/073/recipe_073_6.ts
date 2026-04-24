type OptionalAddress = {
  name: string;
  address?: string;
};

type UndefinedAddress = {
  name: string;
  address: string | undefined;
};

const userWithOptional: OptionalAddress = { name: "高橋" };
// addressを省略可能
const userWithUndefined: UndefinedAddress = {
  name: "高橋",
  address: undefined, // プロパティの定義は必須
};

console.log(userWithOptional, userWithUndefined);
