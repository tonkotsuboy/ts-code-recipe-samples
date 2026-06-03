type Result3 = Extract<"a" | "b" | (() => void), Function>; // () => void

const sample: Result3 = () => console.log("hello");
sample();

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAShDOBXANsAzFAvFAogD2ACcBDAY2AB4AiYqqAHyioCM7GAKdgSiwD4oAbgHsAlgBMuAGigAxRADtyIofN4BuKAHpNUbn0GixAKCOkV8YFHjEAtmGQQAXLAQp0WXT0z8z8+EIcAOmQhAHN2KgALCGQQqi41I2s7B241IA
