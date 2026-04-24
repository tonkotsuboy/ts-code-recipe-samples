type GreetingProps = {
  name: string;
  message?: string;
};

function Greeting({ name, message = "こんにちは" }: GreetingProps) {
  return (
    <div>
      {message}、{name}さん！
    </div>
  );
}

// 使用例
<Greeting name="佐藤" />; // デフォルトのメッセージを使用
<Greeting name="鈴木" message="おはようございます" />;
// カスタムメッセージを使用
