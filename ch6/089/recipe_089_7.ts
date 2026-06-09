// Generator<yield型, return型, next型>
function* typedGenerator(): Generator<string, void, unknown> {
  yield "1番目の値";
  yield "2番目の値";
  yield "3番目の値";
}

for (const v of typedGenerator()) {
  console.log(v);
}
// 1番目の値
// 2番目の値
// 3番目の値

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEHEFMDtIJwIYBcD2cA8BPAlpANgCaDR6gDShyRICuc0posAHkkQHwBQAZldAMZLYU0AFSgkmAA6QCUWIlRwAFAEoAXBBjxkadAGckcbNADmZAG4psBMjwDW0FAHdorUAG92oUDnwFQAIgBGQCtXQDu3QDsGQBIFfwBuT29cQgCAJjCo2PifJP8AZjTouIBfdi40UEVeIX1QM1AUTjFJaVktBRVld3jK6F0UPEgAOjwUY0UzZSL2EFAQiMipsFS5hdA8uaA
