type User = {
  name: string;
};
const dataList: ReadonlyArray<User>
  = [{ name: "田中" }, { name: "鈴木" }];
dataList[0] = { name: "山田" }; // エラー
dataList[0].name = "山田"; // OK

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBuTAX0YGMB7XCqAE32HwAZKhTIAlCPh6cANiACCiRPhAAeeEgB82VFADa6PEVJQARIAZXQLRypqEwA0GI8TKnALEmAKcxtMAuoz4DhCj0ABm9dQwJnM0BHHXMveigAekSoQAqGQEuGQB+GTH8hEWAQ7wA6SOg0U1jTBOSoAHkAaSA
