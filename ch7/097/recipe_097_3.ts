const nameList: readonly string[] = ["田中", "鈴木", "佐藤"];

console.log(nameList[0]); // 読み取りはできる
nameList[0] = "山田"; // エラー
nameList.push("山田"); // エラー

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBGCGBbApgGQJbQFwwE7PgBNwAbATxml3TAHMBtAXRgF4Z6AiQBldBaOQ4BoYHQCxJgCnMBQwArygE9COjANwAoRaEggSyAHQkQtABQIUGaPQAMjAJTyYAehsxAtVGB-BkBryoCiGQPYMgcwZAsgyBohkVDNEwoM2Y2DkBHHS4OazsYQAqGQEuGQB+GQKRg6E0ABwBXCAALPSiYq1t7ZJSgA
