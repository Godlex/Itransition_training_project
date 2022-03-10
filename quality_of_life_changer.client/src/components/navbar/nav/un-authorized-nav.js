import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UnAuthorizedNav() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
    </Nav>
  );
}
