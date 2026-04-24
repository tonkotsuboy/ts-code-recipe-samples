// Recipe 098_3: setInterval で一定間隔ごとに繰り返し実行する
setInterval(() => {
  console.log("現在時刻：" + new Date().toLocaleTimeString());
}, 1000);
