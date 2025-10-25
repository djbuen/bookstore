import { Request, Response } from 'express';
// =============================
// Mock Data
// =============================
const users = [
  { name: 'tj' },
  { name: 'ciaran' },
  { name: 'aaron' },
  { name: 'guillermo' },
  { name: 'simon' },
  { name: 'tobi' },
];

const getAllUsers = (req: any, res: Response) => {
  res.send({ message: "Get all users", payload: req.params, users });
};

const getOneUser = (req: Request, res: Response) => {
  res.send({ message: "Get an existing user", payload: req.params });
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
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
}
