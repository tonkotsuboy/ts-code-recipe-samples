// 修正後の例（すべての分岐で return する）
// 書籍では「recipe_170_1/index_2.ts」として紹介されていますが、
// 本配布コードでは重複関数定義エラーを避けるため、この位置に単独で配置しています。
export function getDiscount(price: number, isSale: boolean) {
  if (isSale) {
    return price * 0.9;
  }
  return price;
}
