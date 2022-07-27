import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";

const MainLayout = ({ children, isLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Container>{children}</Container>
    </div>
  );
};

export default MainLayout;
