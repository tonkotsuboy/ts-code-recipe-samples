const fetchData = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("こんにちは"); // numberではないので型エラーになる
    }, 1000);
  });
};

fetchData();

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAZgUysAFgEQIZQzAvDACgEoAuGABQCcQBbASwgQB4wBXGgIwUoD48+A3gCgYMSklaUwMMAgDuFavUYEC4iCAA2ANwRF+MYaNGMoAFTo0EIVlFX7cgkcdHqtuggCJAygyBkhkDWDICGDID2DJ5EANwwAPRRMuxclIDmDMGAVgyAIgyAdgyJgNHqgBUMgJcMgD8M-imA0QzOogC+ADQwAIwADE0RzpUtleFCQojI6FgYxOFAA
