async function createPost(title: string, body: string) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ title, body, userId: 1 }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const created = await response.json();
  console.log("サーバーが受け付けた内容:", created);
}

createPost("タイトル", "本文").catch((error) => {
  console.error("送信に失敗しました:", error);
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsIygJwKbDJ4AK6IyAFGsgDZ4BcM5OqEA5gDQwBG6AJmEbNWbAJQwA3gCgY2TORj4QAB3l4YAXhjAA7sFTJ4eZFAAWFAESnkyZSHoB6BwCsQmZTWBQ8p9DT54OAB0yGDKqFD8eEGRALYOquQgFlzSsrKxxr58jBbEAPIAygAqKTLppgQBOPaS5ekwFgDCmEQQyAC0xWF4FrnAyh4RhBgQLm4QANzYpsA1xhoAqsUAYh0AHGUNAL4c9Tz8gjAAUoX5AHJBwuyocGAUEjDUdFy8AlwIIIEAkjkwAIwwbaiPayYGTKTlW4wCgAQiUqggXyC6AA1uI0ulkKYcOgdDAIHh8QBRHC4nAUAAGAAlisViDBAuTGAASCQItRXZCET7bSmiCFgyGySJIwy4AhEPiabR6AyKPAqTmuTAUAXlUVuOhBGjoNiWQCtDIAfhkACwxGwAyDIB15UAigyADblrYB9BkAoYqATu16ClsPhCHg+OrtpCJd7SORLIB+hkAJQyACYZANcMHosgBpzQDhphZRDFCGYKBQmegcOINAA+Ooi+R+aLZikWQCACYBD+UA1gyARk1AOqmgHUGQB+DM2He6uOW-QKgA
