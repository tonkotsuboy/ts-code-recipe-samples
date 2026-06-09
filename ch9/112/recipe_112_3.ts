type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      // shapeは{ kind: "circle"; radius: number }型
      return Math.PI * shape.radius ** 2;

    case "square":
      // shapeは{ kind: "square"; size: number }型
      return shape.size ** 2;

    case "rectangle":
      // shapeは{ kind: "rectangle"; width: number; height: number }型
      return shape.width * shape.height;
  }
}

const circle: Shape = { kind: "circle", radius: 5 };
const square: Shape = { kind: "square", size: 4 };

console.log(getArea(circle)); // 78.53981633974483
console.log(getArea(square)); // 16

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAygFgQ0lAvAKClAPlA3lAawEsA7AEwC4oAiAYyICdaAbCagbigYTKIFcAzlRJ8AtgCMIDKAF8M2PIVKUaAgI58EDNpwFEAXhGFjJ0uZhz5i5KtW21gCEgHNWHKAHciZYHGMSpTjgIImc4YH9TWXY0NAAzPhIHIgB7EihnCGAAQW0EAAoBREgqeCQIAEpIqTx5AS9gWjgoQuKIADprMgrazExaBAFoOkYWNgp5PqgAemmoIvLAewYrZVt6JjdObl5BarNAaPVJvu1gPgZ0gFkEX3aABQBJKAAqebb27f4BZ5eAJhijgZDVQaLTjI6YWavJYrGzAzTadx6Qx7WSHKaYE5ndILSDtJHQJ6-f5TQHDeyOFxuCbomZzHEQZZKWF2CAOJyuHSeby+PZBEJhCJQEQBA7grhZLFQ3FeHzNF709rBULhGKYORyNC0NICYBQdZjUptVCKLprUZuAA0XB4nyoAFZoprtbr1PCjLAjSgTas4aDqFb8VQACyOp0kAQpVjtZgpZz5TI5PL5fWsCoVTiQgDsAA52naAMwATmzAEYAGz5ouZoNB7P5sMRqMxuMJ3IQAqu0FpjNzctAA
