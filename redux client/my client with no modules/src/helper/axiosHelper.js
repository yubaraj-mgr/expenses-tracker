import axios from "axios";

const rootUrl = "http://localhost:8000";
const userEp = rootUrl + "/api/v1/user";
const transactionEp = rootUrl + "/api/v1/transaction";

// ======= user api

export const postNewUser = async (obj) => {
  try {
    const response = await axios.post(userEp, obj);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (obj) => {
  try {
    const response = await axios.post(userEp + "/login", obj);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ========= transaction api

export const postTransaction = async (obj) => {
  try {
    const response = await axios.post(transactionEp, obj);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getTransaction = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    const response = await axios.get(transactionEp, {
      headers: { authorization: userId },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTransaction = async (_id) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    const response = await axios.delete(transactionEp + "/" + _id, {
      headers: { authorization: userId },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
