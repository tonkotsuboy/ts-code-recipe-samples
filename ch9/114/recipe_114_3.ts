type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function assertNever(x: never): never {
  throw new Error(`未処理のkind: ${JSON.stringify(x)}`);
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    default:
      return assertNever(shape);
  }
}

console.log(area({ kind: "circle", radius: 5 })); // 78.53981633974483
console.log(area({ kind: "square", size: 4 })); // 16

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAygFgQ0lAvAKClAPlA3lAawEsA7AEwC4oAiAYyICdaAbCagbigYTKIFcAzlRJ8AtgCMIDKAF8M2PIVKUaAgI58EDNpwFEAXhGFjJ0mezRoAZnxK1gRAPYkoCAQKnAAchABuUgAoAD2E-KQBKUP9pXHlgOAZHAHcoEggUgFEGRIYAgANAKnNAM8VAMBdAOwZicioAElwAKRgAeS8AOgFgBlIAcyIrEGDwmTzwizlrW3snFy0IBACBREgqeCQISNSTKTx5ASSiYFo4KHnFiBbKsnDtzExaN2g6RhY2CnkbrghgPgYXAFkEeItAAKAEkoAAqKALVYtbi8QQQyEAJgs7zuHlUGhm1Fe70w2i+PyhpzaBmg4ORqJuZAgVgQfGYwFxeIJ32m7k8PmiJ1WI3kcjGtGcAkcrBazEcXQCMzm+AuVEeTFY1AANFwePwhFAAKyycIjKAAekNUAA7AAOFragDMAE5zQBGABs1rtpoALO7zda0EKSCKxRKpTKAnLlAr1JptKqoWSqO69QbjVBnUA
