import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      // What the hell is this?
      type: mongoose.Types.ObjectId,
      //for verify email address
      ref: "User",
      default: "inactive",
    },
    type: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export default mongoose.model("transaction", transactionSchema);
