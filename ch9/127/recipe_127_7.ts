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
