import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postTransaction } from "../../helpers/axiosHelper";
import { postDataAction } from "../../pages/transaction/transactionAction";

export const TransactionForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(postDataAction(form));
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h4>Add transactions</h4>

      <Row className="g-2">
        <Col md="2">
          <Form.Select
            defaultValue=""
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
            name="date"
            type="date"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="3">
          <Form.Control
            name="title"
            placeholder="transaction name"
            onChange={handleOnChange}
            required
          />
        </Col>

        <Col md="2">
          <Form.Control
            name="amount"
            type="number"
            placeholder="100"
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
