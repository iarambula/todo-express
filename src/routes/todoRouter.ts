import { Router } from "express";
import { getRepository } from "typeorm";

import Todo from "../entities/Todo";

const todoRouter = Router();
const todoRepo = getRepository(Todo);

todoRouter.get("/", async (req, res) => {
  const todos = await todoRepo.find({
    order: { updatedAt: "DESC" }
  });
  res.render("todos/index", { todos });
});

todoRouter.get("/new", async (req, res) => {
  res.render("todos/new");
});

todoRouter.post("/", async (req, res) => {
  const todo = todoRepo.create(req.body);
  await todoRepo.save(todo);

  res.redirect("/todos")
});

todoRouter.get("/:id", async (req, res) => {
  const todo = await todoRepo.findOne(req.params.id);
  res.render("todos/show", { todo });
});

todoRouter.get("/:id/edit", async (req, res) => {
  const todo = await todoRepo.findOne(req.params.id);
  res.render("todos/edit", { todo });
});

todoRouter.patch("/:id", async (req, res) => {
  const todo = await todoRepo.findOne(req.params.id);
  todoRepo.merge(todo, req.body);
  await todoRepo.save(todo);
  res.redirect("/todos");
});

todoRouter.delete("/:id", async (req, res) => {
  const todo = await todoRepo.findOne(req.params.id);
  await todoRepo.remove(todo);
  res.redirect("/todos");
});

export default todoRouter;
