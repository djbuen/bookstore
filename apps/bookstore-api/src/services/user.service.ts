import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const getAllUsers = async () => {
    return await prisma.user.findMany();
}

const getOneUser = (userID: string) => {
    return;
}

const createNewUser = (userData: any) => {
    return userData;
}

const updateOneUser = (userID: string, userData: any) => {
    return;
}

const deleteOneUser = (userID: string) => {
    return;
}

export {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
}