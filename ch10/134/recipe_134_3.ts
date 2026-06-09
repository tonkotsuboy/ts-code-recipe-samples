declare function checkDoor<T extends string>(states: T[], initial: T): T;

checkDoor(["open", "close"], "locked"); // エラーにならない

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzAAtwBrAERxxgB4AVeEADwxFWAGd52MYtUBzAHwAKblBbsAXPFoBtALoAaeHyzYoEabQCUWgNwAoA0VIUqw2QCIcAB1aXllyDnYhLS+JYg4wJEMEttPXgAehD4QAqGQEuGQB+GQGsGQCsGQEiGBMARBiA
