const genericArrowFunc = <T>(arg: T): T => {
  return arg;
};

const resultString = genericArrowFunc<string>("test"); // "test"
const resultNumber = genericArrowFunc<number>(123); // 123

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBA5gUzAgTgS2AQRSkB3AMQFcxgYBeGAHgBUA+ACgEMU4AuGGgSg5orpgBvAFAwYKBFCIowMFnADcwgL5LhoSLAkQiAGygBlKOjBwK8JKgzZchEsCrQTcRgCIoCaK64KYAej8Yd08oV3VwaHFPPSgAOSIAWwAjVHNEZHQsHHxiUiowRJSURgBGACYAZh9-QPKKoA
