type Foo = {
  foo: string;
};

type Bar = {
  bar: string;
};

const myFunction = (arg: Foo | Bar): void => {
  if ("foo" in arg) {
    console.log(arg.foo); // argはFoo型
  } else {
    console.log(arg.bar); // argはBar型
  }
};
myFunction({ foo: "myFoo" }); // 「myFoo」と出力される
myFunction({ bar: "myBar" }); // 「myBar」と出力される
