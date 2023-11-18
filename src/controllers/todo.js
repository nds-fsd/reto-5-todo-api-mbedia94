const { todos } = require("../data/index");

const getAllTodo = (req, res) => {
  res.status(200).send({ Task: todos });
};

const getUniqueTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoFound = todos.find((todo) => todo.id === todoId);
  if (todoFound) {
    res.status(200).send(todoFound);
  } else res.status(404).json({ error: "Todo not found" });
};

const createTodo = (req, res) => {
  const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
  const newTodo = {
    id: lastId + 1,
    ...req.body,
  };
  todos.push(newTodo);
  res.send({ Task: newTodo });
};

const updateTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      ...todos[todoIndex],
      ...req.body,
    };
    res.status(200).json(todos[todoIndex]);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
};

const deleteTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.status(204).send();
  } else res.status(404).json({ error: "Todo not found" });
};

module.exports = {
  getAllTodo,
  createTodo,
  getUniqueTodo,
  updateTodo,
  deleteTodo,
};
