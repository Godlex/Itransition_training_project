import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import EventCard from "../event-card/event-card";
import "./events-cards-grid.css";

class EventsCardsGrid extends Component {
  render() {
    return (
      <div className="customGrid">
        <Row md="auto" sm="auto">
          {Array.from(
            this.props.events.map((x) => (
              <EventCard
                name={x.name}
                owner={x.owner}
                startTime={x.startTime}
                endTime={x.endTime}
              />
            ))
          )}
        </Row>
      </div>
    );
  }
}

export default EventsCardsGrid;
