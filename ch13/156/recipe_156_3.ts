// 型エラーのデモ: デフォルトエクスポートは1モジュールに1つまで。
// tsgo --noEmit で TS2323 "Cannot redeclare exported variable 'default'."
// と TS2393 "Duplicate function implementation." を期待します。
export default function func1() {}
export default function func2() {}
// エラー: デフォルトエクスポートは1つのみ
