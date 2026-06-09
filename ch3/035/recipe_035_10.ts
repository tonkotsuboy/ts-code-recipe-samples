class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

const myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "";
myGenericString.add = function (x, y) {
  return x + y;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEDiCmA7eAnAlsAcgVwLYCNUAeAFQD5oBvAKGmgC9UB7ANTBG3gC5oSBuWtDAATYTwAUADx4kANNACeMgJTQAvBX7VBwJoggAXFNmAGmKcYxSt2nGfJFjoU+4pXrNqmnToGAFmgQAHRWNhzw6gzMbOECPtD+gUGOkY5x0AC+1FnUuvoG0LgKCMjoWHiEKJHIAO5wSKgYOATEiBWoZOLKAkUljeUtKCHRthFq0AAMPcUNZc2VyaKRAGbYiKZoes6S8gpegijwBtgoiNCS0ADUigIZArl6hoUzpRgAykZoiADm1fB1fTm7RQREM6B+nW61F6s3enx+w2sMU4kQARKjpoC4eDvothCs1hstlJdvs6Idjqdzlcbtk+EA
