function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwKZQAoCc4AdVZQCeAPACoA0iA0oqgB5SpgAmAzogNapFzCJkAfAAo4AIwBWALgFVuRGdQCUMsgG1qAXUQBvAFCJEWdCCxJxEtfM0BuPQF8gA
