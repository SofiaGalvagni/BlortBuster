import { Router } from "express";
import UserController from "../controllers/userController.js";
import {validateLogin} from "../midlewares/validateLogin.js"

const userController = new UserController();
const userRoutes = Router();

userRoutes.post("/", userController.createUser);

userRoutes.post("/login", userController.login);

userRoutes.use(validateLogin);
userRoutes.get("/me", userController.me);
userRoutes.get("/bookMovie", userController.bookMovie);
userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);


export default userRoutes;
