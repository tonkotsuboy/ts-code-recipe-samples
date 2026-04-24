type IsNumber<T> = T extends number ? true : false;

type C = IsNumber<123>; // true
