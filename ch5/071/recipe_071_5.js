const names = ["鈴木", "田中", "後藤"];
const newNames = names.with(1, "加藤");

console.log(newNames); // ["鈴木", "加藤", "後藤"]
console.log(names); // ["鈴木", "田中", "後藤"]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBGCGBbAphGBeGBtARIFiTAKcxwBoYdAGV0Fo5EswGP1AT0JwF0BuAKFEljGQHcA5JKgxwhEAHS8AllAAWACgCMpHIAKlRgEp2HcBBAAbZOP0gA5vJ4CxWmAHpb2fERXqaOBsx2QDRk+YQoEDb2joRuVG4eTEA
