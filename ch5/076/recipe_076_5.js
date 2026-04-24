const originalObject = {
  name: "鈴木",
  address: { city: "Tokyo", zip: "123-4567" },
};
const clonedObject = structuredClone(originalObject);
clonedObject.address.city = "Osaka";

console.log(clonedObject.address.city); // 出力: Osaka
console.log(originalObject.address.city); // 出力: Tokyo
