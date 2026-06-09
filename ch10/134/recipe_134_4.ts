declare function checkDoor<T extends string>(
  states: T[],
  initial: NoInfer<T>,
): T;

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzAAtwBrAERxxgB4AVeEADwxFWAGd52MYtUBzAHwAKAFDwuGKC3YAueLQDaAXQA04+HyzYoEeQDkcASVSIQNWoPUBKebQDcQA
