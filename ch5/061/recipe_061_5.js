const numbers = [5, 8, 3, 1, 9, 2];

const result = numbers.map((num, index, array) => {
  const isMax = num >= Math.max(...array);
  return `${num}は最大値${isMax ? "です" : "ではありません"}`;
});

console.log(result);
// [

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBGCuBbARgUwE4RgXhgbQFYAaGADhIGYSBGEgThICYBdAbgCh3RJZ1UJ4AG1i4EKDBAB0iAIYAHABQKxJAJZgAJqgAeJGenQyAngEocAPhgBvdjBjdoMVRACyM7TjhIY53G6gAFtLuCpJh+oamHHZ8UPDoYDAABgAkVmIAvoD2DIAA5oDkmoAkCmnObh4A-DAARIDmDICaDJUwAFxV1VmAQgyAUQyAfgyA2gyAyQyVGUkcGSYcXOAQIIKokoIgAOYKfALCY+wA9Bv4QA
