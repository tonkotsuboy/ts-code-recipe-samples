type EventName = `第${number}回${string}イベント`;
const event1: EventName = "第10回TypeScriptイベント"; // OK
const event2: EventName = "第5回JavaScriptイベント"; // OK
const event3: EventName = "TypeScriptイベント"; // NG: 回数がない
const event4: EventName = "第3回"; // NG: 末尾のイベントが欠けている

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAogbhAdsAcgQwLbQLxQAaA03gCQDeiArhgEYQBOAvoHtqpAzsLQJaIDm9gJQyBNhkDPDIAmGPAG4AUAGMA9ojZQICZAEYAXLBWpMOKACICqgAyMAKuAgBlaZzDBBo-eKgB6V1ADyAaRnzFykjAAEya8EHoWFC4hgCsjABSaHBoNnYOwiLObh4+fgrAStoAzGHakXr6FpBpHPaOWS7uUCgA4pqMgA6mgDIMgFYMgCIM+QHaACxlEbrRBgTFjNnNbZqA1OaAfDqAdgwN3YAE1oCKDIBmDP2A0QxAA
