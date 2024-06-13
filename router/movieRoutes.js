import { Router } from "express";
import MovieController from "../controllers/movieController.js";

const movieController = new MovieController();
const movieRoutes = Router();

movieRoutes.get("/", movieController.getAllMovies);
movieRoutes.get("/:id", movieController.getById);

export default movieRoutes;
