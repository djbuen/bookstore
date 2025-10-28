import { User } from "src/types/user.type";
import { getPrisma } from "../utils/prisma.util";

export class UserModel {
  static async getAll(): Promise<User[]> {
    return await getPrisma().user.findMany();
  }
  static async findByID(userID: number): Promise<User | null> {
    return await getPrisma().user.findUnique({
      where: { id: userID },
    });
  }
}
