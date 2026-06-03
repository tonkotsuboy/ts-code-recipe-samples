const getJapaneseColorName = (color: string): string => {
  switch (color) {
    case "red":
      return "赤";
    case "blue":
      return "青";
    case "green":
      return "緑";
    default:
      return "その他";
  }
};

// 使用例
console.log(getJapaneseColorName("red")); // 赤
console.log(getJapaneseColorName("blue")); // 青
console.log(getJapaneseColorName("green")); // 緑
console.log(getJapaneseColorName("gold")); // その他

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBA5gUygKQIYAdVgRBBhEAGxACcA5VAWwRgF4YAKUYkgLhmhIEsw4BKdpx5w6APhgBvAFAwOAdy5RgAC0bNSfSTNkxgqXDABEJBABNDrbTpgmoAVxJgjgE1jDAbiu79NQwCNCdggWnrK2Dk6GgErp7p56BoZwJghgwdahSOFGgIu+MdamCABmqHaEUJZpNhmORoC6DIB2DIBrcrkwAL5SLR5SAPRdMID+8oAUroDR8lKgkEQIAHTEcAyIKBhYOPhEpBTUDMZmhnx8bjA9MM6j4BAT0yCz82iY2LgELOsIm-6BO3sHvZEn44RTM3MkDclvdVuQqM8EkkUrt9ocsj8zn8LlcgYs7itHhDNnAiOZYZ8YPUGkA
