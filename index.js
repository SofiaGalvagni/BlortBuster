import express from "express";
import router from "./router/routes.js";
import connectionDb from "./connection/connectionDb.js";
import { SERVER_PORT } from "./config/config.js";
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

await connectionDb.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`🚀 listen carefully`, SERVER_PORT);
});