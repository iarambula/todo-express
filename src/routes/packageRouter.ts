import express, { Router } from "express";
import path from "path";
import fs from "fs";

const packageRouter = Router();

packageRouter.use("/bootstrap", express.static(path.join(__dirname, "../../node_modules/bootstrap/dist")));
packageRouter.use("/jquery", express.static(path.join(__dirname, "../../node_modules/jquery/dist")));
packageRouter.use("/popper.js", express.static(path.join(__dirname, "../../node_modules/popper.js/dist")));

export default packageRouter;
