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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABABwE5wgUwM7YMJxyoAmMYAhlDgBQDatAHgIwA0iAnkwLpuMBMbdny5cAXIloAoRBLAgAtgCNMqNnKUqe02QuWrE6vVq4BKRAG9tEBNiiJSt8pEyIAvIgCylABYA6b+zIcFDUDHyIALSIzILhUZwmANxWNnAANpi+aXAA5tQABnyAnQ6AyamAdgyAu7GAR2mA9gwAJOYOUE5YAL6A5gyAmgz5SZKtkpJoGDj4hCRklDRSMrQADGyzWjMAzGwALMZJiAD024jF5dU1AKxdQA
