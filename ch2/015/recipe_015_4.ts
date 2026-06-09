const getLoginMessage = (isLoggedIn: boolean): string => {
  return isLoggedIn ? "おかえりなさい" : "ログインしてください";
};
console.log(getLoginMessage(true)); // "おかえりなさい"
console.log(getLoginMessage(false)); // "ログインしてください"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBA5gUygGRHAlmAsgiECGiMAvDABToSpyIAmAkmAFwwBGIIANgvmAJQtoAJ0xwSAPhgBvAFAwYQpAFchYGJWp1GMAPwwARICkGQNIMgCQZAUQyArBkCqDIBEGfTBb7AtwyAGhkAlDIGeGQOoMgMwZA8gyABgx2+gDcMgC+4aCQXAgAdJxoZIgoaJg4eIQIZFBCSgh8fKEwAPSlBiYWNvYyMRBxicmp1Bm4BIhkAGb4nBCFxWUVLh4+AcH2QA
