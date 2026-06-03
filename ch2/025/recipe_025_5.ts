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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAwg9gOwGYEsDmUC8UDeAoKKYACwgFsIAuKAZ2ACcUEMAfKBAVwBsuBuAqFwCGzDkLRVaDJq3bc+AgCYQARhzQBZOMuoq4cLhBFQ2nHvwC+-PEg4IAxsBSIoTFE6FcUALwjxk6AAU9oioaNT+YQCUuAIA9HFyPIAhDHbKqAgQioB2DIAsGoAQKtmA-gyA4wyAqwyAlQyA1wyAEwyAJAqASQyAtFGAWdoCIQFoAHQk5NAA-P3YAEReaMTAw-yEHWFdwqLiA0NQwwBWQlPtoehdymqa2svYSJ40ENaE9BDAHPQIULPolnh4HXRQHOf0kegROxhsPhCL0KNQzFwADQCBZoMQSajDCAIYaQqAJKCAI9NANYMdUAMgyAIQZANEM2UA5gyASE1AC9mgFUGQAxDIArBkAIgxKVTqLQ6JJQvBWV7vAwQeZwNCBNweLy+X7Cr4QH4AqJRfgYnBEUhg1ZjCaowQiOFLRHIrX7NlHainLjnKAWIA
