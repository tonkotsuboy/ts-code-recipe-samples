type Config = {
  theme: string | null;
  language: string | null;
  debugMode: boolean | null;
};

function initializeConfig(config: Config) {
  // nullやundefinedの場合のみデフォルト値を設定
  config.theme ??= "light";
  config.language ??= "ja";
  config.debugMode ??= false;

  return config;
}

const userConfig: Config = {
  theme: null,
  language: "en", // 既に値があるので変更されない
  debugMode: null,
};

console.log(initializeConfig(userConfig));
// { theme: "light", language: "en", debugMode: false }
