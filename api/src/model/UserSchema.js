import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      //for verify email address
      default: "inactive",
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      // 1 assendng order, -1 descending order
      index: 1,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);
