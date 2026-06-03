type User = {
  id: number;
  name: string;
};

function assertUser(value: unknown): asserts value is User {
  if (typeof value !== "object" || value === null) {
    throw new Error("ユーザー情報がオブジェクトではありません");
  }
  if (typeof (value as { id?: unknown }).id !== "number") {
    throw new Error("idが数値ではありません");
  }
  if (typeof (value as { name?: unknown }).name !== "string") {
    throw new Error("nameが文字列ではありません");
  }
}

function handleResponse(payload: unknown) {
  assertUser(payload);
  // ここではpayloadがUser型に絞り込まれている
  console.log(`${payload.id}: ${payload.name}`);
}

handleResponse({ id: 1, name: "田中" }); // "1: 田中"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAlgEwC4oA7AVwFsAjJAbm1IEMKJi5hFcSBzegX3qYAZmRIBjYLgD2JKIzgJEweEgAUAN0YAbMqyiiA1iSkB3EgEpi8xcDhRNO6LjsrkWHLiFRVoSFK8OulAAhChoAERSVABWEBLhUAA+ifbaQWFo5Fpa5hgMOMAAFoimpBAmUACiiCWIquGAZwyAPwyAbQxNgKMGgIwagDIMgFUMgGsMgB0MgOUMgPUMgBMMgOYMgPYMgEIMgFEMgH4MgNoMgMkM4eb0OHwMnt6+EP7egdDyGHj4APzEhsZmUHzmAHQEIWFQ4eTUSBt5OAXFUokcpVGpSOrhAjdQAOpoASBRmCxW602DB2Hi8PnAhwxJzkdnQTBY130JCMplkjyeJGY0FCEXYnB4v3c-yKJQqwIq1Vq9WpLG6gHDTQDq2oB0JQRSzWGy2D0wO2Eogk0lkhUYJHwWggACUIHAwDIEKowIwQFopIwiCSyWZcizrEhlIpDcbTeaUTgAPTuqCAZQZvTMjSazfhuq5ANHqgGsGQB6vvNAD3xi0AMQyAMwZACIMgGiGBhifVSDVPU3cVQAAwAJOgAy78C98HxiCWy0GqTS+AWUXKVWqNdrdfqIKoCQRiABGAA0hL04UADK6AWjkEo9aFBPR8B8Qp+EgA
