import UserModel from '../models/userModel';
import { IUser } from '../interfaces/IUser';
import connection from '../models/connection';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async createUser(user: IUser) {
    const result = await this.userModel.createUser(user);
    return result;
  }
}
