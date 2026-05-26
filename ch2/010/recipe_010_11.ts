// 推奨: 値が変更されない場合はconstを使用
const userName = "田中";
const maxRetryCount = 3;

// 値が変更される場合のみletを使用
let currentRetryCount = 0;
currentRetryCount++;
