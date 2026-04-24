import { greet, farewell, PI, VERSION } from "./index";
greet("田中"); // こんにちは、田中さん!
console.log(PI); // 3.14
console.log(VERSION); // 1.0.0
// farewell は export された利用例として含めています（書籍本文では呼び出しを省略）
farewell("田中"); // さようなら、田中さん!
