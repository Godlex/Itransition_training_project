import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UnAuthorizedNav() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/login">
        login
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        register
      </Nav.Link>
    </Nav>
  );
}
