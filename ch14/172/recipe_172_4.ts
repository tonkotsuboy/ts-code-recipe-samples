function getStatusMessage(code: number): string {
  switch (code) {
    case 200: // returnがないためフォールスルーエラー（404のケースへ流れてしまう）
    case 404:
      return "Not Found";
    default:
      return "Unknown";
  }
}
