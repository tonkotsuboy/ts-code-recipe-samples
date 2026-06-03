function fetchData(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42); // 非同期で値を返す
    }, 1000);
  });
}

async function processData() {
  const data = await fetchData(); // Promiseの解決を待つ
  console.log("取得したデータ:", data); // dataはnumber型
}

processData();

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABMAplCALAIgQyjgCgEoAuRABQCc4BbGAZxQB4wQaAjFSgPkQG8AUIkSU0ISkjAoA7hWp1GBAqPpwANgDcURRAF5eg4cMZQAKjBoo4IKEp37+Qo8JXqtBACwAmIgG5EAPQBiIB66YAwKoD45oDmDIAkCoBJDIAr8YCaDE7CAL4ANIgAjAAM+X5OaYVpAgI49ACekMjg0PBIAA7UECj09Lj4xI7CEAj0UIgAJng4eog40jgwg6jo2KPE-kFytAwogHYMgMeRgF42cYCh+oAmDE59YKpqKAB0anAA5gQARIBryoDp+oDqDID6DIDjDIA-DID9DCQHlkRvg-IFgiCcIB7BlYHC4gGj1ASlATNOCtdqdQh+IA
