import { getOneUser } from "../models/userModel/UserModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    //   do authorization header available
    const { authorization } = req.headers;
    if (authorization) {
      //   do user exist in the db
      const user = await getOneUser({ _id: authorization });
      if (user?._id) {
        req.userInfo = user;
        return next();
      }
    }
    res.status(403).json({
      status: "error",
      message: "Unauthorized",
    });
  } catch (error) {
    next(error);
  }
};
