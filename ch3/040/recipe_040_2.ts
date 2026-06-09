const myObject = {
  name: "鈴木",
};

console.log(Object.getPrototypeOf(myObject) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAtgTwPICMBWBTYsC8MDeAUDDGAIZwYBcMARICxJgFOa0A0hAvgNyGGiQgAbDADoBIAOYAKVJmzDxGKAAUATiCjqEABwxIAZpMQysUAJQwclmMbla1GqNoynOMAPRuYUFQFcMvcAhBETEpGyh5RVV1TR19aXQTYTsYxx1TF3dPMB8BASA
