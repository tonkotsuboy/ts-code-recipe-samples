const price: number = 1000; // 価格
const taxRate: number = 0.1; // 消費税率

// 税込み価格を計算
const taxIncludedPrice: number = price * (1 + taxRate);

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBADgJwJbAKYC4ZgK4FsBGqCMAvDAIwAM1A3DAPT0yCF8oDwWAUKJLFAIYAeAJV5QMWPIWJlKAOnJ1GMQBG2gbpjAcF6Bw53btFawD3xgfwY2gJIZAEFGB0707hoMPvwCSYYABtsAE1RuACsjSYcBESk8L6oMABUMAAU5DAA1LYCwqIAlDRAA
