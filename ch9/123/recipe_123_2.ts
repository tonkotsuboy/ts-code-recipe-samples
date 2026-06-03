function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type User = {
  id: number;
  name: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "鈴木",
  age: 30,
};

const userName: string = getProperty(user, "name");
console.log(userName); // "鈴木"

const userAge: number = getProperty(user, "age");
console.log(userAge); // 30

// エラー: Argument of type '"zip"' is not assignable to parameter
// of type 'keyof User'.
const userZip = getProperty(user, "zip");

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwKZQAoCc4AdVZQCeAPACoA0iA0oqgB5SpgAmAzogNapFzCJkAfAAo4AIwBWALgFVuRGdQCUMsgG1qAXUQBvAFCJEWdCCxJxEtfM0BuPQF89e4vkQBVNgUQBeXQcQwLDJgIAC2YgR2hmAAhqGoMmxQWDBgyFGIMWjBYRFYdvZ2ehAISYggnlgyHl6++oaBMgCMFP6x8TIARIAsSYAU5p2thlkJiADMAAythU4lYGUVBABycSNJKWk+KOjYeATEwgtYVJ3tqJ1KdrNscAA2qAB0N3DIB5XL8ReIAPRfiD39M1KUHKlQAgtlECFwrUtpgcPhCERXgRjsNzpdSrcHk8XodwahPj8xuMnETABUMgEuGQA-DDJQVhkGFmMC+IgXKhEAByToALxguE6HICHDAcGBMTYbBgyFiYjurLgiFwMSwKyYWD0RJZbM58hZNSwHPuxSBIIIAC0+Zs0HDdojkUc-rz+RcgA
