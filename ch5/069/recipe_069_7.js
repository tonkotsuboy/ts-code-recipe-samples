const messages = [
  { id: 1, text: "こんにちは", timestamp: "10:00" },
  { id: 2, text: "お元気ですか？", timestamp: "10:05" },
  { id: 3, text: "はい、元気です", timestamp: "10:10" },
];

const latestMessages = messages.toReversed();
console.log(latestMessages);
// [
//   { id: 3, text: "はい、元気です", timestamp: "10:10" },
//   { id: 2, text: "お元気ですか？", timestamp: "10:05" },
//   { id: 1, text: "こんにちは", timestamp: "10:00" }
// ]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBAtgUwhAhgcyTAvDA2gKBhgG8YBLAEwC4YBGAGhigQA8oaAiQZQZBkhkGsGQIYMgewYOjKGUTQUcAA6daABioKFHGAF96hEuWowATGNbsYHQFIMgYUVA6DaBzBkCaDIGkGQPj-ophKRRpc04uUBWNU1tUkoaAGYjNk4hQBEGQEAGa3tXcUlPWXklRUCtAF0Abnx8UEhYABsUZmgAWSRUDAhseFr0JAA6KBAAJQQANwQAJwgECgAKAEoC4ogQUoRW0pA0EfLKqBrkFogJ-AB6Hbxd-aIQvQimY2j4xLtk9yl0n0zVDS09oh1Qg0iTc2vnW9SXgy-myh3eJxoDHOUVMvEEIjEdzS3g4vhUgTBOSAA
