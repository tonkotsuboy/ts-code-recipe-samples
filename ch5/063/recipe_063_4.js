const PASSING_SCORE = 60;

const testResults = [
  { id: "001", name: "鈴木", score: 85 },
  { id: "002", name: "田中", score: 45 },
  { id: "003", name: "佐藤", score: 90 },
  { id: "004", name: "山田", score: 30 },
  { id: "005", name: "高橋", score: 75 },
];

// 合格者の抽出
const passedStudents = testResults
  .filter((student) => student.score >= PASSING_SCORE)
  .map((student) => student.name);

// 合格者の表示
console.log("合格者:", passedStudents);
// 合格者: ["鈴木", "佐藤", "高橋"]
