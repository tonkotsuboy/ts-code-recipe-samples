// 意図的な型エラーデモ: EventName型に合わない文字列は代入できない (期待エラー: TS2322)
type EventName = `第${number}回${string}イベント`;
const event1: EventName = "第10回TypeScriptイベント"; // OK
const event2: EventName = "第5回JavaScriptイベント"; // OK
const event3: EventName = "TypeScriptイベント"; // NG: 回数がない
const event4: EventName = "第3回"; // NG: 末尾のイベントが欠けている
