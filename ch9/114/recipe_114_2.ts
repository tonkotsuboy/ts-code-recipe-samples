function assertTruthy(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function getFirst<T>(values: readonly T[]) {
  assertTruthy(values.length > 0, "配列が空です");
  // ここではvalues.length > 0が真であることが保証される
  return values[0];
}

console.log(getFirst([1, 2, 3])); // 1

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAQwM6oKYCcoBUshQAWAngBQBQiiECAJjLAgFyLgDWYcA7mADRVEAWwzpkAcwytUULDDDiBASlZpMOVDXqN4SAN6CYwRGQCEtMAyZgliA9WrEsPRGAzdEAUSzOsZEWKSSgDcggC+FBEUoJDWiJJQAGIwWDIAPLgAfGQAbsgANiCirFgYyHQI+SSIuADaALq29ijo2HgExOR5haIAdPkYCsSImYgADHyIAESAsomA6EqAMgyAXl6A5gyAmgxTIYIA9NuIgMoM+yuA9gzdRaj9g+LDo2MLgPjuK4BCDIDRDPuAFgwLgLvygDxRgKoMgBiGF6CUpQEBYJBnUS1Mb1UJRCyoOADfpwcRkBLJVJQMi1ACMkwATJMAMyNEKIXaIPFAA
