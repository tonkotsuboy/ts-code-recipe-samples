// UIコンポーネント継承の実例です。書籍のPDFでは紙幅の都合で `<button` と `class="primary">` が
// 折り返して別行で表示されていますが、配布コードでは1つの文字列として扱うため1行に整形しています。
class Button {
  protected text: string;

  constructor(text: string) {
    this.text = text;
  }

  render(): string {
    return `<button>${this.text}</button>`;
  }

  onClick(): void {
    console.log(`${this.text}ボタンがクリックされました`);
  }
}

class PrimaryButton extends Button {
  constructor(text: string) {
    super(text);
  }

  override render(): string {
    const baseButton = super.render();
    return baseButton.replace("<button>", '<button class="primary">');
  }

  override onClick(): void {
    super.onClick();
    console.log("プライマリアクションを実行します");
  }
}

const primaryBtn = new PrimaryButton("送信");
console.log(primaryBtn.render());
// 出力: <button class="primary">送信</button>

primaryBtn.onClick();
// 送信ボタンがクリックされました
// プライマリアクションを実行します
