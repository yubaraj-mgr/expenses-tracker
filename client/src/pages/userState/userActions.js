import { loginUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";
import { setUser } from "./userSlice";

export const loginAction = (object) => async (dispatch) => {
  // first call axios and get data from the server
  const { status, message, user } = await loginUser(object);
  toast[status](message);
  if (status === "success") {
    window.sessionStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(user));
  }
  //   dispatch the incoming data to the slice
};

export const userLogoutAction = () => (dispatch) => {
  dispatch(setUser({}));
  window.sessionStorage.removeItem("user");
};
