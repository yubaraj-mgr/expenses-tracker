import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { loginUser } from "../helper/axiosHelper";
import { toast } from "react-toastify";

//   Uncontrolled field data means I don't have the power what's typing
// we use uncontrolled filed when we have few fields and we don't care about the field, we only care what we get after the submit
const Login = ({ setIsLoggedIn }) => {
  // new hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { status, message, user } = await loginUser({ email, password });
    toast[status](message);
    // to store data so that we know when user is logged in or when they are logged out
    if (status === "success") {
      window.localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  };
  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-5">
        <div className="login-form border p-4 shadow-lg bg-light mt-5">
          <h3>Welcome Back</h3>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                name="userName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div className="text-end">
            New here? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
