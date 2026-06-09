class MyClass {}

const myInstance = new MyClass();

const foo = {
  name: "鈴木",
};

// ポイント
Object.setPrototypeOf(foo, myInstance);
console.log(foo instanceof MyClass); // trueになってしまう！

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYGwhgzhAECyCeBhcVoG8C+AoLwD2AdhAC7QC28AkkcWAcAKbQC80BDA7nEihABQBKANw58NaADM8eFuizQ2YMgwBc0AESAWJMAU5uoA0WDCKwB6E9EC7DIBKGQM8MgCYYsAeQBGAKwbBiAOggNiABQAnPGIQ+AAHBkcJPik8PXIqGjpGYVxCCDwQBi8QPABzWOloAEtk+gY8CW5kSAhhaDNoYkCAVwZAawZAKwZAYwZAMwZAdQZAPwZAMQZAQH+gA
