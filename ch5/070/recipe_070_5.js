const userList = [
  { id: 1, name: "田中", role: "admin" },
  { id: 2, name: "鈴木", role: "user" },
  { id: 3, name: "佐藤", role: "user" },
  { id: 4, name: "高橋", role: "user" },
  { id: 5, name: "伊藤", role: "admin" },
];

// 条件による削除ならfilterの方が簡潔
const removedUsers = userList.filter((user) => user.role !== "user");
console.log(removedUsers);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwDIEtowLwwNoBQMMA3jOgCYBcMAjADQxgCGAtojQESAMroLRynjZCAA2HGJ2YVW6MJxgBfekVLlqMAEyMW7LoBYkwBTmAmENFcEKOYuVlKNAMxa2YzoAV5QCehRk8-PJLS4jZqACyOOuKAG1mA0laeIt5Ivgr+KrYwAKyhzoBQ8h6CsVyS0rKJBAC6ANwEBAD0VTCAhuaAb3KA1gyAEQyA0QyAUkqAJmmAVgyAkQwAZujCUCiAdgyAnaaAMgyAhD6AKvYEoJCwyIisIABuiBQAqvEQOPDxGNAAdEMjKAAUVz4AlDgAfEcop14wAITYuJw+nHcVJYQWKnYQgADmV1W6y2u32AKAA
