const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
dotenv.config();

require("./db");

const app = express();
app.use(cors);
app.use(express.json());
app.use(morgan("dev"));

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);


const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
