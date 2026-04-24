function getFirstFruit(fruits: string[] | undefined) {
  return fruits?.[0];
}
console.log(getFirstFruit(["りんご", "バナナ"])); // "りんご"
console.log(getFirstFruit(undefined)); // undefined
