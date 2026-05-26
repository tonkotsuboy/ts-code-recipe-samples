const controller = new AbortController();

const promise = new Promise<void>((resolve, reject) => {
  const timerId = setTimeout(() => {
    console.log("10秒後に成功しました");
    resolve();
  }, 10_000);

  controller.signal.addEventListener(
    "abort",
    () => {
      clearTimeout(timerId);
      reject(new DOMException("キャンセルされました", "AbortError"));
    },
    { once: true },
  );
});

promise.catch((error) => {
  console.log("理由:", error.name);
});

setTimeout(() => {
  controller.abort();
}, 1500);
