const users = ["鈴木", "田中", "佐藤"];
console.log(users.findIndex((user) => user === "田中") !== -1);
// true
console.log(users.includes("田中"));
// true（includesの方がシンプル）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwjAvDA2gIkCxJgFOY4A0MOgDK6C0ciWYArygJ6E4C6A3AFCiQgA2iAdNxABzABQIUEPgDMAlmAAmASQWIAHiLFJkASgwA+eFozpMFaroCEJmAFoAjNvYB6JzCjI4iDuAg9+g0XFUPjlgbjh5RAgRMxxtRzYXNw9EQAh-0PDIiEA7BkBO00AZBkB2hkBnhkB1hkBrhkBIf6A
