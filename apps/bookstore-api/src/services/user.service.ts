import User from '../models/user.model'
const getAllUsers = () => {
    return User.all();
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