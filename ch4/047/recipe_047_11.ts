const lightYearInMeters = 9460730472580800n; // 光年をメートルで表した値
const lightYearToAndromeda = 2537000n; // アンドロメダ銀河までの距離（光年）
const distanceToAndromedaInMeters = lightYearInMeters * lightYearToAndromeda;
console.log(
  `アンドロメダ銀河までの距離は約${distanceToAndromedaInMeters}メートル`,
);
// アンドロメダ銀河までの距離は約24001873208937489600000メートル
