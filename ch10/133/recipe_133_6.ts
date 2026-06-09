function greetOptional(name: string, age?: number): string {
  if (age !== undefined) {
    return `こんにちは、${name}! あなたは${age}歳です。`;
  } else {
    return `こんにちは、${name}!`;
  }
}

type GreetOptionalParameters = Parameters<typeof greetOptional>;
// [string, number | undefined] が抽出される

const args: GreetOptionalParameters = ["鈴木", 30];
console.log(greetOptional(...args));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwE4FN1QPIAdYICGANgBRiEC26AXIgM5SoxjIA0ihy6A-HWCEoAjdKgCUdRs1aIA3gChEiGMESku6RAEIAvDsTgAJumAt0hsXMVLEGKCFRIABoGUGQMkMgawZAhgyB7BkCADAAkshTUAL5aiIBCDIBWDID6DD5BGqGAztaA5gyAmgyAQAxOANzWoYjoxPSaCja2WA7O7t7+QSHo4bn58qHy8lAAnriaAOIYWHgEFMQACoSoVFii9Ij645PUUDMAPF09cKpomDj48CMAfHkA9MeIANpSLOyIAsKiiAA+BmDGpmDmALqIgDIMgL1GgC-FQCqDIAYhkA0QztCAIRicVDIeh0fo7Ib7EgLKbLVCzfTnABEgBYkwAU5riOABmAAMnzyULA9DgxHQADpiHBkKRtoM9kQyIzeRN4WIxDkgA
