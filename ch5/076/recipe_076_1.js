const originalObject = {
  name: "鈴木",
  address: { city: "Tokyo", zip: "123-4567" },
};

// シャローコピー
const shallowCopy = { ...originalObject };
shallowCopy.address.city = "Osaka";

console.log(shallowCopy.address.city); // 出力: Osaka
console.log(originalObject.address.city);
// 出力: Osaka（元のデータも変更される）
