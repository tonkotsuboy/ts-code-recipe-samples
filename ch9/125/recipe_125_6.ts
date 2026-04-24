type IsArray<T> = T extends any[] ? true : false;

type X = IsArray<string | number[]>; // false | true
