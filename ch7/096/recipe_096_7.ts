type User = {
  firstName: string;
  lastName: string;
};
// すべて大文字に変換
type UppercaseKeysUser = {
  [K in keyof User as Uppercase<K>]: User[K];
};
// { FIRSTNAME: string; LASTNAME: string; }
// 先頭を大文字に変換
type CapitalizedKeysUser = {
  [K in keyof User as Capitalize<K>]: User[K];
};
// { FirstName: string; LastName: string; }
