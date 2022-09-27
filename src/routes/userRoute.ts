import { Router } from 'express';
import validateUser from '../Middlewares/userValidate';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

// router.post('/login', userController.login)
router.post('/', validateUser, userController.createUser);

export default router;
