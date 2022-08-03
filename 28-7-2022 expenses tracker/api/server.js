import express from "express";
const app = express();
import cors from "cors";
const PORT = 8000;

// db connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

// APIs
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", transactionRouter);

// Server side rendering
app.use("/", (req, res, next) => {
  try {
    res.send("<h1>Comming soon ... </h1>");
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  const status = error.status || 404;

  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`your server is serving at http://localhost:${PORT}`);
});
