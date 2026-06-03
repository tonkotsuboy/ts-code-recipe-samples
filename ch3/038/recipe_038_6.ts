// イベントの型定義
type MyClickEvent = {
  type: "click";
  x: number;
  y: number;
};

type MyDragEvent = {
  type: "drag";
  dx: number;
  dy: number;
};

type MyBaseEvent = MyClickEvent | MyDragEvent;

// イベントハンドラーの型定義
type EventHandler<T extends MyBaseEvent> = (event: T) => void;

// クリックイベントハンドラー
const handleClick: EventHandler<MyClickEvent> = (event) => {
  console.log(`eventType: ${event.type}`);
  console.log(`Click at (${event.x}, ${event.y})`);
};

// ドラッグイベントハンドラー
const handleDrag: EventHandler<MyDragEvent> = (event) => {
  console.log(`eventType: ${event.type}`);
  console.log(`Drag by (${event.dx}, ${event.dy})`);
};

// 使用例
handleClick({ type: "click", x: 100, y: 200 }); // Click at (100, 200)
handleDrag({ type: "drag", dx: 5, dy: 10 }); // Drag by (5, 10)

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEhKGRNhkZ4ZAmGQ7BkNHqgs7UJX+AoALgTwA4FNQBZbAYQBsBLAYwGsBRAN3wDtNQBeUAb3VFBwEAXKABE1KnVEBuPqAAeIlgFcAtgCN8AJ1n9sStZp3oAvrKx5CJACJaAhgHMmrdl179B+EaIAm9hzJyPoqgKhrauqA++qGGEabmnsTYAEJ2AM74zmycyRQ0DMw5AD7Jto7ZmOYgEDCwgPMM0ICTDICXDIA-DEhoFgSglQASdiw+5NoAPAAqoPjymKw+6clpmZUAfLkAFPhFmCLjAJSca4wA9pQ+1WCA9QyAVwyAwwyXUHCNrW3o1Mcs6ewAFoPD+Pk6CJ+n8RlpRiRAYUXGsuJttgcOGt3KB3p9jiMAHTkY4OdYAAy2LnGlhEABJuES2JjPCZ8XtImj0hj8NjcQSoaA7Ox1hSqZhMfITAAaUB87aY7AmPb02RmdDoGqtW6ABoZHg1mu03h8vqBfkMRuUHMDtgMDWMbP5Vht+YjkXImSy2XjCdsScIxZSJbTZQ6dU6cS6jaB1NhQLyvS5McERZ7+dGpTKGQkFTVAP7ygApXQDR8uh9f8oetuAJSWIJAVRKKQgBGAAMNdFMQATHXQNLpKAapzueHa-XQM2a3tc6D8EbC8WPb5-BWoiEAKyi6IiWuthkdsDB0PhhegWt7IA
