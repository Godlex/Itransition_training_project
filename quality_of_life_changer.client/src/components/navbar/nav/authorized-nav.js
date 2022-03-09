import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AuthorizedNav(props) {
  return (
    <Nav>
      <Nav.Link as={Link} to="/user-profile">
        Hello! {props.name}
      </Nav.Link>
      <Nav.Link onClick={props.handleClick}>Logout</Nav.Link>
    </Nav>
  );
}
