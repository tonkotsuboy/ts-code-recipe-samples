type ButtonVariant = "primary" | "secondary" | "danger";
type VariantButtonClass = `btn-${ButtonVariant}`;

const primaryButton: VariantButtonClass = "btn-primary";
const dangerButton: VariantButtonClass = "btn-danger";
// const warningButton: VariantButtonClass = "btn-warning"; // エラー: 定義されていないバリエーション

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAQgrsYB7AdgNQIYCcCWGXBQC8UARGLgLbYilQA+ZAzhAMaoAmNdjpXKAcwhZSAbgBQoSFEy58weIlQBhADYYmTYlAAGAI2AoAtABIA3ouTpseAgF8dE8exRNCFHNSwhLqAFwyNvK+KGoaWiSkBsYeXrQSLm5Q-EJYIQGytgoIVmGa2lGGRinCYuIA9OVQiYQA7tgoOILpgXIEIXkRZNFG9ViNgmJQlVCAFQyAlwyAPwwBgFnagJX+gKoMgDEMgGYMgCIMgFYMa4ALDIBXDKOTgO0MgOcMgM8MQA
