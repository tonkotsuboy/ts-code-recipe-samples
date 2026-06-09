const fetchData = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42); // ここで返される値は number 型
    }, 1000);
  });
};

fetchData().then((data) => {
  console.log("取得したデータ:", data); // data は number 型
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAZgUysAFgEQIZQzAvDACgEoAuGABQCcQBbASwgQB4wBXGgIwUoD48+A3gCgYMSklaUwMMAgDuFavUYEC4iCAA2ANwRF+MYaNGMoAFTo0EIVlFX7cgkcdHqtuggBYATEQDcMAD0gTCAygyhgOYMgCvxgKoMgDEMgNEMgCQKgPYMMuxclDCA0erOogC+ADQwAIwADBX+zvlV+X5CQojI6FgYxAB0UCgIYKoAJq0OTqKgkFoI7ZogAOYEAESAa8qA6fqA6gyA+gyA4wyAPwyA-Qwkc8UD2P5BIUc4aWyc3DlCNX5AA
