const nameList = ["鈴木", "田中", "後藤"];
const result = nameList.map((name, index) => `${index + 1}位: ${name}`);
console.log(result); // ["1位: 鈴木", "2位: 田中", "3位: 後藤"]
