import express from "express";
import { insertUser, getOneUser } from "../model/UserModel.js";

const router = express.Router();

// 1. First do post

router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message:
            "Your account has been created successfully, Please go to login page and login with your email: " +
            result.email,
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to register, please try again later",
          result,
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "There is anohter user already exist with this email";
    }
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    // console.log(fetchAllData());
    const { email, password } = req.body;
    // because it must be ojbect or email:email = email
    // only passing email here caz theres two step here first checking if we have data that has email of that and than do the followng
    const user = await getOneUser({ email });

    // So that we don't send the password
    if (user?.password === password) {
      // so that we don't send password as json for security reason
      user.password = undefined;
      res.json({
        status: "success",
        message: "Login successfully",
        user,
      });
    } else {
      res.json({
        status: "error",
        message: "Invalid Login information",
      });
    }
  } catch (error) {
    next(error);
  }
});

// router.delete("/", async (req, res, next) => {
//   try {
//     const { ids } = req.body;
//     // console.log(deleteManyTask(ids));
//     const result = await deleteManyTask(ids);
//     res.json({
//       status: "success",
//       message: "Please check your email to verify your account",
//       result,
//     });
//   } catch (error) {
//     error && console.log(error);
//   }
// });

export default router;
