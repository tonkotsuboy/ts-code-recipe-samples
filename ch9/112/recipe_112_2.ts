type A = {
  type: "a-type";
  foo: string;
};

type B = {
  type: "b-type";
  bar: string;
};

function myFunction(arg: A | B): void {
  if (arg.type === "a-type") {
    console.log(arg.foo); // argはA型
  } else {
    console.log(arg.bar); // argはB型
  }
}

myFunction({ type: "a-type", foo: "myFoo" }); // 「myFoo」と出力される
myFunction({ type: "b-type", bar: "myBar" }); // 「myBar」と出力される
