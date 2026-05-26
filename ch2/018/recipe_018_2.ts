for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    const element = document.querySelector<HTMLElement>(`li:nth-child(${i})`);
    if (element) {
      element.style.backgroundColor = "red";
    }
  }
}

// 実行結果: 1番目: 赤色背景, 2番目: 通常色, 3番目: 赤色背景, ...10番目: 通常色
