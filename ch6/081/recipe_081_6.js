const counter = {
  count: 0,
  increment() {
    this.count++;
  },
};

counter.increment();
console.log(counter.count); // 出力：1

counter.increment();
console.log(counter.count); // 出力：2

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBKCuYoFMBOMC8MDeAoGcIiUAXDAAwA0+MAlmMKsgLbJIAUAlDjQVABa0IAOgRIA1OIDcNAL7VZM3GJSph9RizZQuM0JBAAbZMMMgA5uxVpRRJJykwA9E5iAvxUDZSoCx-gIy5ldqrqDEysHA4BBsamFlaBNioOzq6eXgBMQA
