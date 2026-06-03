function handleError(error) {
  if (error instanceof TypeError) {
    console.log("型に関するエラーです:", error.message);
    // 型エラー専用の処理
  } else if (error instanceof ReferenceError) {
    console.log("参照に関するエラーです:", error.message);
    // 参照エラー専用の処理
  } else if (error instanceof RangeError) {
    console.log("範囲に関するエラーです:", error.message);
    // 範囲エラー専用の処理
  } else {
    console.log("その他のエラーです:", error);
    // 一般的なエラー処理
  }
}

try {
  // エラーが発生する可能性のあるコード
  const obj = null;
  obj.method();
} catch (error) {
  handleError(error);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/GYVwdgxgLglg9mABACwIZgCYBsCmBRAJwLgIAociSBKRAbwChFEZhFzKDmwBnKdCHHFYAVAJ4AHfBxoMmTCAm5xcAOixwA5qQBEgaPVA1gyAi1MCaDIGiGQBUMgS4ZAPwyBzBmMAubQBpEFYgRUBbHN26oNHCoAbkY5AHpwxF0ra0AgHUAKV0A7BkAzxUAwFzCAXzcsbhxmVnYPLl5+QVYAJRxgChxIKQ8ZMPlFZRw1TR1AIeVAc0cjM1j7J1d3Em9ff0CQ5sRIxF7YxNSMpmycXPyWNlHOGB4+eqFECvRAwka6GYUeNo6tbUAR70AntX6LGyGXNw5xvwCg0Lksyiz0WyXSWRyeUugOuSlU6nugF0GJKANbkkoNHJ8dtNAXNAABygBogwAhboArBli4NW9Ey9HoUAIomhQMQsUAMgyALzdAPiuZkA98qAX4DAOQGSUAQgymQDNDNZAJMMYVhUEQcAARgArRAAXkQYBAWCwALlSvGUGQcAwpGm2QgqCgEGQ22kjLQmFw5xIRWooUyQA
