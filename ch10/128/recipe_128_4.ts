type NamedRecord = Record<"foo" | "bar" | "baz", string>;

const keywordTable: NamedRecord = {
  foo: "Hello",
  bar: "World",
  baz: "TypeScript",
};

console.log(keywordTable);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAcghgWwgEwEoQMYHsBOyoC8U62eAPAEQBmWWFUAPlBQEZw71OtwBeFANFADOwHAEsAdgHMAfAG4AUAuwSRUANYQQAd1zIAKnBYAbCAC5YiFCT2EoAbwVQoNLBYoAJCMeN1+TqDYcdwB1XGNkAQC2Hnd9cAgAZQxxMGAogF9FZSxVLFMAOl8pAApNHT1DEwgASjkgA
