declare function checkDoor<T extends string>(
  states: T[],
  initial: NoInfer<T>,
): T;
