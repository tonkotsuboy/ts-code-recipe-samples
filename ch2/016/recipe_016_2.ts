const getJapaneseColorName = (color: string): string => {
  switch (color) {
    case "red":
      return "赤";
    case "blue":
      return "青";
    case "green":
      return "緑";
    default:
      return "その他";
  }
};
// 使用例
console.log(getJapaneseColorName("red")); // 赤
console.log(getJapaneseColorName("blue")); // 青
console.log(getJapaneseColorName("green")); // 緑
console.log(getJapaneseColorName("gold")); // その他
