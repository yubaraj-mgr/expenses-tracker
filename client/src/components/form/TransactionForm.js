import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const TransactionForm = ({ postData }) => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // sending uiser id to table data so that each user has thier own data.
    postData(form);
  };

  return (
    <Form className="mt-4" onSubmit={handleOnSubmit}>
      <h4>Add Transactions</h4>
      <Row className="g-2">
        <Col md="2">
          <Form.Select
            defaultValue="Choose..."
            name="type"
            onChange={handleOnChange}
            required
          >
            <option value="">Choose...</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Col>
        <Col md="2">
          <Form.Control
            name="title"
            placeholder="Transaction name"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            type="date"
            name="date"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            type="number"
            name="amount"
            placeholder="amount"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control type="submit" className="btn btn-primary" />
        </Col>
      </Row>
    </Form>
  );
};

export default TransactionForm;
