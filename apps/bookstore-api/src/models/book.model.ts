import { Book } from "src/types/book.type";
import { getPrisma } from "../utils/prisma.util";

export class BookModel {
  static async getAll(): Promise<Book[]> {
    return await getPrisma().book.findMany();
  }

  static async getById(bookID: number): Promise<Book | null> {
    return await getPrisma().book.findUnique({
      where: { id: bookID },
    });
  }

  static async create(bookData: Partial<Book>): Promise<Book> {
    return await getPrisma().book.create({
      data: bookData,
    });
  }

  static async update(bookID: number, bookData: Partial<Book>): Promise<Book | null> {
    return await getPrisma().book.update({
      where: { id: bookID },
      data: bookData,
    });
  }

  static async delete(bookID: number): Promise<boolean> {
    const deletedBook = await getPrisma().book.delete({
      where: { id: bookID },
    });
    return deletedBook ? true : false;
  }

  static async search(query: string): Promise<Book[]> {
    const prisma = getPrisma();
    return prisma.book.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { author: { contains: query } },
        ],
      },
    });
  }
}
