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
