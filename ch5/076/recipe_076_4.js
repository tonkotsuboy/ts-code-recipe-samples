const originalObject = {
  name: "鈴木",
  address: { city: "Tokyo", zip: "123-4567" },
};
const clonedObject = structuredClone(originalObject);
console.log(clonedObject);
// 出力: { name: "鈴木", address: { city: "Tokyo", zip: "123-4567" } }
