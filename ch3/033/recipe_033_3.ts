interface Loggable {
  log(): void;
}

interface Serializable {
  serialize(): string;
}

interface ErrorReport extends Loggable, Serializable {
  errorCode: number;
  message: string;
}

const error: ErrorReport = {
  errorCode: 500,
  message: "内部エラーが発生しました",
  log: () => console.error("エラーが発生しました"),
  serialize: () =>
    JSON.stringify({ errorCode: 500, message: "内部エラーが発生しました" }),
};
