class MyClass {
  #hello() {
    console.log("こんにちは");
  }
}

const myClass = new MyClass();
myClass.#hello();
// エラー: Property '#hello' is not accessible outside class
// 'MyClass' because it has a private identifier.

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIAWApiCAPYAUAlOlttMCQHYQkgEB0pA5mQESDKDIGSGQNYMgQwZA9gw8KAbhoBfDPIz0mAF2gBbJChgBeaAwIB3OFsgRKMzcjNt8RUhYwB6J9EAVDIEuGQD8MALmgAFACcSAAcCQJV4aAByO2ISaOgASxgGEjUwYGACKCSAI1ZoEgBXFQgkgBMCOm1nV2iEayhEvIJgMGKIaqS1PEhoMGgQwKSANzAVbqqGFSSAMyTwtiA
