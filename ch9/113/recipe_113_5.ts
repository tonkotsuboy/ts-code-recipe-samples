function isNumber(value: number | string): value is number {
  // valueを文字列だと判定しているが、エラーにならない
  return typeof value === "string";
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABDAzgORAWwEYFMBOAFAG4CGANiLgFyJhZ76IA+iKU+MYA5gJS1lKuZCjoMCiAN4AoRIgD08xIKqAkhkDhpoHVtQOhKgAwZAFgyASJUBZ2oHUGQGYMgEQZA0QyAZBkCADIAqGQJcMgH4ZA1gyArBkCRDJ8uzEfFwoEHwkKABPAAdcOGBlCipEAF5UxAAidk4edIBuaQBfIA
