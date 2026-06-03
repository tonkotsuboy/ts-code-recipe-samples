try {
  try {
    // なにかしらのエラーが発生する
    throw new Error("元のエラー");
  } catch (error) {
    throw new Error("エラーの内容", { cause: error });
  }
} catch (error) {
  console.error(error);
  if (error instanceof Error && error.cause instanceof Error) {
    console.error("原因:", error.cause.message);
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4JwngBA3gUBGkre8D0qKCsGQ1gyGkGQ6gyCRDIHYMgFQyCXDID8MgMgyBeboPiugmgyDRDHCsABYgD2A7hADsApvwCiIHiAAUAIkDCimSoyAlAG42AXwgBjAIbBtHCFKETuIZdDbxOPfsLFnpMipWKBQxUCd2jIA00HboArgDOQgBcEKaSEBpqmjBaegZGJk6WyDrcAsHcADZCAHRR5qmScfAAlgBmxsUgEBXZwLoC2kLcNeLRAGTdkU4FeiFCDU0tbR0QXebp1pnZeYV1soD5yoAHamG+-ZKDQaEFALZCwcG6AOZC5TEJQA
