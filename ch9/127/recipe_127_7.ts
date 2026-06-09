function createConfig<
  const T extends {
    port: number;
    logLevel: string;
    hostname?: string;
  },
>(options: T): T & { hostname: string } {
  // portが数値であり、1024以上65535以下であることを確認します。
  if (
    typeof options.port !== "number" ||
    options.port < 1024 ||
    options.port > 65535
  ) {
    throw new Error(
      "無効なポート番号です。ポートは1024以上65535以下の数値である必要があります。",
    );
  }

  // logLevelが有効なログレベルのいずれかであることを確認します。
  const validLogLevels = ["debug", "info", "warn", "error"];
  if (!validLogLevels.includes(options.logLevel)) {
    throw new Error(
      `無効なログレベルです。ログレベルは次のいずれかである必要があります:
      ${validLogLevels.join(", ")}`,
    );
  }

  // デフォルト値を設定します。
  const config = {
    ...options,
    hostname: options.hostname ?? "localhost",
    // hostnameが指定されていない場合は、デフォルトで"localhost"を使用します。
  };

  return config;
}

const config = createConfig({
  port: 8080,
  logLevel: "debug",
});
// config: {
//   readonly port: 8080;
//   readonly logLevel: "debug";
// } & {
//   hostname: string;
// }

const config2 = createConfig({
  port: 4000,
  logLevel: "error",
});
// config2: {
//   readonly port: 4000;
//   readonly logLevel: "error";
// } & {
//   hostname: string;
// }

console.log(config, config2);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBATgUwIZTQYQcGAcwB4AoRZBAZykQBVE0APbMAEysQG9yLEAHOCigAuRGBABbAEZoUAbl4UANnEIAZNADc0ysTRQwwhRX0QALODTAZJaAPz6oh46cQBfADSkAfAAo4flhqMToASlDEADJuCysoGzsnF0IPbl4AegyBIShAGQZAB1NAEgVAcwZAIQZAKIZAQAYARgAGACYAFkBTuUAoOQA2AFYugGYulsBoOXLAaIZAZQZACwZAJIZALo9AWKjAdQZAPwZATQZAIAZeGGBEPyVEKABPfjQ4bcDgsCoAOkFhRABCAF5HxAAiCRk5V8QAHx+987wS43XKIYiIerNX7-MyA6ggu4+RDdPpdXhhdJmKDmFBwADu4jQBIAoihcShdmYKK9AISOgE6lQBWDIBdhkAPwyACYZAFaugHflErrVlswD2DJDWp0ev0hoA7BmKo0Ao-qAQMi8pVVmtXt4zGE3O5SJlsqoNNpdHlAJDmjMAtwyABoZADcMgE2GQDXDBLACIMgC0GQAxDIBpBlGk1mi2VvAg1FoWgwyhgbHUak0OmUnBeAG1Xmw0NIQIRVW8jMA4GnXniMCgwNm5OTXgBdNxbHb3IMhsMRg3Rq5GCDKECJqgBIJA656yO6MIYnhYnH4wkkslCSlUgAG9IZFpttt5a3ndoFgEJrR2uj1lEbyxUVVYiPYUAAkXGrofD+qj1wAVnAjH5s2F3FO1XwNbwtTrEIBxhkAqwyAJUMtpskUUyALRRgBZ2ss6x+gGlBgAQqQvIOfBXOhcKXO+FCWNYthoGImHXLhCT4Yg9j2G8qgQMGJGqnsWRxHhdh5IA4MaQYAqgwuoAZgwOgyDqACwagAQKgKVQAcBbIlK81G0fErxTIA-vKABSuMEbBQ7iKLw6BQCA+YIUhijfv6ly0MZSGIC8qCYNgeCIUQfiobcoiIAAHHUbnvj29ZiAmSYpvR7ifoxZlEGIPCMRQ6AYGwCDKAcOTCGIbluYoEWIFFMVgHFiBeVGPmJsmqapdk7jROkaUkYkBGIAYRgmKQjFGfBIWEA0FnIFFNn4PZjm5GITR1INnl1nlbxFkIAVBdkLUNGFDXZJFmCZdlTn9YNdTFXwGWxfFuW6D540oK8m2lTE4ULUxpFJDVzh1Sd2rGVQcDKGgVx6n4LWePpRANBqQA
