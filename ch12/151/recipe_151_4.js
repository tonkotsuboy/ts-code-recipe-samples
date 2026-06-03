class MyClass {
  #myBrand;

  static isMyClass(object) {
    try {
      object.#myBrand;
      return true;
    } catch {
      return false;
    }
  }
}

const myInstance = new MyClass();
console.log(MyClass.isMyClass(myInstance)); // true

const foo = {
  name: "鈴木",
};

// ポイント
Object.setPrototypeOf(foo, myInstance);
console.log(MyClass.isMyClass(foo)); // false

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIC28AQgE5gB2AJgNwZbQQAuYDAlsNCxAspBABQB7AEYArAKbAGASnR1sDYvFnYV0YeMkA6fEVKUaq7MTEMArsTLQFpsQZUBfaMGbAAFssPGzF6ADMwIBC2ctD2dGFhGMACZIzQBACSsUxkwGLQALzQZGIA7nBIKPxSNNGxAiBimiACAOZ83EWanI28fInJ5GlSJdAA9H1WxDa0ZXG+AgKZHmRgeGIAXNAARIAsSYAU5ssANBj2NBgD0IC7DIAlDIDPDIATDBgA8qISDJpBDAAKxAIM7-AADmLXvnwTARbeLwJKMLpiEpRGIQCpVGr1VpQZpcQptQE9Kj9Qb+QJiIA
