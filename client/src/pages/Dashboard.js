import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";
import TransactionForm from "../components/form/TransactionForm";
import TransactionTable from "../components/transactionTable/transactionTable";
import {
  deleteTransaction,
  getTransaction,
  postTransaction,
} from "../helper/axiosHelper";

import { toast } from "react-toastify";

const Dashboard = ({ isLoggedIn }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { status, trans } = await getTransaction();
    // if status && length than setTransaction(trans), doing trans.length so that it wont show error if theres no data in the database for the specific user.
    status === "success" && setTransactions(trans);
  };

  const postData = async (form) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    const { status, message } = await postTransaction({ ...form, userId });
    toast[status](message);
    fetchData();
    status === "success" && fetchData();
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Arye you sure you want to delete it?")) {
      return;
    }
    const { status, message } = await deleteTransaction(_id);
    toast[status](message);
    fetchData();
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <Row>
        <h3 className="mt-4">Dashboard</h3>
        <hr className="1" />
        {/* {FormSection} */}
        <TransactionForm postData={postData} />
        <hr className="mt-5" />
        {/* Table Section */}
        <TransactionTable
          transactions={transactions}
          handleOnDelete={handleOnDelete}
        />
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
