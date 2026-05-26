export function formatMessage(message: string): string {
  return `[Utils] ${message}`;
}

export function getCurrentTime(): string {
  return new Date().toLocaleTimeString();
}

export const version = "1.0.0";

export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
