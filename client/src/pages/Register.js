import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

// so that it won't re-render every time we call the register
const initialObj = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [form, setForm] = useState(initialObj);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // reseting the form data so that when we submit form we get empty form
    setForm(initialObj);
  };
  return (
    <MainLayout>
      <div>
        <div className="login-page d-flex justify-content-center mt-5">
          <div className="login-form border p-4 shadow-lg bg-light mt-5">
            <h3>Register Now</h3>
            <hr />
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  name="firstName"
                  //   so that it will make the form empty because when we press submit it will reset the form
                  value={form.firstName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  name="lastName"
                  value={form.lastName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  name="email"
                  value={form.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={handleOnChange}
                  name="password"
                  value={form.password}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={handleOnChange}
                  name="confirmPassword"
                  value={form.confirmPassword}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <div className="text-end">
              Already register here? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
