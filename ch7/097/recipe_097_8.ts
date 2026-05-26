type User = {
  name: string;
};
const dataList: ReadonlyArray<User>
  = [{ name: "田中" }, { name: "鈴木" }];
dataList[0] = { name: "山田" }; // エラー
dataList[0].name = "山田"; // OK
