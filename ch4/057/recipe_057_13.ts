// 物体の位置を更新する
let positionX = 0;
let velocityX = 5;
let accelerationX = 0.1;
function updatePosition() {
  // 速度に加速度を加算
  velocityX += accelerationX;
  // 位置に速度を加算
  positionX += velocityX;
  console.log(`位置: ${positionX}`);
  requestAnimationFrame(updatePosition);
}
