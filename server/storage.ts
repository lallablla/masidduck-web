import { eq } from "drizzle-orm";
import { db } from "./db";
import { users, riceCakes, catalogProducts } from "@shared/schema";
import type { User, InsertUser, RiceCake, InsertRiceCake, UpdateRiceCake, CatalogProduct, InsertCatalogProduct } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllRiceCakes(): Promise<RiceCake[]>;
  getAvailableRiceCakes(): Promise<RiceCake[]>;
  createRiceCake(cake: InsertRiceCake): Promise<RiceCake>;
  updateRiceCake(id: number, updates: UpdateRiceCake): Promise<RiceCake | undefined>;
  deleteRiceCake(id: number): Promise<boolean>;
  getAllCatalogProducts(): Promise<CatalogProduct[]>;
  createCatalogProduct(product: InsertCatalogProduct): Promise<CatalogProduct>;
  deleteCatalogProduct(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getAllRiceCakes(): Promise<RiceCake[]> {
    return db.select().from(riceCakes).orderBy(riceCakes.sortOrder, riceCakes.id);
  }

  async getAvailableRiceCakes(): Promise<RiceCake[]> {
    return db
      .select()
      .from(riceCakes)
      .where(eq(riceCakes.available, true))
      .orderBy(riceCakes.sortOrder, riceCakes.id);
  }

  async createRiceCake(cake: InsertRiceCake): Promise<RiceCake> {
    const [newCake] = await db.insert(riceCakes).values(cake).returning();
    return newCake;
  }

  async updateRiceCake(id: number, updates: UpdateRiceCake): Promise<RiceCake | undefined> {
    const [updated] = await db
      .update(riceCakes)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(riceCakes.id, id))
      .returning();
    return updated;
  }

  async deleteRiceCake(id: number): Promise<boolean> {
    const result = await db.delete(riceCakes).where(eq(riceCakes.id, id)).returning();
    return result.length > 0;
  }

  async getAllCatalogProducts(): Promise<CatalogProduct[]> {
    const result = await db.select().from(catalogProducts).orderBy(catalogProducts.createdAt);
    return result ?? [];
  }

  async createCatalogProduct(product: InsertCatalogProduct): Promise<CatalogProduct> {
    const [newProduct] = await db.insert(catalogProducts).values(product).returning();
    return newProduct;
  }

  async deleteCatalogProduct(id: number): Promise<boolean> {
    const result = await db.delete(catalogProducts).where(eq(catalogProducts.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
