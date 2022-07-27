import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const handleOnLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Nav.Link onClick={handleOnLogout}> Log Out</Nav.Link>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
