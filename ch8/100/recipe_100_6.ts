fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  console.log(
    "レスポンスのヘッダー情報:",
    response.headers.get("Content-Type"),
  );
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYUwLgxgFgFARFMYAOBnAXAekwK1QewDtkAbAQwhCnxIBMQAnAOjAE9kBLCfep7gW0zJ8qMKkwBGOAEoWUEIRgwGIVMMKoQ0gAQBeAHzaA3gCht27hpogmJfAHMYZ89riAbhkCdDIF2GQM8MHwHYMgBsMgMMMgAMMgD8MgKMGgIwa6HAANM7mKmpEmkzyZPQMqEz24PAAwkRgCmAAtAAq7CAyiebSANwmAL5NQA
