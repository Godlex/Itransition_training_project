import { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class CalendarCard extends Component {
  render() {
    return (
      <Card className="custom-card">
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Body>
          <Card.Link as={Link} to={this.props.url}>
            Download
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CalendarCard;
