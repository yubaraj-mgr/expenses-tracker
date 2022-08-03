import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/ExpensesTracker";
    const conn = mongoose.connect(MONGO_CLIENT);
    if (conn) {
      console.log("MongoDB connected");
    }
  } catch (error) {
    console.log(error);
  }
};
