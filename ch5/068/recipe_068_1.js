const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 6

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBGCuBbARgUwE4RgXhgbQEYAaGAJhIGYBdAbgChRJYIkc4k1MA6dVAE3jBUACmEBDYMCTwANmKgh0JKel5goANTEz4qAJQ4AfDADedGDF5R46MDAlTEs+YpgBqGCrWbtu+gF8SAAY9ekYIEBlULhkQAHNhFkRQmAB6VJgANiA
