type MyFunction<T> = (arg: T) => T;

const myStringFunc: MyFunction<string> = (arg) => {
  return arg.toUpperCase();
};

const myNumberFunc: MyFunction<number> = (arg) => {
  return arg * 2;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsiBiBXAdgY2ASwPbIDwBUA+KAXigAoBDAJwHMAuKfASlOPwG4AoL1HAZ2BQAtiADKwahmS0kaRnDnpseQVJnEyVOqxLEA3lyhRqEYImrIoNWgDpgWAKphI1AMKV+Ecs24Bfbl4BIVEAOURhACMIaiUFBBRlHFxkCOjqTQobXQMjEzMLKxsoACooACZ-DiA
