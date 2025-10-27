import { Favorite } from "src/types/favorite.type";
import { getPrisma } from "../utils/prisma.util";

export class FavoriteModel {
  static async getAll(): Promise<Favorite[]> {
    return await getPrisma().favorite.findMany();
  }
}
