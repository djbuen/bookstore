import { UserModel } from "../models/user.model";

const getAllUsers = async () => {
  return UserModel.getAll();
}

const findUser = async (userID: number) => {
    return UserModel.findByID(userID);
}

export {
  getAllUsers,
  findUser,
}