const genericArrowFunc = <T>(arg: T): T => {
  return arg;
};

const resultString = genericArrowFunc<string>("test"); // "test"
const resultNumber = genericArrowFunc<number>(123); // 123
