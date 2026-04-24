// 注: 書籍では age の定義は前のスニペットを引き継ぐ前提。
//     単体で動くよう、冒頭に const age = 24; を補完しました。
const age = 24;
const result = age >= 20 ? "20歳以上" : age >= 10 ? "10歳以上" : "10歳未満";
console.log(result);
