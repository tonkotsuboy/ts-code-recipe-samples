type OnlyString<T> = T extends string ? T : never;

type C = OnlyString<number>; // never

const c: C = 10;
// Error: Type '10' is not assignable to type 'never'.

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBA8gdgGxAZWAJwJZwOYB4AqAfFALxT5QQAewEcAJgM5SPpbZQD85UAXFHAgA3CGgDcAKAmhIUAMKlYiFGxy44AVwC2AI1GExUAPRGBw0VIDGAezisol-grIBGAAySTUAKJo01tH58cGgAcndQqAxmOGtgKABDRkYMbDgEnQRoYGsoGTDBETRQgDogA
