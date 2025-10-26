import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class UserModel {
  static async getAll(): Promise<any[]> {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw new Error('Failed to fetch users');
    }
  }
}
