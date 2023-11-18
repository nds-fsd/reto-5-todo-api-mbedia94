const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/index");

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is up and running in port 3000");
});
