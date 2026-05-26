const userData = [
  { name: "鈴木", favorite: ["りんご"] },
  { name: "田中", favorite: ["みかん", "バナナ"] },
];

const favoriteFruits = userData.flatMap((user) => user.favorite);
console.log(favoriteFruits); // ["りんご", "みかん", "バナナ"]
