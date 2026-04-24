const originalObject = { a: { b: 2 } };
const copiedObject = { ...originalObject };

copiedObject.a.b = 42;
console.log(originalObject.a.b); // 42（元のオブジェクトも影響を受ける）
