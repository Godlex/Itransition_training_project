import { Component } from "react";
import { Row } from "react-bootstrap";
import CalendarCard from "../calendars-card/calendars-card";

class CalendarsCardsGrid extends Component {
  render() {
    return (
      <div className="custom-grid">
        <Row md="auto" sm="auto">
          {this.props.calendars.map((x) => (
            <CalendarCard key={x.name} name={x.name} url={x.url} />
          ))}
        </Row>
      </div>
    );
  }
}

export default CalendarsCardsGrid;
