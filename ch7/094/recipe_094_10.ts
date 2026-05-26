type Point = [number, number];

function getMidpoint([x1, y1]: Point, [x2, y2]: Point): Point {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
}

const result1 = getMidpoint([0, 0], [100, 100]); // [50, 50]
const result2 = getMidpoint([10, 20], [30, 40]); // [20, 30]
