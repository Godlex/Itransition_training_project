import React, { Component } from "react";
import EventsCardsGrid from "./events-cards-grid/events-cards-grid";
import { connect } from "react-redux";
import { getTodayEvents } from "../../redux-modules/calendars/actions";
import "./today-events-page.scss";

class TodayEventsPage extends Component {
  constructor(props) {
    super(props);
    this.props.getTodayEvents();
  }

  render() {
    if (this.props.todayEvents == null) {
      return <h1 className="today-events-error-page">No events today</h1>;
    }
    return <EventsCardsGrid events={this.props.todayEvents} />;
  }
}

function update(state) {
  return {
    todayEvents: state.calendars.todayEvents,
  };
}

export default connect(update, { getTodayEvents })(TodayEventsPage);
