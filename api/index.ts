import express from "express";
import jwt from "jsonwebtoken";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, asc } from "drizzle-orm";
import { pgTable, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import type { Request, Response, NextFunction } from "express";

// DB 연결
const sqlClient = neon(process.env.DATABASE_URL!);
const db = drizzle(sqlClient);

// 테이블 스키마 정의
const riceCakes = pgTable("rice_cakes", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  description: text("description").notNull().default(""),
  imageUrl: text("image_url").notNull().default(""),
  available: boolean("available").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

const insertRiceCakeSchema = createInsertSchema(riceCakes).pick({
  name: true,
  description: true,
  imageUrl: true,
  available: true,
  sortOrder: true,
});
const updateRiceCakeSchema = insertRiceCakeSchema.partial();

// 인증
const SESSION_SECRET = process.env.SESSION_SECRET || "dev-fallback-secret";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "인증이 필요합니다" });
  }
  const token = auth.split(" ")[1];
  try {
    jwt.verify(token, SESSION_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "토큰이 만료되었습니다. 다시 로그인해주세요." });
  }
}

// Express 앱
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ── 관리자 로그인 ──────────────────────────────────────────
app.post("/api/admin/login", (req: Request, res: Response) => {
  const { password } = req.body as { password?: string };
  if (!password || !ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "비밀번호가 틀렸습니다" });
  }
  const token = jwt.sign({ role: "admin" }, SESSION_SECRET, { expiresIn: "7d" });
  return res.json({ token });
});

// ── 관리자 세션 확인 ──────────────────────────────────────
app.get("/api/admin/check", requireAdmin, (_req: Request, res: Response) => {
  return res.json({ ok: true });
});

// ── 공개: 오늘 판매 중인 떡 목록 ──────────────────────────
app.get("/api/today", async (_req: Request, res: Response) => {
  const cakes = await db
    .select()
    .from(riceCakes)
    .where(eq(riceCakes.available, true))
    .orderBy(asc(riceCakes.sortOrder), asc(riceCakes.id));
  return res.json(cakes);
});

// ── 관리자: 전체 떡 목록 ──────────────────────────────────
app.get("/api/rice-cakes", requireAdmin, async (_req: Request, res: Response) => {
  const cakes = await db
    .select()
    .from(riceCakes)
    .orderBy(asc(riceCakes.sortOrder), asc(riceCakes.id));
  return res.json(cakes);
});

// ── 관리자: 떡 추가 ───────────────────────────────────────
app.post("/api/rice-cakes", requireAdmin, async (req: Request, res: Response) => {
  const result = insertRiceCakeSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "잘못된 입력입니다" });
  }
  const [cake] = await db.insert(riceCakes).values(result.data).returning();
  return res.status(201).json(cake);
});

// ── 관리자: 떡 수정(토글 포함) ────────────────────────────
app.patch("/api/rice-cakes/:id", requireAdmin, async (req: Request, res: Response) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) return res.status(400).json({ message: "잘못된 ID입니다" });
  const result = updateRiceCakeSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ message: "잘못된 입력입니다" });
  const [updated] = await db
    .update(riceCakes)
    .set({ ...result.data, updatedAt: new Date() })
    .where(eq(riceCakes.id, id))
    .returning();
  if (!updated) return res.status(404).json({ message: "떡을 찾을 수 없습니다" });
  return res.json(updated);
});

// ── 관리자: 떡 삭제 ───────────────────────────────────────
app.delete("/api/rice-cakes/:id", requireAdmin, async (req: Request, res: Response) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) return res.status(400).json({ message: "잘못된 ID입니다" });
  const deleted = await db
    .delete(riceCakes)
    .where(eq(riceCakes.id, id))
    .returning();
  if (deleted.length === 0) return res.status(404).json({ message: "떡을 찾을 수 없습니다" });
  return res.json({ ok: true });
});

export default app;
