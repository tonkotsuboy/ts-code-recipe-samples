// noPropertyAccessFromIndexSignature: true で、
// インデックスシグネチャ経由のプロパティへのドット記法アクセスはエラーになります。
// 期待エラーコード: TS4111 - Property 'hello' comes from an index signature, so it must be accessed with ['hello'].
type Dictionary = {
  language: string;        // 定義済みプロパティ
  [key: string]: string;   // インデックスシグネチャ
};

const dictionary: Dictionary = {
  language: "ja",
  hello: "こんにちは",
  goodbye: "さようなら",
};

// 定義済みプロパティはドット記法でアクセスできる
const lang = dictionary.language;
// インデックスシグネチャ経由のプロパティはドット記法だとエラー
const greeting = dictionary.hello; // エラー
// ブラケット記法でアクセス
const farewell = dictionary["goodbye"];
