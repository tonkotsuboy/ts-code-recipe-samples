declare function checkDoor<T extends string>(states: T[], initial: T): T;

const result = checkDoor(["open", "close"], "open"); // OK
console.log(result);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzAAtwBrAERxxgB4AVeEADwxFWAGd52MYtUBzAHwAKblBbsAXPFoBtALoAaeHyzYoEabQCUWgNwAoA2Dzd4cdsggZ4AXgLEw5SjGGyARDgAOrd8veQOOwg7krwnj6o7tp68AD0cfAA8gDSxqY4ECAAdBA4-MIWVhgxQA
