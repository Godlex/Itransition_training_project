import { Component } from "react";
import {  Col, Row } from "react-bootstrap";
import EventCard from "./EventCard";

class EventsCardsGrid extends Component {
  render() {
    return (
      <Row xs={1} className="g-4">
        {Array.from(this.props.events).map(x => (
          <Col md="auto">
            <EventCard name={x.name} owner ={x.owner} startTime={x.startTime} endTime={x.endTime}/>
          </Col>
        ))}
      </Row>
    );
  }
}

export default EventsCardsGrid;
