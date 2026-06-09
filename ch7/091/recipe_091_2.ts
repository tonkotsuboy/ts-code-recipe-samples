try {
  // 何らかの処理を試みる
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("不明なエラーが発生しました");
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4JwngBA3gUBEHoEUKryhIhkNIMg7BkGeKgwF0CSGQMyjB-BkGiGGAXwgGMBDYGgCwgAoBTEEAexAC4IAVwB2Aa2HcA7sICU0OBACWAMzaceIJcIDOwOsJrtuqgKJdec2PHg1uO7gBt2AOgfcA5h3MhnAW3ba2nTu7DIA3ArU7A7a7PLWtHbaji5ungBEgLBygHBmgFYMgBUMgJcMgD8MgDIMgF5ugPiugOoMgH4M1YD6DOnhkVRAA
