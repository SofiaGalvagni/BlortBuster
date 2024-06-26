import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
} from "../config/config.js";

const connectionDb = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
});

try {
  await connectionDb.authenticate();
  console.log("Connected");
} catch (error) {
  console.error("Not connected to the DB", error);
}
export default connectionDb;
