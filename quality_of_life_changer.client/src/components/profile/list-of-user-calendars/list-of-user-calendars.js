import { Component } from "react";
import CalendarsCardsGrid from "../calendars-card-grid/calendars-card-grid";
import { Accordion } from "react-bootstrap";
import "./list-of-user-calendars.scss";

class ListOfUserCalendars extends Component {
  render() {
    if (this.props.calendars[0] == null) {
      return <h2 className="user-calendars">You don't have calendars</h2>;
    }

    return (
      <Accordion flush className="user-calendars">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>Your calendars</h3>
          </Accordion.Header>
          <Accordion.Body>
            <CalendarsCardsGrid calendars={this.props.calendars} />{" "}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default ListOfUserCalendars;
