import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CalendarCard from "../calendar-card/calendar-card";

class CalendarsCardsGrid extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.calendars.map((x) => (
          <ListGroup.Item key={x.id}>
            <CalendarCard id={x.id} name={x.name} url={x.url} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CalendarsCardsGrid;
