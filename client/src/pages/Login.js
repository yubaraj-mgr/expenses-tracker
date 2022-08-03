import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./userState/userActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { user } = useSelector((state) => state.user);
  // [user] is so that when user is changedd render it
  useEffect(() => {
    //
    user._id && navigate("/dashboard");
  }, [user]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const { status, message, user } = await loginUser({ email, password });
    // toast[status](message);
    dispatch(loginAction({ email, password }));
    // if (status === "success") {
    //   window.sessionStorage.setItem("user", JSON.stringify(user));
    //   navigate("/dashboard");
    // }
  };
  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-5 ">
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
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={passwordRef}
                type="password"
                placeholder="Password"
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
