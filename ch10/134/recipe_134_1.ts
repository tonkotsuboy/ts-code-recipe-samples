declare function checkDoor<T extends string>(states: T[], initial: T): T;

const result = checkDoor(["open", "close"], "open"); // OK
console.log(result);
