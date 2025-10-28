import { UserModel } from "../models/user.model";
import { getPrisma } from "../utils/prisma.util";
import { User } from "src/types/user.type";

const getAllUsers = async () => {
  return UserModel.getAll();
}

const findUser = async (userID: number) => {
    return UserModel.findByID(userID);
}

const findUserByUsername = async (username: string): Promise<User | null> => {
  return await getPrisma().user.findUnique({ where: { username } });
};

const createUser = async (userData: Partial<User>): Promise<User> => {
  return await getPrisma().user.create({ data: userData });
};

export {
  getAllUsers,
  findUser,
  findUserByUsername,
  createUser
}