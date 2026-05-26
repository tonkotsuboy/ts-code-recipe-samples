function processCoordinates([[x1, y1], [x2, y2]]: [
  [number, number],
  [number, number],
]) {
  const distance = Math.hypot(x2 - x1, y2 - y1);
  console.log(`2点間の距離は${distance}です`);
}

processCoordinates([
  [0, 0],
  [3, 4],
]); // 2点間の距離は5です
