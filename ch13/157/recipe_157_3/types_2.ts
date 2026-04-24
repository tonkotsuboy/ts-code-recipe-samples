// 書籍では recipe_157_3/types.ts の型定義と組み合わせて紹介されています。
// このファイル単体では export 対象の型を再度定義しつつ一括で export しています。
type User = {
  name: string;
  age: number;
};
type Post = {
  title: string;
  content: string;
};
export type { User, Post };
