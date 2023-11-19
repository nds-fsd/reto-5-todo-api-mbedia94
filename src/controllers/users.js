let { userList } = require("../data/userList");

const getAllUsers = (req, res) => {
  res.status(200).json({ Users: userList });
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const userFound = userList.find((user) => user.id === userId);
  if (userFound) {
    res.status(200).json(userFound);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

const createUser = (req, res) => {
  const lastId = userList.length > 0 ? userList[userList.length - 1].id : 0;
  const newUser = {
    id: lastId + 1,
    ...req.body,
  };
  userList.push(newUser);
  res.status(201).json({ User: newUser });
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = userList.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    userList[userIndex] = {
      ...userList[userIndex],
      ...req.body,
    };
    res.status(200).json(userList[userIndex]);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = userList.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    userList.splice(userIndex, 1);
    res.status(204).send();
  } else res.status(404).json({ error: "User not found" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
