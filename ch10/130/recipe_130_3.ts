type ElementColors = Pick<CSSStyleDeclaration, "color" | "backgroundColor">;

const myColors2: ElementColors = {
  color: 123, // コンパイルエラー
  backgroundColor: "lightgray",
};

console.log(myColors2);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAogNhAthAdsAwgezpgTgZygF4oAFASwGMBrAHnQGUnQEARCSuAQ1y+HMwoANFABElbHlFQAPmIBGXGgHNcmAK4oAJlhy5RAPgDcAKBMSU+YFEQhdefACYAXLATI09gsSgBvE1BQEnquAIyOAMwiAPTRUIDNDIDPDICLDIAlDIDXDIAVDICXDIA-DAFQiipqmjqSuK6icOTKABbAqlwgokImAL6m5oL42BAAdDjKABS2Xk4AlEZAA
