function countGraphemes(text: string): number {
  if (
    !("Intl" in globalThis)
    || typeof Intl.Segmenter !== "function"
  ) {
    throw new Error("Intl.Segmenterに未対応の環境です");
  }

  const segmenter = new Intl.Segmenter("ja",
    { granularity: "grapheme" });
  const graphemes = [...segmenter.segment(text)].map(
    (segment) => segment.segment,
  );
  return graphemes.length;
}

console.log(countGraphemes("👍🏻🙂")); // 2
console.log(countGraphemes("👩‍👧‍")); // 1
console.log(countGraphemes("👨‍👩‍👧‍👦家族")); // 3

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBO4oHEBOBDADgCwFMBbQgZwAopCAPKALkTKkxjAHMBKRsEYgI0KZEAbwBQiRDGCIKEyYgCEFAEQBJMFAA2KqUnZa4-bFoAq+GGU7zJAH1uIoAT1yE4MjdoB0AZULtSTSElAF4QxBVQSFgEFXlOURtHfEw4AHdEMEIMgFFMVMxVTy1ff0DqTEBrBkAqc0A-7UAd-UA7BkAGl0BgjUBzBkBNBhVOAG55AF8xeRQwZiYywiDhcKyM4tKAqYrVACtsFQAaJJFEdhxeLWxWZ0YVfbwiUl0BvpGEcYuCEnJEcIBtLy+ySemvH6WmiotCgnAAul5iHg5ApZADygkQgA+CaAqD-X5QbaSO6STCEKAgTD6HDPUhkLxaKbsKD4fpDMSjMhwKmUuDsCgoNBYS4vSgqQC8G4BZHcAPBuAb-2BYAhPZ6fUQAHo5YgAEyMh4swhsjlczQ8snkVQCwCWO4BYAgFgHMd40y3ryxUARlVY3Vms5qB1pKu+sFgAsd00m82mwBmO4A27UA86ZWm2IADMQA
