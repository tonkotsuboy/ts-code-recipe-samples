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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBKZQE4gDYoKaJgXhmdA7jAIIBGIiUAwuEqhogBQCUA3AFDvzQwAOyAWwCWEdDjyEYABUEj0AHgBuIIQBMAfI0aJ0EVIvQAaGDoBW6YFGY51MAN7sYccDyhCBmAJKrxoqABV3dBAAVygta2xbBycnblR0ADoUEABzRgAiAEYABkAlz0AY-UBrBkAEI0B8pUB1BkA-BgrAfQYMtkdYnT0UAxYOJwBfY1yAfRzBxqb4OjRMRIghVLAAQxRE2dVVAFEDBAAZESh0fCYmpwzZ8koMwwOYFht7C7iMWcRAj1Dwtw9Eb0bY5vRzS0Z8EQACIAeQAsisAB7AdC8NzgTKAWoZAMcMgGeGQDdDIBrhkAqgyAGIYavVjBkyBQoCtEMhEA0vrEehc7DBwDCAFwwJAhMR0pyNLrDfggYSiRLAWZQYAACy0mEpkWiIxcCWSaUygDAXQCMrsyzjBpRREnMPDzhn4nsEwhFrjFnAhkONEIsTuEeb0AKxDVhAA
