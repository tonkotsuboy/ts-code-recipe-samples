const forbiddenChars = ["!", "@", "#", "$", "%"];

const password1 = "securePassword123";
const result1
  = forbiddenChars.some((char) => password1.includes(char));
console.log(result1); // false

const password2 = "securePassword!";
const result2
  = forbiddenChars.some((char) => password2.includes(char));
console.log(result2); // true

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBAZiATgIwJYBN0FMwGEAWAhohDALwwDaARAITUA0M1AAo8wMTvUAk3ApNQC6AbgBQY0JFgAHQhAgB3JOgCM5ZhCzAAroiwAFeUpWqATAGZq4qdBj6IOgDZRVYmBoQoM2PERIAdBAgALZYABThwP4AlOQAfDByCsqIagGoYMBOOtgQUbExNuDBTlgBTiAA5uEOzq5FMAD0TfCETloStrLGqehmGtRauvpGKSr0xdL2WI4uZu6eSGiYOATEEEGhEQXEcWSJySZpZhlZOXm7iDFFkiUgZRXVtbP1Zo0tMFCIOlhAA
