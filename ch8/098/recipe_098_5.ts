let timerId: ReturnType<typeof setTimeout> | null = null;

const start = () => {
  if (timerId !== null) {
    return;
  }
  timerId = setTimeout(() => {
    console.log("処理が完了しました");
    timerId = null;
  }, 2000);
};

const cancel = () => {
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }
};

start();
cancel();
