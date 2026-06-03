function isNumber(value: number | string) {
  return typeof value === "number";
}

function main(value: number | string) {
  if (isNumber(value)) {
    // valueはnumber型に絞り込まれる
    value.toFixed(2);
  }
}

main(3.14);

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABDAzgORAWwEYFMBOAFAG4CGANiLgFyJhZ76IA+iKU+MYA5gJSIBvAFCJE+XFBD4kUAJ4AHXHGCIylXIgC82xACJ6OAroDcQgL5ChoSLASJMpLiQpVaBxizYcufQSOQqhKgYhkRqVLz8wqKiAPSxqi64gPYM7gSA0eqA1gyAer6AUQyAPfGAfgyAMQyA0Qz+ouG4AHRQcABiMAAeuAAmhABMvKaiFhZCDk4AzNUAjAAs3UA
