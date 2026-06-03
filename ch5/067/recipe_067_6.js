const viewers = [
  { name: "田中", age: 25 },
  { name: "鈴木", age: 17 },
  { name: "後藤", age: 30 },
];

const allAbove18 = viewers.every((viewer) => viewer.age >= 18);
console.log(allAbove18); // false

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBAbgSwKYHckCcIwLwwNoBQMMA3jGAIYC2SAXDAESAMroLRyDANDBQOZ0wBMAVhgBfdkVLlqfBoBYkwBTmHLr3oBGAOyjxxMpRr0GgGP1AJ6FKefAMwAGLQQC6AbgIFQkWBQA2HgIIAjEHBIqgAcOPDIaJgAdEiB6ACeABSJiKgYAJQ4AHzhaehR5jBZuCHpTq4QIB5IUR4g3ImePv6BpQ4wAPQdMABmnhBIQA
