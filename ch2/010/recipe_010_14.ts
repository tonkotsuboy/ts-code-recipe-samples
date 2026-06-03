const fruits = ["りんご", "バナナ"] as const;
// fruits.push("みかん"); // エラー：配列の変更はできない
// fruits[0] = "ぶどう"; // エラー：要素の変更はできない

const settings = { theme: "dark" } as const;
// settings.theme = "light"; // エラー：プロパティの変更はできない

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBAZgJwK4EsoRgXhgbQESBRDIMkMgKgx4A0MegCwyBTDLXgLowCGGokUA3AFAD0feMjQQAdAAckEABYAKPIH8GQNIMRPAEouMATEAVDIEuGQD8MgLH-AsomB0JUB2DIEhNQC9mgewZA5gyBZBkBWDIBEGfoMSp0OAAzM2HiAbgyAlgyAYgx4mtr6xoCBkYAEvtb2zu48PBzQMBAAplBQKGAA5hjYAN4wUNI5ALY5AFxUACYsCADWeDAAvqzs4NC82rn5hSWiVbU5WFQANihF0lBRWoKxRoDrDIC3DICLDIBjDIDFDMmOrm5AA
