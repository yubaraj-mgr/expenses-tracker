import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { toast } from "react-toastify";
import { postNewUser } from "../helper/axiosHelper";

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
  // we set object here so that it won't throw undefined error while rendering
  const [resp, setResp] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // simple javascirpt destructin to remove confirmpassword form the form and ...rest is the varaible consisitng of form except confirm password
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }
    // we are not destructing the data because we don't want to display the users on front end
    const { status, message } = await postNewUser(rest);
    console.log(status, message);
    // toast[status] is so that status is a variable
    toast[status](message);
    setResp({ status, message });
    // reseting the form data so that when we submit form we get empty form
    status === "success" && setForm(initialObj);
  };
  return (
    <MainLayout>
      <div>
        <div className="login-page d-flex justify-content-center mt-5">
          <div className="login-form border p-4 shadow-lg bg-light mt-5">
            <h3>Register Now</h3>
            <hr />
            <Form onSubmit={handleOnSubmit}>
              {resp.message && (
                <Alert
                  variant={resp.status === "success" ? "success" : "danger"}
                >
                  {resp.message}
                </Alert>
              )}

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
