import "reflect-metadata";

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import methodOverride from "method-override";

import router from "./routes";

const port = 8000;
const app = express();

app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride("_method"));
app.use(router);

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});
