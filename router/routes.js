import { Router } from "express";
import movieRoutes from "./movieRoutes.js";

const router = Router();

router.use("/movies", movieRoutes);

export default router;