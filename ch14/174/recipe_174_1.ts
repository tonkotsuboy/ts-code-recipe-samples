const foods: string[] = ["カレー", "うどん"];
console.log(foods[0].at(0)); // 「カ」が出力される
console.log(foods[1].at(0)); // 「う」が出力される
console.log(foods[2].at(0)); // ランタイムエラーが発生する
