const userData = [
  { name: "鈴木", favorite: ["りんご"] },
  { name: "田中", favorite: ["みかん", "バナナ"] },
];

const favoriteFruits = userData.flatMap((user) => user.favorite);
console.log(favoriteFruits); // ["りんご", "みかん", "バナナ"]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwCIEMrpgXhgbQCgYYBvGMdAW0QC4YAiQFiTAKcwYBoYAzdANxGQBLKHQINAUQyBkhkAqDAwC6MAL7tiZCtVENADK6BaOQ7c+A4aPwNA-gyBpBkn6GgBYZAUwz35SlXIDchQqEiwe-ISIAYshwwhC48EhomOgAdFwANpgAsugADgAUGQgoAJS4AHyRKPGGAYi5Ht4QIAmIsQkgAOYZfkZBIWGVMAD0PWJSspzmVjYOTnJAA
