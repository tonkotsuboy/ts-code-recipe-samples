const result = [12, null, 24, undefined, 48].filter(
  (value) => value != null,
);
// resultはnumber[]に推論される
console.log(result); // [12, 24, 48]
