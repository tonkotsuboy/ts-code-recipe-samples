type ButtonVariant = "primary" | "secondary" | "danger";
type VariantButtonClass = `btn-${ButtonVariant}`;
const primaryButton: VariantButtonClass = "btn-primary";
const dangerButton: VariantButtonClass = "btn-danger";
// const warningButton: VariantButtonClass = "btn-warning";
// エラー: 定義されていないバリエーション
