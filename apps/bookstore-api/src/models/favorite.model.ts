import { Favorite } from "src/types/favorite.type";
import { getPrisma } from "../utils/prisma.util";

export class FavoriteModel {
  static async getAll(): Promise<Favorite[]> {
    return await getPrisma().favorite.findMany();
  }
  static async create(data: { userId: number; bookId: number }): Promise<Favorite> {
    return getPrisma().favorite.create({
      data,
    });
  }

  static async delete(id: number): Promise<void> {
    await getPrisma().favorite.delete({ //I was planning to do a soft delete but for simplicity, I will do a hard delete
      where: { id },
    });
  }
}
