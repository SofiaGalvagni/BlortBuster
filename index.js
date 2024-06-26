import express from "express";
import router from "./router/routes.js";
import connectionDb from "./connection/connectionDb.js";
import { SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";
import sequelize from './connection/connectionDb.js';
import Reservation from './models/Reservation.js';
import Movie from './models/Movie.js';
import User from './models/User.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", router);

await connectionDb.sync({alter: true});

Movie.hasMany(Reservation, { foreignKey: 'movieId' });
Reservation.belongsTo(Movie, { foreignKey: 'movieId' });
User.hasMany(Reservation, { foreignKey: 'userId' });
Reservation.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

app.listen(SERVER_PORT, () => {
  console.log(`🚀 listen carefully`, SERVER_PORT);
});