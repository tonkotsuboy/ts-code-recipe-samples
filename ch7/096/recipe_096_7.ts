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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAZgS0TmADkBDAWwgC4pjF8A7AcwG5soAbM48q2+kzaYAvu0wB6CVECaDIE8GQGYMgck1A4aaB1bUDWDIEhNQNvGmUJFhhIiAMY8IAaQgg48JKgwcA2pahMoAaxsB7XLARkHiMTcwQAHksAPgBdWntEVxj2MUlpdCgAMQBJACUAZQAVEgBBAFkAUQFgBhZWKAAZEqLSyuratigRTDSoQAlFQFoMwCSGVU1dfXBoAGEyMHxgMk58AC8IABNrWwTHLBxXd0YvX39t4Jm5haXVyNj4wKSU9ikMLMJeSho6GqF6hp5SD7tH5dIA
