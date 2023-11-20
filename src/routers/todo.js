const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");
const { consoleLogType } = require("../middlewares/index");

router.get("/", consoleLogType, todoController.getAllTodo);
router.get("/:id", consoleLogType, todoController.getTodoById);
router.post("/", consoleLogType, todoController.createTodo);
router.patch("/:id", consoleLogType, todoController.updateTodo);
router.delete("/:id", consoleLogType, todoController.deleteTodo);

module.exports = router;
