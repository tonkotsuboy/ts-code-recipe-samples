for (let i = 0; i < 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break; // 内側のループのみを終了
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 実行結果: i: 0, j: 1 / i: 1, j: 1 / i: 2, j: 1
