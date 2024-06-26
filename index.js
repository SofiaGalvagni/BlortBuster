import express from "express";
import router from "./router/routes.js";
import connectionDb from "./connection/connectionDb.js";
import { SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", router);

await connectionDb.sync({alter: true});



app.listen(SERVER_PORT, () => {
  console.log(`🚀 listen carefully`, SERVER_PORT);
});