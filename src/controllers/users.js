let { userList } = require("../data/userList");

const getAllUsers = (req, res) => {
  try {
    res.status(200).json({ Users: userList });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const userFound = userList.find((user) => user.id === userId);
  try {
    if (userFound) {
      res.status(200).json(userFound);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Se requieren los campos name, email y password." });
    }
    const lastId = userList.length > 0 ? userList[userList.length - 1].id : 0;
    const newUser = {
      id: lastId + 1,
      ...req.body,
    };
    userList.push(newUser);
    res.status(201).json({ User: newUser });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Se requieren los campos name, email y password." });
    }
    const userId = parseInt(req.params.id);
    const userIndex = userList.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      userList[userIndex] = {
        ...userList[userIndex],
        ...req.body,
      };
      res.status(201).json(userList[userIndex]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = userList.findIndex((user) => user.id === userId);
  try {
    if (userIndex !== -1) {
      userList.splice(userIndex, 1);
      res.status(204).send();
    } else res.status(404).json({ error: "User not found" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
