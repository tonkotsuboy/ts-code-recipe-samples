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
