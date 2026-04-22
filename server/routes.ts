import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import jwt from "jsonwebtoken";
import { storage } from "./storage";
import { insertRiceCakeSchema, updateRiceCakeSchema } from "@shared/schema";

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

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  // 관리자 로그인 - 비밀번호 확인 후 JWT 발급
  app.post("/api/admin/login", (req: Request, res: Response) => {
    const { password } = req.body as { password?: string };
    if (!password || !ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "비밀번호가 틀렸습니다" });
    }
    const token = jwt.sign({ role: "admin" }, SESSION_SECRET, { expiresIn: "7d" });
    return res.json({ token });
  });

  // 관리자 세션 확인
  app.get("/api/admin/check", requireAdmin, (_req: Request, res: Response) => {
    return res.json({ ok: true });
  });

  // 공개 API - 오늘 판매 중인 떡 목록
  app.get("/api/today", async (_req: Request, res: Response) => {
    const cakes = await storage.getAvailableRiceCakes();
    return res.json(cakes);
  });

  // 관리자 - 전체 떡 목록 조회
  app.get("/api/rice-cakes", requireAdmin, async (_req: Request, res: Response) => {
    const cakes = await storage.getAllRiceCakes();
    return res.json(cakes);
  });

  // 관리자 - 모두 끄기
  app.post("/api/rice-cakes/reset", requireAdmin, async (_req: Request, res: Response) => {
    const cakes = await storage.getAllRiceCakes();
    for (const cake of cakes) {
      if (cake.available) await storage.updateRiceCake(cake.id, { available: false });
    }
    return res.json({ ok: true });
  });

  // 관리자 - 떡 추가
  app.post("/api/rice-cakes", requireAdmin, async (req: Request, res: Response) => {
    const result = insertRiceCakeSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "잘못된 입력입니다", errors: result.error.issues });
    }
    const cake = await storage.createRiceCake(result.data);
    return res.status(201).json(cake);
  });

  // 관리자 - 떡 수정 (토글 포함)
  app.patch("/api/rice-cakes/:id", requireAdmin, async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: "잘못된 ID입니다" });
    }
    const result = updateRiceCakeSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "잘못된 입력입니다", errors: result.error.issues });
    }
    const updated = await storage.updateRiceCake(id, result.data);
    if (!updated) {
      return res.status(404).json({ message: "떡을 찾을 수 없습니다" });
    }
    return res.json(updated);
  });

  // 관리자 - 떡 삭제
  app.delete("/api/rice-cakes/:id", requireAdmin, async (req: Request, res: Response) => {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: "잘못된 ID입니다" });
    }
    const deleted = await storage.deleteRiceCake(id);
    if (!deleted) {
      return res.status(404).json({ message: "떡을 찾을 수 없습니다" });
    }
    return res.json({ ok: true });
  });

  return httpServer;
}
