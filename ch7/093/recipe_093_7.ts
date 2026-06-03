function logRandom(): void {
  if (Math.random() < 0.5) {
    console.log("Heads");
    return; // OK
  }
  console.log("Tails");
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAGzgcwEoEMwBM4C2AFAJQBciAbnDLogN4BQiiMwiRAsllABYB0AJxz5iJRAB5EABn4BWcUxYsICAM5xkAU36o0RAEQAJLVlxqDJANzNlgrVBCCwVxAHo3iAPIBpWwF9bVTANbV10QwAVLBhkC2tGfyA
