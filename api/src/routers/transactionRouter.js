import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransaction,
} from "../model/transaction/TransactionModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await addTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New Transaction Added",
          result,
        })
      : res.json({
          status: "error",
          message: "Transactin not Completed",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const filter = {
      userId: authorization,
    };
    const trans = await getTransaction(filter);
    res.json({
      status: "success",
      message: "Here are the transactions",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = req.params;
    if (authorization && _id) {
      const filter = {
        userId: authorization,
        _id,
      };
      const result = await deleteTransaction(filter);
      console.log(result);
      if (result._id) {
        return res.json({
          status: "success",
          message: "The transactions has been deleted",
        });
      }
    }
    res.json({
      status: "error",
      message: "Invalid request",
    });
  } catch (error) {
    error && console.log(error);
  }
});

// so that no body can delete each otherr items

export default router;
