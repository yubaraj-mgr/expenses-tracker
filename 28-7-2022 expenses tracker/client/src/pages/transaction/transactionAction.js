import { toast } from "react-toastify";
import {
  deleteTransaction,
  getTransactions,
  postTransaction,
} from "../../helpers/axiosHelper";
import { setTransactions } from "./transactionSlice";

export const fetchDataAction = () => async (dispatch) => {
  const { status, trans } = await getTransactions();
  status === "success" && dispatch(setTransactions(trans));
};

export const postDataAction = (form) => async (dispatch) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const userId = user._id;
  const { status, message } = await postTransaction({ ...form, userId });
  toast[status](message);

  status === "success" && dispatch(fetchDataAction());
};

export const handleOnDeleteAction = (_id) => async (dispatch) => {
  if (!window.confirm("Are you sure you want to delet it?")) {
    return;
  }
  const { status, message } = await deleteTransaction(_id);
  console.log(status, message);
  toast[status](message);

  status === "success" && dispatch(fetchDataAction());
};
