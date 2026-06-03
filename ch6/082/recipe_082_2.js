const person = {
  name: "太郎",
  greet() {
    setTimeout(function () {
      console.log(`こんにちは、${this.name}さん`);
      // thisはpersonを指さない
    }, 1000);
  },
};

person.greet();
// 1秒後に、「こんにちは、さん」と出力される

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBADgUwE4XDAvDA3gKBjMAQwFsEAuGAIkCpNQOYTKAaPGAcyQQSgAoBKbZ-BE4AVAJakQAV24AzSWGBRRaXv3zqYoSCAA2CAHQ6QLLgANAygyBkhkDWDIEMGQPYMgQAYAJFigALURH1FSAX0BVBktTHgBuAXUAekiYDy97RBRwQCSGQHBjAMArBkARBgi-BhgARgAGErDmPJw-cJxE1DB9Ng5uMujCwCXPQBj9a0dAGAYrOycgwFgGQAsGQC-FQGylAMAYhkBohiA
