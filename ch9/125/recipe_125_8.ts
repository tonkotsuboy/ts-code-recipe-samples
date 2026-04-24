type IsArrayStrict<T> = [T] extends [any[]] ? true : false;

type Z = IsArrayStrict<number[]>; // true
