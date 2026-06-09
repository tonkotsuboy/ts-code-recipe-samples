class BaseConfig {
  static endpoint = "https://api.example.com";
}

class DevConfig extends BaseConfig {}

class TestConfig extends BaseConfig {
  static endpoint = "http://localhost:3000";
}

console.log(DevConfig.endpoint); // 出力: https://api.example.com
console.log(TestConfig.endpoint); // 出力: http://localhost:3000

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEBCkFMDCB7AdgMwJYHNoG8AoaaCAFzDK2GgTQBMAHFLNM6AXmgCIALMsowgAuAPSiwjLADoEADzABbRiATTgKRdwDchAL6FCoSDAAiCAG6pMuWnLJ16MeBGTpsefAaPgo0ACoI5NYedg4MzoghtkQk5JTUtAzMrOxcfAKMYqIgKMBgILwo5MIAzAAMlTr6hhpoECiq0rk4ABTmVu64ssksbACU2tDi0IBfioDZSsLQ-IIi4pIy8koqahqKRugNTS2tgcFdOD1MfWSDw6Jjk9OZ2bn5hcVkZZXlQA
