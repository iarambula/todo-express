import { Router } from "express";

import packageRouter from "./packageRouter";
import todoRouter from "./todoRouter";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Hello World!", message: "Hello World!" })
});

router.use("/packages", packageRouter);
router.use("/todos", todoRouter);

export default router;
