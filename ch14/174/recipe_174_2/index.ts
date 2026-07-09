const foods: string[] = ["カレー", "うどん"];
console.log(foods[0]?.at(0)); // 「カ」が出力される
console.log(foods[1]?.at(0)); // 「う」が出力される
console.log(foods[2]?.at(0)); // undefinedが出力される

// ブラウザ上で編集できます
//https://www.typescriptlang.org/play/?noUncheckedIndexedAccess=true&target=99&ts=6.0.3#code/MYewdgzgLgBAZiEATCAuG0BOBLMBzAbQF0YBeGAgIkGqGQG4ZAfhkoBoZLAxBkEsGQZIZKiBuAFChIIADYBTAHSiQeABQJkEAgAYiAfkkBDKHJUBKfXxgB6EzEAwDNUCwDIBkGQF+KgbKVAqgyAYhkDRDEPAQxUmfMUUAgBGDW1dAyNTcws2Oyc3T2EfCWlZBUQggCYwnT1DYzMYAFcwJHE4XHEkBxcPASA