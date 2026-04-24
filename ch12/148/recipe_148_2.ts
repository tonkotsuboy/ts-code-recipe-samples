// 意図的な型エラーデモです。静的プロパティへインスタンス経由でアクセスするとコンパイルエラー（TS2576）になります。
// 書籍では recipe_148_1.ts で定義された Config クラスを前提としていますが、単体で動くように同梱しています。
class Config {
  static version = "1.0.0";
}

const config = new Config();
console.log(config.version); // コンパイルエラー
