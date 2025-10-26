// import { PrismaClient } from '@prisma/client';
let prisma: any;

export const getPrisma = () => {
  if (!prisma) {
    const { PrismaClient } = require('@prisma/client');
    prisma = new PrismaClient();
  }
  return prisma;
};
const getAllUsers = async () => {
    return await getPrisma().user.findMany();
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