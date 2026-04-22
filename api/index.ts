import express from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = createServer(app);
const initDone = registerRoutes(server, app);

export default async function handler(req: Request, res: Response) {
  await initDone;
  return app(req, res);
}
