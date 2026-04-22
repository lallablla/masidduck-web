/**
 * 시드 스크립트: products.ts 데이터를 DB의 rice_cakes 테이블에 입력
 * 실행: npm run db:seed
 * 이미 같은 이름의 떡이 있으면 스킵 (중복 방지)
 */

// .env.local 또는 .env 파일에서 환경변수 로드
import { readFileSync } from "fs";
for (const envFile of [".env.local", ".env"]) {
  try {
    const lines = readFileSync(envFile, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
      if (key && !(key in process.env)) process.env[key] = val;
    }
  } catch {
    // 파일 없으면 스킵
  }
}

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL이 설정되지 않았습니다.");
  console.error("   .env.local 파일에 DATABASE_URL을 추가하거나 환경변수를 설정해주세요.");
  process.exit(1);
}

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { riceCakes } from "../shared/schema.js";
import { products } from "../client/src/data/products.js";

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

async function seed() {
  console.log(`\n🍡 마시떡 시드 시작 (총 ${products.length}개 상품)\n`);

  const existing = await db.select({ name: riceCakes.name }).from(riceCakes);
  const existingNames = new Set(existing.map((r) => r.name));

  let added = 0;
  let skipped = 0;

  for (const product of products) {
    if (existingNames.has(product.name)) {
      skipped++;
      continue;
    }
    await db.insert(riceCakes).values({
      name: product.name,
      description: product.description,
      imageUrl: product.image,
      available: false,
      sortOrder: product.id,
    });
    existingNames.add(product.name);
    added++;
    process.stdout.write(`  ✅ ${product.name}\n`);
  }

  console.log(`\n완료! 추가: ${added}개 / 스킵(이미 존재): ${skipped}개\n`);
}

seed().catch((err) => {
  console.error("시드 실패:", err);
  process.exit(1);
});
