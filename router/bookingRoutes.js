import { Router } from "express";
import BookingController from "../controllers/bookingController.js";

const bookingController = new BookingController();
const bookingRoutes = Router();

bookingRoutes.get("/", bookingController.getAllBookings);
bookingRoutes.get("/:id", bookingController.getById);
bookingRoutes.post("/", bookingController.createBooking);
bookingRoutes.put("/:id", bookingController.updateBooking);
bookingRoutes.delete("/:id", bookingController.deleteBooking);


export default bookingRoutes;


// hacer el logueo del usuario (hasheo de DB_PASSWORD, cookie de logueo, jwt, validacion de logueo)
// las funciones del negocio   (verificar stock, verificar pelis reservadas, reservar())

// cambiar nombres de variables y distinguir del codigo del profe
// Hacer el README.MD


// Hacer maqueta para el final