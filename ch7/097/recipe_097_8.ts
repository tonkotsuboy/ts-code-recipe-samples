// 意図的な型エラーデモ: ReadonlyArray要素の再代入はエラー、ネスト内プロパティは書き換え可能 (期待エラー: TS2542)
type User = {
  name: string;
};
const dataList: ReadonlyArray<User>
  = [{ name: "田中" }, { name: "鈴木" }];
dataList[0] = { name: "山田" }; // エラー
dataList[0].name = "山田"; // OK
