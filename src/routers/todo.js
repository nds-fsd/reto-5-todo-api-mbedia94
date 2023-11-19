const express = require("express");
const router = express.Router();
const todoRouter = require("../controllers/todo");
const { consoleLogType } = require("../middlewares/index");

router.get("/", consoleLogType, todoRouter.getAllTodo);
router.get("/:id", consoleLogType, todoRouter.getTodoById);
router.post("/", consoleLogType, todoRouter.createTodo);
router.patch("/:id", consoleLogType, todoRouter.updateTodo);
router.delete("/:id", consoleLogType, todoRouter.deleteTodo);

module.exports = router;
