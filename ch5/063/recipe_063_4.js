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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBACgQQMpIJIDkDiB9JBhAeQCUBRGAXhgDYAGAbgCgHRJYoBTaIzgVwBsoECjADaDGDADeMAJYATAFwwARDRoBGZQBoYYAIYBbdkuWAWJMAU5tpgRQAJ2MwAHAFYYAXy3ipsxSrUAmK30jE0AGV0BaOSsbEHslABZXDy9peRM1AGYgwwdlQAV5QBPQqLsHAE4ad08JFN9VGjiskJVARx1QopiHdPKkqp80mmcGnMANrMBpKzbYmAB2RM8AXUYGAHpFmEAIFUAeC0BQAMA7BkBeo0AvxWZwaBgABz0ICHY5JCgeOXYwQWEOLl4BCC8AOgAzGQF2LYABRA6D3R5QACUFAAfNY7g8nl9ovYYDDKIgUBgcPhiCRId8DHpTiCwYiobD4eCkcF2JCFss1lttoALCMAXJ5HSAgPjsL58EAAcyByg2mwUVnOl2ut2pgnpSxWoqUIjMlh0eUK6tGylmQA
