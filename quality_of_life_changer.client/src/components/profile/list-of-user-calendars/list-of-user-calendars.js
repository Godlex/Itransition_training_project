import { Component } from "react";
import CalendarsCardsGrid from "../calendars-card-grid/calendars-card-grid";
import "./list-of-user-calendars.scss";

class ListOfUserCalendars extends Component {
  render() {
    if (this.props.calendars[0] == null) {
      return (
        <h2 className="user-no-calendars-content">You don't have calendars</h2>
      );
    }

    return (
      <div className="user-calendars-content">
        <h3>Your calendars</h3>
        <CalendarsCardsGrid calendars={this.props.calendars} />
      </div>
    );
  }
}

export default ListOfUserCalendars;
