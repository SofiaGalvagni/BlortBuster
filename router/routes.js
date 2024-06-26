import { Router } from "express";
import movieRoutes from "./movieRoutes.js";
import userRoutes from "./userRoutes.js";
import bookingRoutes from "./bookingRoutes.js";

const router = Router();

router.use("/movies", movieRoutes);
router.use("/user", userRoutes);
router.use("/booking", bookingRoutes);

export default router;