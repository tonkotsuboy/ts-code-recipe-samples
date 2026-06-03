type BaseUser = {
  id: number;
  name: string;
};

type AdminUser = BaseUser & {
  role: "admin";
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAQghgZwgVSQJygXigbwFBRQCWAJgFxQB2ArgLYBGEaA3AVXLRBQsGkZQHNWAX1Z5QkKAEEStfqiZZYiFOigAyXGzQB7ADZcoAIjiz+RkcyA
