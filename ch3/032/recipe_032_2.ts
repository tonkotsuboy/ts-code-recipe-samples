interface AddFunc {
  (num1: number, num2: number): number;
}

const addFunc: AddFunc = (num1, num2) => {
  return num1 + num2;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/JYOwLgpgTgZghgYwgAgIIBN0DECuIHIDeAUMsgBQg4C2AjAFzJXUBG0ANEzQEyPNtQAlHxoCA3MQC+xYggD2IAM5hkcTLnyMM2PAQC8FZrU7Nug5HoB8RUsigQwOKCC51kAalfcJksUA
