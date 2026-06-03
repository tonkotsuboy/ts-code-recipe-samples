function processValue(value?: number) {
  value &&= 999;
  console.log(`結果: ${value}`);
  return value;
}

processValue(1); // 結果: 999（1はtruthy）
processValue(0); // 結果: 0（0はfalsy、代入されない）
processValue(); // 結果: undefined（undefinedはfalsy、代入されない）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABABwE5wgUwM7YGoCGANiJgBQBuxpA-AFyJggC2ARpqgJSIDeAUIkRUSmRADIxAXkQBOOQG4BiCAmxwimAHRE4AczIADQAq+gHPMGAEh7DSAXwOdFg1JighUSa5kU2+fNBhx8anIARgdEAHoIxFMGORlACH+QwHsGKFQQKAALAE9ASH+-dCxcQhEyAAZwqJizRDKEsuTgYmxswEAGQGO5QFNFQFUGQBiGQCsGQBEGfP8ioNLK6NjEcAATTGAYMExZhLmFpZXG5rauvqHcoA
