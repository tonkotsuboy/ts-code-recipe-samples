const products = [
  { id: 101, name: "パソコン", price: 1000 },
  { id: 102, name: "マウス", price: 50 },
  { id: 103, name: "キーボード", price: 80 },
];

const product = products.find((product) => product.id === 102);
console.log(product);
// { id: 102, name: "マウス", price: 50 }

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBADgJxAEwK7ChGBeGBtAKBhgG8YBLZALhgEYAGWgGhjAEMBbAUxoCJBFhkC9DIGaGQM8MvFonLAedevJgBfJkVIVqcgEwt23PoD2GQGUMgToYJ8BNNkBWekpXEylGgwDMOzrN6BahkA-DIB2GH0BJhjMpGRoADltlAgBdAG4CAlBIWEQUdFhcNLQMCAA6ADNyMGQAClLsjIBKHAA+c3SMPMocbFwGTSqE5IgQABsuPL6QAHMKpByoLoIAehm1Jy13PRheI1NJCzCYGyUgA
