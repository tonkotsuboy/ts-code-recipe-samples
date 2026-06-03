const intervalId = setInterval(() => {
  console.log("現在時刻：" + new Date().toLocaleTimeString());
}, 1000);

// 5秒後に繰り返し処理を停止
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBAlmKBTATgNwIYBsCSATGAXhgiSh0VUywAoaBKIgPhgG8AoGGUSELJAHRYQAcxoAiQH-OgCnVAQmaBuJUBY-+JgBqGGCQB3GABEMyBgKggAMiGDYkAFTgBbJAGUoKBGPr0A3OwC+AGhgARgAGUK92dgB6SJgAVkAlz0AY-UBrBkAHP0AohkAV+MB1BkAzxUAwF0AkhkAdBUAja3ZSKFsHEABXKDpGQhYOLmB+DBQKZHRsGgQe6nxw-zjQ4K8gA
