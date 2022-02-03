import React, { Component } from "react";
import EventsCardsGrid from "./events-cards-grid/events-cards-grid";
import { connect } from "react-redux";
import { getTodayEvents } from "../../redux-modules/events/actions";
import "./today-events-page.scss";

class TodayEventsPage extends Component {
  constructor(props) {
    super(props);
    this.props.getTodayEvents();
  }

  render() {
    if (this.props.events == null) {
      return <h1 className="today-events-error-page">No events today</h1>;
    }
    return <EventsCardsGrid events={this.props.events} />;
  }
}

function update(state) {
  console.log(state);
  return {
    events: state.events.events,
  };
}

export default connect(update, { getTodayEvents })(TodayEventsPage);
