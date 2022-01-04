import { Component } from "react";
import { Card } from "react-bootstrap";
import "./eventCard.css";

class EventCard extends Component {
  render() {
    return (
      <Card className="customCard">
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Footer>{this.props.owner}</Card.Footer>
        <Card.Body>
          <Card.Title>
            Start Time - {this.props.startTime.format(" hh:mm a DD-MMM-YY")}
          </Card.Title>
          <Card.Title>
            End Time - {this.props.endTime.format(" hh:mm a DD-MMM-YY")}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;
