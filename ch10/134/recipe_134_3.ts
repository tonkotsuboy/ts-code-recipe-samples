declare function checkDoor<T extends string>(states: T[], initial: T): T;

checkDoor(["open", "close"], "locked"); // エラーにならない
