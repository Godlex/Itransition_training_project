import { Component } from "react";
import CalendarCard from "../calendar-card/calendar-card";

class CalendarsCardsGrid extends Component {
  render() {
    return (
      <div className="custom-grid">
        <div>
          {this.props.calendars.map((x) => (
            <CalendarCard key={x.name} name={x.name} url={x.url} />
          ))}
        </div>
      </div>
    );
  }
}

export default CalendarsCardsGrid;
