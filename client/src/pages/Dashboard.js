import React, { useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";
import { TransactionForm } from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    !user._id && navigate("/");
  }, [user]);
  return (
    <MainLayout>
      <Row>
        <h3 className="mt-4">Dashboard</h3>
        <hr />
        {/* form section */}
        <TransactionForm />
        <hr className="mt-5" />

        {/* table section */}
        <TransactionTable />
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
