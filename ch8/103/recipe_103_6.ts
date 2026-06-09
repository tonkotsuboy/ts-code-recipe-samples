const fetchDataWithErrorHandling = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(42);
      } else {
        reject(new Error("データ取得に失敗しました"));
      }
    }, 1000);
  });
};

fetchDataWithErrorHandling()
  .then((data) => {
    console.log("取得したデータ:", data); // number型
  })
  .catch((error: unknown) => {
    // エラーがError型であるかを実行時に確認
    if (error instanceof Error) {
      console.error("エラー:", error.message);
    } else {
      console.error("未知のエラー:", error);
    }
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAZgUysAFgEQIZQwdQJZQoCiATiSCQBIZgAmANnmAOYwC8MAFAJQBcMABXIBbPBAQAeMAFdhAIwQkAfOxUBvAFAwYJJNJJgYYBAHdBIsQk6ddEEPQBuCADQ6EAKwTAo3VTE3a2uJQACp4wggg0lDWvmzqWoHaeHBcALJYKAB0JDS0IMI8MCoADFkArL4BSYG29k6cACwATNwA3IlJAL4wCPTi-p01up7enMZmpOQknABEgOMMgD8MgP0MgGvKgOn6gNYMgIyagOqmgOoMgH4M+4D6DLPc7UPaXUNdrgCMJU+X15ddHRqIyOhYuATEZAo1DojBYPESWUICDA1lovziCSSoEg9gQWXoIGYcw2pyWy14s1ccOw7RgAHoyUZZAoSIBo9USXW4EOAWFQ1kU0340jAAGswCATGAEYMkhSYIAKhkAlwyLQAyDFMKLTAOYMgCEGQDRDIBpBkASQyAfO1ADIRgCEzTaALo9ALFRQxSXA5FBgTGgNGAkVS8pIVSuMGRdnoaKtM1mUsWBNcPqyEQgEAwzAQL0CPT6A2qSPAnu9gN9gCpzQCn7oA7Bn9gd6qej1wZ7SAA
