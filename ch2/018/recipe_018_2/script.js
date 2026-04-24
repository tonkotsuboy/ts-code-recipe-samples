// 注: 書籍ではTypeScript（recipe_018_2.ts）として掲載されていますが、
//     ブラウザで index.html と一緒にそのまま動くよう script.js として配布しています。
//     HTML5 の :nth-child に合わせ、li 要素にインデックスで背景色を付けています。
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    const element = document.querySelector(`li:nth-child(${i})`);
    if (element) {
      element.style.backgroundColor = "red";
    }
  }
}
// 実行結果: 1番目: 赤色背景, 2番目: 通常色, 3番目: 赤色背景, ...10番目: 通常色
