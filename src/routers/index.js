const express = require("express");
const todoRouter = require("./todo");
const userRouter = require("./users");

const router = express.Router();

router.use("/todo", todoRouter);
router.use("/user", userRouter);

module.exports = router;
