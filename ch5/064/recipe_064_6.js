const eventGroups = [
  ["田中", "鈴木", "佐藤"],
  ["高橋", "伊藤"],
  ["渡辺", "山本", "中村", "小林"],
];

const allParticipants = eventGroups.flat();
console.log(allParticipants);
// ["田中", "鈴木", "佐藤", "高橋", "伊藤", "渡辺", "山本", "中村", "小林"]

console.log(`参加者総数: ${allParticipants.length}人`);
// 参加者総数: 9人

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBApgNzmKBxATiArgBwjAXhgG0AoGEgIkAZXQWjlKAaGSwFiTAKc0ecAV5QE9DKBdBuSqANrMDSVp0qAoeT6DhxSoEI7QF3xkwI46gGnNJtQIrmkwPA6gdPMBQ-gG5SpUJFgBDADb2ACrfRQAlsHc5bKfEURkNExcCAA6ADN7WygACgBKC2sIEHs4MPsQAHNYh2dXDy8fP0TSAHoyqjpJdkleSXFJGUkVdS0mSl0DY35LZNT0zJyAA0Ah5UACpUBQAMB530AHUwAuGAASAG88lzdPb18ocLSwLKgACwBfQC65YdKKmAmZhZgATjOgA
