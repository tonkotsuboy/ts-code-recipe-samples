function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: unknown, y: unknown) {
  if (typeof x === "string" && typeof y === "string") {
    return `${x}, ${y}`;
  } else if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  throw new Error("不正な引数です");
}

const result3 = add(10, "Hello"); // 型エラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAQwCaoBQA8BciwgC2ARgKYBOANIgJ54EkUCU9RZ5A3AFCiSwIp02PAGco5GGADm1OojETpLeeMlTuvaPCRpMuROADWYOAHcwsvEZPmmiAN5dEiGMEQYoNAA6k4brIgAvMGIAEQKaqGIAGTRiJ4+frRBIeGq0qF2js7O5KRQIORIAAYAJPZYAL7U5TSVxdzOlYikADYipC5uHt6+-imBYQzsUbHxvUk0A0NsFJkOTjl5BUWIAQDUtI2IlYtQABbkZvikpogAouRH5BihgLBygMbWgFYMgKj6gA6mgOYMgJoMmdy7XBAEGJEHkRCBWlAAMxBQSYACMAAZqKEABJtVpwX6IAD02MQgGj1QAVDIBLhkAPwxAA
