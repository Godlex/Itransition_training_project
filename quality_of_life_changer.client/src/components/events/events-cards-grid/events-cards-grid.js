import { Component } from "react";
import { Row } from "react-bootstrap";
import EventCard from "../event-card/event-card";
import "./events-cards-grid.scss";

class EventsCardsGrid extends Component {
  render() {
    return (
      <div className="custom-grid">
        <Row md="auto" sm="auto">
          {this.props.events.map((x) => (
            <EventCard
              key={x.id}
              name={x.name}
              owner={x.owner}
              startTime={x.startDateTime}
              endTime={x.endDateTime}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default EventsCardsGrid;
