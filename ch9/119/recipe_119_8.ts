type ValueOf<T> = T extends { [key: string]: infer V } ? V : never;

type User = { name: string; age: number };
type UserValues = ValueOf<User>; // string | number

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAaghgGwK4QPIDMA8AVAfFAXimyggA9gIA7AEwGcoBvKAbQGsIQAuKO4AJwCWVAOYBdHsPQR+sKAF8oAfjk8qEAG4yA3AChdoSFACqdGYSZQqcALYQefIaO1Q4I+1aQ2ARufl7DaFMZeGQIBiJQlAxMYP5cFwB6RN4BYREoAB9PHxkgA
