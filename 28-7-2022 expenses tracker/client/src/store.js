import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./pages/transaction/transactionSlice";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});

export default store;
