import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";

export const MainLayout = ({ children, isLogedIn }) => {
  return (
    <div>
      <Header isLogedIn={isLogedIn} />
      <Container>{children}</Container>
    </div>
  );
};
