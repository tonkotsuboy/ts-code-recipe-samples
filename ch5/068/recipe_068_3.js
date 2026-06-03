const emptyArray = [];
// エラーが発生
try {
  const result1 = emptyArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  console.log(result1);
} catch (error) {
  console.log(error instanceof Error ? error.message : error);
  // TypeError: Reduce of empty array with no initial value
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBApgWwA5QJ4EEBOmCGqYC8MA2gLoDcAUAPTUyAVDIJcMgPwyAyDIF5ug+K6VSb4DelGDFCRYmOBACuAGygBGQvGRosuVADoJAEynA4ACiHCYBnMGBSEsnFBCYANCKnY4YKADUcMqXACUhAB8MOaW1jK29jAA1M6u7l4+cA7GflTCohAgMnAaMiAA5gYS0nLyaZQAviK2wAAWpnDY9gGCGeBZOXmFBk2YUQCWYjhg+iAAZjAAos2YMAD88LMaCJIQOAVwMABcS-2YFcK0MAAqqEhwM-u7AEpwuvowE8oo+DjYeDAA7gNQDWAgGBDX4DbwwABu3l8VSAA
