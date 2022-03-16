import { Component } from "react";
import CalendarsCardsGrid from "../calendars-card-grid/calendars-card-grid";
import { Accordion } from "react-bootstrap";
import "./list-of-user-calendars.scss";
import AddUserCalendar from "../add-user-calendar/add-user-calendar";

class ListOfUserCalendars extends Component {
  render() {
    if (this.props.calendars[0] == null) {
      return <h2 className="user-calendars">You don't have calendars</h2>;
    }

    return (
      <>
        <Accordion flush className="user-calendars">
          <Accordion.Item className="user-calendars-content" eventKey="0">
            <Accordion.Header>
              <h3>Your calendars</h3>
            </Accordion.Header>
            <Accordion.Body>
              <CalendarsCardsGrid calendars={this.props.calendars} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="add-calendar-item">
          <div className="add-calendar-box">
            <AddUserCalendar />
          </div>
        </div>
      </>
    );
  }
}

export default ListOfUserCalendars;
