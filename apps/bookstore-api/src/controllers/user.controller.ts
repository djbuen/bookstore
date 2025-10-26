import { Request, Response } from 'express';
import * as UserService from '../services/user.service';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.send({
      message: "Get all users",
      payload: req.params,
      users,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  const userID = parseInt(req.params.userID);
  try {
    const user = await UserService.findUser(userID);
    res.send({
      message: "Get user",
      payload: req.params,
      user,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

const createNewUser = (req: Request, res: Response) => {
  res.send({ message: "Create a new user", payload: req.params });
};

const updateOneUser = (req: Request, res: Response) => {
  res.send({ message: "Update an existing user", payload: req.params });
};

const deleteOneUser = (req: Request, res: Response) => {
  res.send({ message: "Delete an existing user", payload: req.params });
};
  
export { 
  getAllUsers,
  getUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
}
