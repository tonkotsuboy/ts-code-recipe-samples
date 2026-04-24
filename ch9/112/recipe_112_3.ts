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
