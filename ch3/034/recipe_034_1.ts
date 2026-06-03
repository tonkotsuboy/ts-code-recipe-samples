// プリミティブ型の別名
type Text = string;

// オブジェクトの型
type User = {
  name: string;
  age: number;
};

// ユニオン型
type InputValue = string | number;

// 交差型
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

// タプル型
type Point = [number, number];

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEnWGQrhkfYZDGGRihkGsMho9UHYMhSJULAqAoALgTwAcBTUAFWIA9dQBeUAZ1wCcBLAOwHMBubbEUICqGRIA6GQOUMgeoZAEwypkeIqQCqDYszqgA3tlCh2AQwC2xAFyMWHHttB7OJ3QFcDAI1W8Avr35hAZwyBphkGAzwxyBCSgAJLshPa4AGp6ADb2pPRMbFygAD4Ozq58AoAlcoB3usEKoAASegwAcobJmrq1pqkWoB7yoRUMAIK26hrWtqbsji5qbSGkAAqqDAD27OqdNUagAGTllT3EngKA-QzggNcMJaGTsxw09ADawznMADTZowC63EA
