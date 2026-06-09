// APIから取得したユーザーデータの型（nullやundefinedの可能性あり）
type UserData = { id: number; name: string } | null | undefined;

// NonNullableで確実に値がある場合のみ受け取る関数
function displayUserInfo(user: NonNullable<UserData>) {
  // userは必ずオブジェクトなので、安全にアクセスできる
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

// APIからデータを取得（仮）
const userData: UserData = { id: 1, name: "田中太郎" };

// nullやundefinedチェック後に使用
if (userData != null) {
  displayUserInfo(userData); // OK: nullやundefinedが除外されている
}

// displayUserInfo(null); // エラー: null は受け付けられない

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEEEAUElGkGRIhkGvKh0-UOoMh9BkGcMgfhkG0M3Bxhm0H6GQOwZBo9UAh-gOwFcAbewEIZbqATAUwDMBLajtqUD3yoF+AwOQGgIQZAUQyBIf4BQAFwCeABw6gAqgGcOAJwAiAQwWHQAXlABvUDzYAuUHQC2AIz0BuR4accHWhbp8AOagAL6gAD6ODPSRoKycvPxs7nJyIKAAcgD21Jkxhi70HIDmDIBdHoD52oDWDIAkCoAyDBKA0QyALBqAECqkgP4MgOvKgIoMiI2ARamADqZyXKwAxgo8uaBsPFoq9IZK2nrQ1FzZABS0OroOOXkFRRwAPKsGxoYAfACUVnKgoBm7eoD2DICj+oBaDIBVDIBrDIAOhkA5QyAeoZABMMgCsGUglQCADIBI7UAFopVQBFDCDAN0MgE6GEqAWQZGo9QONclpssUAHT0bJBLYAA2g+gcABJLK9dKTbKEADRZby+UBMlmk6g80LU26pUJpDJQODwIjEQBJDChKIA7uXkhOo-nieyMJgcFx1pgs1lsDgAjFyhT4HAAiQAMroBaOUAVJqAOYTrWFUukwHRGCx2Nw+AJAIMMQMAwwwgwAx+lVAP7ygApXOQ8LigHbaq6gACEFm99HulnxcwWSxWe3Wm2TegNYueYAA8gBpBxZ32JANsOqAEzTAGiagFUGQAxDIAzBkAIgx4iWe2bzRbLC4l7ZZysZQAVDIBLhmwDZioDevUAG3I9eA9iEDoA
