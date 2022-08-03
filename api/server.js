import "dotenv/config";
import express from "express";
import { authMiddleware } from "./src/middlewares/authMiddleware.js";
const app = express();
import cors from "cors";
const PORT = process.env.PORT || 8000;
import path from "path";

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

app.use("/api/v1/transaction", authMiddleware, transactionRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
// Server side rendering
app.use("/", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
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
