const intervalId = setInterval(() => {
  console.log("現在時刻：" + new Date().toLocaleTimeString());
}, 1000);

// 5秒後に繰り返し処理を停止
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
