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
