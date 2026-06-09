class Human {
  constructor(name: string, age: number) {
    // コンストラクターの処理
    console.log(name, age);
  }
}

type HumanParams = ConstructorParameters<typeof Human>;

const params: HumanParams = ["鈴木", 30];
new Human(...params);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEASCuBbMA7aBvAUNawD2KEALgE7zBF4kAUKYiApgFzTEkCWKA5gDTRhdm0FEgBGDEgEoM2HNAD086IGaGQM8MgToZAEwyBLhkD1DIH6GQD8MgOwZAZ4qAwF1k58hPCAYA6EHi616DPgIaSA3LIC+mIGYRACeAA4McEioAApgJPQwALzQAMIEbOSUJPGJjEQSEAA8YZF4AGbRyCgAfH6YNsTQ4QlJLAg1eUnQqQDaAESALEmAFOYDfADMAAwAun4oDADu1ajUDuut+RC+QA
