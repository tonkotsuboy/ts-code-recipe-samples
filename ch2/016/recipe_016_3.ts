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
