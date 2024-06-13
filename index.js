import express from "express";
import router from "./router/routes.js";

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(8080, () => {
  console.log(`🚀 listen carefully`, 8080);
});