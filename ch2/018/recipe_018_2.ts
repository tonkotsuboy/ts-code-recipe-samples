// 注: 書籍どおりの TypeScript 形式。ブラウザ環境で動かす想定のため
//     document などの DOM 型が必要です（tsconfig の lib に "DOM" を含めてください）。
//     実行可能な形のサンプルは recipe_018_2/ フォルダ内にあります。
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    const element = document.querySelector<HTMLElement>(`li:nth-child(${i})`);
    if (element) {
      element.style.backgroundColor = "red";
    }
  }
}
// 実行結果: 1番目: 赤色背景, 2番目: 通常色, 3番目: 赤色背景, ...10番目: 通常色
