function logPoint([x, y]: [number, number]): void {
  console.log(`(${x}, ${y})`);
}

logPoint([100, 200]); // (100, 200)
logPoint(["鈴木", "田中"]); // エラー
logPoint([1, 2, 3]); // エラー
