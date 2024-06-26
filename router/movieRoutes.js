import { Router } from "express";
import MovieController from "../controllers/movieController.js";
import {validateLogin} from "../midlewares/validateLogin.js"

const movieController = new MovieController();
const movieRoutes = Router();

movieRoutes.use(validateLogin);
movieRoutes.get("/", movieController.getAllMovies);
movieRoutes.get("/:id", movieController.getById);
movieRoutes.post("/", movieController.createMovie);
movieRoutes.put("/:id", movieController.updateMovie);
movieRoutes.delete("/:id", movieController.deleteMovie);

movieRoutes.post("/book/:id", movieController.bookMovie);
movieRoutes.post("/return/:id", movieController.returnMovie);


export default movieRoutes;
