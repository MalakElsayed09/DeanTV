import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AppNavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand style={{ fontWeight: "bold", color: "red" }}>
          DeanTV
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
