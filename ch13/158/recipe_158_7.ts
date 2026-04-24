// URL指定（absolute specifier）でのimport構文例です。
// 実行にはURL importをサポートする環境（Deno や esm.sh 対応のランタイム）が必要です。
import { Hono } from "https://esm.sh/hono";

const app = new Hono();
console.log(app);
