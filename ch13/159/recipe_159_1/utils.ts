export function formatMessage(message: string): string {
  return `[動的読み込み] ${message}`;
}

export function getCurrentTime(): string {
  return new Date().toLocaleTimeString();
}
