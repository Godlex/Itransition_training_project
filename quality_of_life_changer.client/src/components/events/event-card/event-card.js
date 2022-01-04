import { Component } from "react";
import { Card } from "react-bootstrap";
import { eventConstants } from "../events-constants";
import "./event-card.css";

class EventCard extends Component {
  render() {
    return (
      <Card className="customCard" >
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Footer>{this.props.owner}</Card.Footer>
        <Card.Body>
          <Card.Title>
            Start Time -{" "}
            {this.props.startTime.format(eventConstants.DATE_FORMAT)}
          </Card.Title>
          <Card.Title>
            End Time - {this.props.endTime.format(eventConstants.DATE_FORMAT)}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;
