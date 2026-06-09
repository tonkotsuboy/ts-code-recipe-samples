const getWorkdayMessage = (day: number): string => {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
      return "平日のお仕事がんばりましょう";
    case 5:
      return "今週もお疲れさまでした";
    default:
      return "週末はリラックスしましょう";
  }
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBA5gUygdRAJwNYBMCGBPAWQQgh0RgF4YAKXPALhjAFcBbAIwTQEpHo0AlmDiUAfDADeAKBgwIAdwFRgACxp1ukmbJjAcEBDACM9bbL0GYAJlM7d+wwGZbOi4YAsLu2iTM0YGAAiQGc9QFPTQDsGQCkGQFW5QGi5QBkGQGSGQAcGQCiGQD8GQHUGQHCGQDEGQIBuM3tLAFYvHR8oPwDAwCm5QEYEwCCGSMAm10AYhkBVBnTAcwZMwH0GQuKsBAAzHGYAGygK2SqaoIbAanNAewZAK4ZAS4ZAYYZAeoZAToZMrLyh2QBfKVOCoA
