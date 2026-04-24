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
