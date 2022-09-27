import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../service/userService';

import { IUser } from '../interfaces/IUser';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body as IUser;
      const result = await this.userService.createUser(user);
      const token = jwt.sign({ user: result.username }, 'MAX');
      return res.status(201).json({ token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
