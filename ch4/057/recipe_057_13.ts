// 物体の位置を更新する
let positionX = 0;
let velocityX = 5;
let accelerationX = 0.1;

function updatePosition() {
  // 速度に加速度を加算
  velocityX += accelerationX;
  // 位置に速度を加算
  positionX += velocityX;

  console.log(`位置: ${positionX}`);
  requestAnimationFrame(updatePosition);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEksnRleUOwZFl5Q7f0EkMgXs0A2mhNBkNEMAoANgUwBdQAHAewGcBLQqsgOwA1QBeUABgG48jQA3fLjIBjGgE9mbAKzcCxAIbDhg-ACd5tBpI4A6AIzdsAMwCu9YZvqgTJACYb8ABUo069ABQBKUAG9soUBBQQHwEwDK9QGsGQAKlMMRIwHTvf35BEXFmAGo2RWUCdUtGbgCghHCY+MTyajzQDKShUUIJQwDhBgoyAh0hAHN3AAMEAC5QABIfCtctAF9ezwLQVXwARxN8CkIAQXoqAFsNNwAxdW38dxt7QicXS1nsSaA
