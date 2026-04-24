// 書籍では recipe_117_8.ts で定義したuserをそのまま使っています。
// 単体で動かすため、同じ定義をこのファイルにも同梱します。
const user = {
  name: "鈴木",
  age: 24,
} as const satisfies {
  name: string;
  age: number;
};

user.name;
// ^? "鈴木"
