import { Book } from "src/types/book.type";
import { getPrisma } from "../utils/prisma.util";

export class BookModel {
  static async getAll(): Promise<Book[]> {
    return await getPrisma().book.findMany();
  }
}
