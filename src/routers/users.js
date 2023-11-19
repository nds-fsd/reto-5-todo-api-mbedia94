const express = require("express");
const router = express.Router();
const userRouter = require("../controllers/users");
const { consoleLogType } = require("../middlewares/index");

router.get("/", consoleLogType, userRouter.getAllUsers);
router.get("/:id", consoleLogType, userRouter.getUserById);
router.post("/", consoleLogType, userRouter.createUser);
router.patch("/:id", consoleLogType, userRouter.updateUser);
router.delete("/:id", consoleLogType, userRouter.deleteUser);

module.exports = router;
