import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";
import { TransactionForm } from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";

const Dashboard = ({ isLogedIn }) => {
  return (
    <MainLayout isLogedIn={isLogedIn}>
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
