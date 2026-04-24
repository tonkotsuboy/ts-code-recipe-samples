// Recipe 098_5: ReturnType<typeof setTimeout> で環境差を吸収しつつ二重起動を防ぐ
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

// 動作確認: start してから別のタイミングで cancel を呼ぶ想定
start();
cancel();
