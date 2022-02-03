import moment from "moment";
import { Component } from "react";
import { Card } from "react-bootstrap";
import { eventConstants } from "../events-constants";
import "./event-card.scss";

class EventCard extends Component {
  render() {
    console.log(this.props);
    return (
      <Card className="custom-card">
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Footer>{this.props.owner}</Card.Footer>
        <Card.Body>
          <Card.Title>
            Start Time -{" "}
            {moment(this.props.startTime).format(eventConstants.DATE_FORMAT)}
          </Card.Title>
          <Card.Title>
            End Time -{" "}
            {moment(this.props.endTime).format(eventConstants.DATE_FORMAT)}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;
