type Point = [number, number];

function getMidpoint([x1, y1]: Point, [x2, y2]: Point): Point {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
}

const result1 = getMidpoint([0, 0], [100, 100]); // [50, 50]
const result2 = getMidpoint([10, 20], [30, 40]); // [20, 30]

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBACg9gSwHbCgXigbSQVwLYBGEATgDRS6EkC6A3AFD0BmOSAxsAnElAOYTAAsggAmYRCgAUmAB4BGciDnUAXLAnBysgEyLtq9cmABKNfCNQA3vShRiAnMR6ZJ8qAGooM7cagB6KF0oSSUPKBAff0C6egBfRjZuAGdUeyScABtgOXQ+AWExDWkABnJi6i05YtKoKvLjWn8AzABWGrbqekSkFLsIdKztXP4hUXEjaSrybXKtAGYagBZ6xr9mmfIF6iA
