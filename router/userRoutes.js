import { Router } from "express";
import UserController from "../controllers/userController";

const userController = new UserControllers();
const userRoutes = Router();

userRoutes.get("/", userController);
userRoutes.get("/:id", userController);
userRoutes.post("/", userController);
userRoutes.put("/:id", userController);
userRoutes.delete("/:id", userController);


export default userRoutes;
