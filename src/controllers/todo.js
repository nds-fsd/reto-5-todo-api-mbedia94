const { todoList } = require("../data/todoList");

const getAllTodo = (req, res) => {
  try {
    res.status(200).json({ Task: todoList });
  } catch (error) {
    console.log(error);
  }
};

const getTodoById = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoFound = todoList.find((todo) => todo.id === todoId);
  try {
    if (todoFound) {
      res.status(200).json(todoFound);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createTodo = (req, res) => {
  const { text, fecha, done } = req.body;
  try {
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
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = (req, res) => {
  const { text, fecha, done } = req.body;
  try {
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
      res.status(201).json(todoList[todoIndex]);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  try {
    if (todoIndex !== -1) {
      todoList.splice(todoIndex, 1);
      res.status(204).send();
    } else res.status(404).json({ error: "Todo not found" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTodo,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
