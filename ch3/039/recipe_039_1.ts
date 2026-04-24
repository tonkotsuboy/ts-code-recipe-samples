function myFunction<T>(arg: T): T {
  return arg;
}

myFunction<string>("鈴木"); // "鈴木"
myFunction<number>(200); // 200
