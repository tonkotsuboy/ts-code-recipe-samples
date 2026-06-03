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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/DYUwLgBGCWC2ICcCSATAXBASuArggdgCoCeADiADxhkgD2AZhAM7iFx05gB8EAPhPhzBgEALwChwANwAoGQGNa+JpBUBDBJHEAKAJRieAbxkQI0RtpjxkKCAEJR4wcP3HTphLgKzTAXxNQ7DZizKzstJzaegYQbu6KyrSgAHTAtADm2gBEgGeKgGAugDIMgDHagGFygOoMgH4MZYD6DFm6Pu5WiKghztIBvgA0EABMAAwD9TK+sgpKKhDyavjyICI6+qJGAeYQlkEtDk6SrgGm8qAabPARYOvWqEPugRe228IN-iNy6pp6slMzc+9AA
