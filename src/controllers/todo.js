const { todoList } = require("../data/todoList");

const getAllTodo = (req, res) => {
  res.status(200).json({ Task: todoList });
};

const getTodoById = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoFound = todoList.find((todo) => todo.id === todoId);
  if (todoFound) {
    res.status(200).json(todoFound);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
};

const createTodo = (req, res) => {
  const { text, fecha, done } = req.body;
  if (!text || !fecha || !done) {
    return res
      .status(400)
      .json({ error: "Se requieren los campos text, fecha y done." });
  }
  const lastId = todoList.length > 0 ? todoList[todoList.length - 1].id : 0;
  const newTodo = {
    id: lastId + 1,
    ...req.body,
  };
  todoList.push(newTodo);
  res.status(201).json({ Task: newTodo });
};

const updateTodo = (req, res) => {
  const { text, fecha, done } = req.body;
  if (!text || !fecha || !done) {
    return res
      .status(400)
      .json({ error: "Se requieren los campos text, fecha y done." });
  }
  const todoId = parseInt(req.params.id);
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todoList[todoIndex] = {
      ...todoList[todoIndex],
      ...req.body,
    };
    res.status(200).json(todoList[todoIndex]);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
};

const deleteTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todoList.splice(todoIndex, 1);
    res.status(204).send();
  } else res.status(404).json({ error: "Todo not found" });
};

module.exports = {
  getAllTodo,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
