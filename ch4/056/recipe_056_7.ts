const key1 = Symbol();
const key2 = Symbol();
// エラー: Type 'typeof key2' is not assignable to type 'typeof key1'.
// @ts-expect-error ts(2322)
const sameKey: typeof key1 = key2;
console.log(sameKey);
