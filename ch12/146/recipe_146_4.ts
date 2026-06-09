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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEBCCuAXRB7AdtA3gKGtADgE4qICmwZAJtGQB6IBc0EihAlmgOYDc2u0wdC0LwKKQgAo6jZqw6cAlFn55EACzYQAdNOgBeGqXq88AXz55CpNJVKSFTYfOV5LpRPEIYABgB4ARkioaAB8ACSY6po6RoimvgD0gcjoId4m0Ob86ADCIGzAANYSDtAAbihs1DiuAkIoIKRaICicEt4RUdrSpoA7DID9DIDPDIAyDID1DIBXDIDDDKOAqgyAMQyAfgyA6gyA+gzeChnmWaCQMAAK7AC2YIQAnggpGLHWlDAXwS51aMKiqJLSjnJcSjWuEPD4OxSWIbfhZPAoMp2di2aBWGxA0pOLiPPCCZ6IaD+SCke7ofTMAF2LTw2z2DJuDxeLE4vFoEmkfDgYCkCQAIgCQVSbIANNAAOScy4CcBQPRsohsY5nNkhfmgswWaCQ6FVUjKtB5ArFUoVKqowmAwhaXL5IolClPCANJotNpswDrDIBLhkAJQyAPYZxoAihlGgHaGQDnDINAEkMgHztQAyEUsFoBNBjZCsy2G2Qkxkul50QGAMaFIAHdoAcpSdzly0OzAIAJgEP5GO8dHWxrNVoSZMF2BphkI+yghIJaCAL8VANlKTCFDx2YolRwLsvLiWSwRCfEbZ2b9NN2ot2E70HLAxGE2m82WKzXXed7q9voDIfDUaAA
