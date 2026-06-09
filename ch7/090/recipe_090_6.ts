function convertNumber(value: any): void {
  value.toFixed(2);
}

// コンパイルエラーにならないが、ランタイムエラーとなる
convertNumber("鈴木");

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBBA3ApgJygORAWwCMsAKVAQwBsR0AuRcsATwEp7U4YATRAbwChEiCtXQA6KHABiMAB7ouJAEwsA3PwC+-fgHodiQM0MgZ4ZAiwyAShkDXDIAqGQJcMgH4ZA1gyArBkCRDE8AiDIBkGQIAMNo4H6GM0ADhls7QAsGJ0Bohn4UMAxsPCJSACJAFiTACnNktSA
