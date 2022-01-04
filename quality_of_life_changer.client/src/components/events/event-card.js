import { Component } from "react";
import { Card } from "react-bootstrap";
import eventsConstants from "./events-constants";
import "./eventCard.css";

class EventCard extends Component {
  render() {
    return (
      <Card className="customCard">
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Footer>{this.props.owner}</Card.Footer>
        <Card.Body>
          <Card.Title>
            Start Time -{" "}
            {this.props.startTime.format(eventsConstants.DATE_FORMAT)}
          </Card.Title>
          <Card.Title>
            End Time - {this.props.endTime.format(eventsConstants.DATE_FORMAT)}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;
