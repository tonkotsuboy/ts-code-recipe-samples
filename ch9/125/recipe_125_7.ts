type IsArrayStrict<T> = [T] extends [any[]] ? true : false;

type Y = IsArrayStrict<string | number[]>; // false
